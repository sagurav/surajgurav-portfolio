import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#00BFA5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#080E1A",
          fontSize: 13,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        SG
      </div>
    ),
    { ...size }
  );
}
