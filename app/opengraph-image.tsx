import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f7f3eb 0%, #efe5d5 55%, #d9f1ea 100%)",
          padding: "56px",
          color: "#172019",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "88px",
              width: "88px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              background: "#0f766e",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "0.24em",
            }}
          >
            TF
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "860px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.06em",
            }}
          >
            Fast, simple, free online tools.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#44504a",
            }}
          >
            Bio Generator, Nickname Generator, QR Code Generator, Case Converter,
            and Decision Wheel in one clean multilingual product.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: 24,
            color: "#44504a",
          }}
        >
          <div>EN</div>
          <div>TR</div>
          <div>ES</div>
          <div>DE</div>
          <div>FR</div>
          <div>PT</div>
        </div>
      </div>
    ),
    size
  );
}
