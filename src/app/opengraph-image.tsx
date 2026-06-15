import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — General Contractor in East Texas`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #11151b 0%, #37404b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#7ea8f7",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 18,
              background: "linear-gradient(180deg, #5b94f6 0%, #2f63e0 55%, #1a3fb0 100%)",
              color: "#ffffff",
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            RG
          </div>
          Licensed &amp; Insured
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            textTransform: "uppercase",
            maxWidth: 900,
          }}
        >
          Quality Construction You Can Build On
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#aeb7c2" }}>
          General Contractor · Longview · Tyler · Kilgore · Marshall
        </div>
      </div>
    ),
    { ...size },
  );
}
