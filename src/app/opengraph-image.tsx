import { ImageResponse } from "next/og";

export const alt = "Growers Ground — find garden space and local gardeners on a map";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#3D5F49",
          color: "#F7F4EC",
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.85 }}>Growers Ground</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 24 }}>
          Find garden space on a map.
        </div>
        <div style={{ fontSize: 36, marginTop: 32, opacity: 0.9 }}>
          Connect with local hosts and gardeners · US &amp; Canada
        </div>
      </div>
    ),
    size,
  );
}
