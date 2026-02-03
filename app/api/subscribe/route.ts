import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email || "").trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const subscribers = db.collection("subscribers");

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;

    await subscribers.updateOne(
      { email },
      {
        $setOnInsert: {
          email,
          createdAt: new Date(),
        },
        $set: {
          lastSubscribedAt: new Date(),
          ip,
          userAgent: req.headers.get("user-agent") || null,
        },
      },
      { upsert: true }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
