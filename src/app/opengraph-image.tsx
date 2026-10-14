import { ImageResponse } from "next/og";

export const alt =
  "Wathshala Amarasinghe — UI/UX Product Designer and Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "radial-gradient(circle at 82% 18%, #231f3e 0%, #101218 38%, #08090d 78%)",
        color: "#f8fafc",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid rgba(169, 149, 255, 0.28)",
          borderRadius: "40px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 64px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#a995ff",
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Portfolio · Sri Lanka
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Wathshala Amarasinghe
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 34,
              marginTop: 22,
            }}
          >
            UI/UX Product Designer + Engineer
          </div>
        </div>
        <div
          style={{
            color: "#92d6ff",
            display: "flex",
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          KAVON · Smart Web POS · Nation Spice
        </div>
      </div>
    </div>,
    size
  );
}
