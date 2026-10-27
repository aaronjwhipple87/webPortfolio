import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const assets = Promise.all([
  readFile(join(process.cwd(), "src/fonts/JuliusSansOne-Regular.ttf")),
  readFile(join(process.cwd(), "src/fonts/Monda-Regular.ttf")),
  readFile(join(process.cwd(), "public/img/icon-white.png"), "base64"),
]);

/** Branded social-share card used by the site and every project page. */
export async function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const [julius, monda, logo] = await assets;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #223134 0%, #223134 55%, #922260 100%)",
          color: "#f7f9fa",
          fontFamily: "Monda",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 32, color: "#adc4ce", textTransform: "uppercase", letterSpacing: 4 }}>{eyebrow}</span>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img tags */}
          <img src={`data:image/png;base64,${logo}`} width={180} height={100} alt="" />
        </div>
        <div style={{ display: "flex", fontFamily: "Julius Sans One", fontSize: title.length > 28 ? 72 : 92, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#adc4ce" }}>{footer}</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Julius Sans One", data: julius, weight: 400, style: "normal" },
        { name: "Monda", data: monda, weight: 400, style: "normal" },
      ],
    },
  );
}
