import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at top, rgba(56,189,248,0.25), rgba(15,23,42,1))",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: "56px", fontWeight: 700 }}>
          Agus Mathew
        </div>
        <div style={{ fontSize: "28px", marginTop: "12px", color: "#cbd5f5" }}>
          Senior Full Stack Engineer
        </div>
        <div style={{ fontSize: "22px", marginTop: "24px", color: "#94a3b8" }}>
          Scalable platforms · Serverless systems · Product engineering
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
