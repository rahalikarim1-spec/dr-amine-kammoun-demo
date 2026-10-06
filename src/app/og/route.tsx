import { ImageResponse } from "next/og";

export const dynamic = "force-static";

/** Default Open Graph image (1200×630). Latin text only: the default OG font has no Arabic glyphs. */
export async function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#fbf8f4 0%,#d6ebe8 100%)", color: "#14262b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 36, background: "#1f5450", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700 }}>AK</div>
          <div style={{ fontSize: 30, color: "#3d5258" }}>Tunis · Ain Zaghouan Nord</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Dr Amine Kammoun</div>
          <div style={{ fontSize: 44, color: "#276863", marginTop: 16 }}>Gynécologue-Obstétricien</div>
        </div>
        <div style={{ fontSize: 28, color: "#3d5258" }}>Gynécologie · Grossesse · Échographie · Fertilité</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
