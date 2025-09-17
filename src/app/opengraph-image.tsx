import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const alt = "VibeyTest lean-test-20250917-145755";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            width: "630px",
            height: "630px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "60px",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "40px 60px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
                margin: "0",
                lineHeight: "1.2",
              }}
            >
              VibeyTest
            </h1>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "rgba(255, 255, 255, 0.8)",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "26px",
                color: "rgba(255, 255, 255, 0.9)",
                margin: "0",
                lineHeight: "1.4",
                maxWidth: "400px",
              }}
            >
              A lean testing framework for web applications
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "18px",
                  color: "white",
                }}
              >
                Testing Framework
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "18px",
                  color: "white",
                }}
              >
                Web Apps
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}