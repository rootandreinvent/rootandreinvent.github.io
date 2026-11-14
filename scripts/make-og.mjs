// Generates public/og.png (1200x630) in the brand palette. Run with: node scripts/make-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));
const markPath = fileURLToPath(new URL("../src/assets/logo-mark.png", import.meta.url));

const serif = "Source Serif 4, Georgia, Times New Roman, serif";
const sans = "Inter, Helvetica Neue, Helvetica, Arial, sans-serif";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="10%" cy="5%" r="70%">
      <stop offset="0%" stop-color="#2E6B5A" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#2E6B5A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="95%" cy="95%" r="60%">
      <stop offset="0%" stop-color="#1F463E"/>
      <stop offset="100%" stop-color="#1F463E" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#17342E"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#E3A92B" stroke-width="2"/>
  <text x="230" y="140" font-family="${serif}" font-weight="600" font-size="30" letter-spacing="7" fill="#F6F1E7">ROOT <tspan fill="#E3A92B">&amp;</tspan> REINVENT</text>
  <text font-family="${serif}" font-weight="700" font-size="88" fill="#F6F1E7">
    <tspan x="90" y="320">Closing deals takes</tspan>
    <tspan x="90" y="420">finding deals.</tspan>
  </text>
  <path transform="translate(0 14)" d="M92 452C200 440 360 434 480 437c60 1.5 110 5 150 10-48-2.5-100-4-150-3.6C360 444 200 449 92 457z" fill="#E3A92B"/>
  <text x="90" y="540" font-family="${sans}" font-weight="600" font-size="24" letter-spacing="4" fill="#CFE0D6">NEW-LOGO SALES CONSULTING  ·  THE REPEAT SUCCESS METHOD</text>
</svg>`;

const mark = await sharp(markPath).resize(112, 112).png().toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: mark, left: 90, top: 74 }])
  .png({ compressionLevel: 9 })
  .toFile(out);
console.log(`Wrote ${out}`);
