import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      sessionId,
      path,
      title,
      referrer,
      userAgent,
      language,
      languages,
      platform,
      deviceType,
      deviceName,
      deviceModel,
      deviceMemory,
      hardwareConcurrency,
      connection,
      viewport,
      screen,
      preferences,
      timeZone,
    } = body || {};

    if (!sessionId || !path) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolio");
    const visits = db.collection("visits");

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      null;

    let location: Record<string, unknown> | null = null;
    const token = process.env.IPINFO_TOKEN;

    if (ip && token) {
      try {
        const res = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
        if (res.ok) {
          const data = await res.json();

          console.log(data, "data");
          location = {
            city: data.city || null,
            region: data.region || null,
            country: data.country || null,
            loc: data.loc || null,
            org: data.org || null,
            postal: data.postal || null,
            timezone: data.timezone || null,
          };
        }
      } catch {
        location = null;
      }
    }

    await visits.insertOne({
      sessionId,
      path,
      title,
      referrer,
      userAgent,
      language,
      languages,
      platform,
      deviceType,
      deviceName,
      deviceModel,
      deviceMemory,
      hardwareConcurrency,
      connection,
      viewport,
      screen,
      preferences,
      timeZone,
      ip,
      location,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to record visit" },
      { status: 500 },
    );
  }
}
