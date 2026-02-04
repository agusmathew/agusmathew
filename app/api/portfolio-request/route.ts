import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";

const bucket = process.env.S3_BUCKET;
const region = process.env.AWS_REGION;
const fromEmail = process.env.SES_FROM_EMAIL;
const notifyEmail = process.env.NOTIFY_EMAIL;

const s3 = new S3Client({ region });
const ses = new SESClient({ region });

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, "_");
}

export async function POST(req: NextRequest) {
  try {
    if (!bucket || !region || !fromEmail || !notifyEmail) {
      return NextResponse.json(
        { error: "Server not configured" },
        { status: 500 },
      );
    }

    const form = await req.formData();
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const file = form.get("cv");

    if (!name || !email || !file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      return NextResponse.json(
        { error: "File too large (max 5MB)" },
        { status: 400 },
      );
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (file.type && !allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const key = `portfolio-requests/${Date.now()}_${sanitizeFilename(
      name,
    )}_${sanitizeFilename(file.name)}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: Buffer.from(arrayBuffer),
        ContentType: file.type || "application/octet-stream",
      }),
    );

    const fileUrl = `https://${bucket}.s3.${region}.amazonaws.com/${key}`;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const client = await clientPromise;
    const db = client.db("portfolio");
    const requests = db.collection("portfolio_requests");

    await requests.insertOne({
      name,
      email,
      message,
      fileName: file.name,
      fileType: file.type || null,
      fileSize: file.size,
      s3Key: key,
      s3Url: fileUrl,
      ip,
      createdAt: new Date(),
    });

    const emailBody = [
      "New portfolio request:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Message: ${message || "(none)"}`,
      `CV S3 Key: ${key}`,
      `CV URL: ${fileUrl}`,
      `IP: ${ip}`,
    ].join("\n");

    const sendEmailResponse = await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [notifyEmail] },
        Message: {
          Subject: { Data: "New Portfolio Request" },
          Body: {
            Text: { Data: emailBody },
          },
        },
      }),
    );

    console.log(sendEmailResponse, "sendEmailResponse");

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log("Error processing portfolio request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
