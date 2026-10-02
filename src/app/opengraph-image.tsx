import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = `${DATA.name} — ${DATA.roles[0]}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Same palette as the site (globals.css): navy background, slate text, amber accent.
const NAVY = "#0a192f";
const CARD = "#112240";
const TEXT = "#ccd6f6";
const SLATE = "#8892b0";
const AMBER = "#f5b95a";

const getFontData = async () => {
  try {
    const [cabinetGrotesk, clashDisplay] = await Promise.all([
      fetch(new URL("../../public/fonts/CabinetGrotesk-Medium.ttf", import.meta.url)).then((res) => res.arrayBuffer()),
      fetch(new URL("../../public/fonts/ClashDisplay-Semibold.ttf", import.meta.url)).then((res) => res.arrayBuffer()),
    ]);
    return { cabinetGrotesk, clashDisplay };
  } catch (error) {
    console.error("Failed to load fonts:", error);
    return null;
  }
};

export default async function Image() {
  try {
    const fontData = await getFontData();
    const host = new URL(DATA.url).host;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            backgroundColor: NAVY,
            backgroundImage: `radial-gradient(circle at 15% 0%, ${CARD} 0%, ${NAVY} 55%)`,
            fontFamily: "Cabinet Grotesk",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "72px",
                height: "72px",
                border: `4px solid ${AMBER}`,
                borderRadius: "16px",
                color: AMBER,
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              SP
            </div>
            <div style={{ display: "flex", color: AMBER, fontSize: "26px" }}>{DATA.roles[0]}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: AMBER, fontSize: "28px", marginBottom: "12px" }}>
              {DATA.hero.greeting}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Clash Display",
                fontSize: "76px",
                lineHeight: 1.05,
                color: TEXT,
                letterSpacing: "-0.02em",
              }}
            >
              {DATA.name}.
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Clash Display",
                fontSize: "52px",
                lineHeight: 1.15,
                color: SLATE,
                marginTop: "12px",
                maxWidth: "1000px",
              }}
            >
              {DATA.hero.line}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `2px solid ${CARD}`,
              paddingTop: "24px",
              color: SLATE,
              fontSize: "24px",
            }}
          >
            <div style={{ display: "flex" }}>FastAPI · Redis Streams · AWS · Multi-agent AI</div>
            <div style={{ display: "flex", color: AMBER }}>{host}</div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: fontData
          ? [
              { name: "Cabinet Grotesk", data: fontData.cabinetGrotesk, weight: 400, style: "normal" },
              { name: "Cabinet Grotesk", data: fontData.cabinetGrotesk, weight: 700, style: "normal" },
              { name: "Clash Display", data: fontData.clashDisplay, weight: 600, style: "normal" },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(`Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`, {
      status: 500,
    });
  }
}
