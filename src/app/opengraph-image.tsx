import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

// The site-wide share card for links on LinkedIn, X, WhatsApp and search results. Pages with
// their own photo (programs, blog articles) share that instead.
export const alt = siteConfig.shareImage.alt;
export const size = { width: siteConfig.shareImage.width, height: siteConfig.shareImage.height };
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public/images/brand/canada-school-of-leadership-white.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoData}`;

// Concentric rings in the corner, echoing the arcs of the logo mark.
const rings = [520, 400, 280, 160];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          overflow: "hidden",
          color: "#ffffff",
          background: "linear-gradient(135deg, #0c1f43 0%, #1a48bc 62%, #2f7fe3 100%)",
        }}
      >
        {rings.map((diameter) => (
          <div
            key={diameter}
            style={{
              position: "absolute",
              right: 120 - diameter / 2,
              bottom: 90 - diameter / 2,
              width: diameter,
              height: diameter,
              border: "2px solid rgba(255, 255, 255, 0.14)",
              borderRadius: "50%",
            }}
          />
        ))}

        <img alt="" height={96} src={logoSrc} width={277} />

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
          <div
            style={{
              display: "flex",
              color: "#9cc2ff",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            A Strategic Partnership
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 18, fontSize: 64, lineHeight: 1.1 }}>
            Leadership development for a more influential&nbsp;
            <span style={{ color: "#9cc2ff" }}>tomorrow.</span>
          </div>
        </div>

        <div style={{ display: "flex", color: "rgba(255, 255, 255, 0.82)", fontSize: 24 }}>
          Executive programs · CXO community · Real-world impact
        </div>
      </div>
    ),
    size,
  );
}
