// Generates public/og.png (1200x630) in the brand palette. Run with: node scripts/make-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(new URL("../public/og.png", import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="10%" cy="5%" r="70%">
      <stop offset="0%" stop-color="#2E6B5A" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#2E6B5A" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="95%" cy="95%" r="60%">
      <stop offset="0%" stop-color="#1F463E"/>
      <stop offset="100%" stop-color="#1F463E" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g3" cx="82%" cy="22%" r="18%">
      <stop offset="0%" stop-color="#E3A92B" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#E3A92B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#17342E"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect width="1200" height="630" fill="url(#g3)"/>
  <text x="90" y="150" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="44" fill="#F6F1E7">Root <tspan fill="#E3A92B">&amp;</tspan> Reinvent</text>
  <rect x="90" y="190" width="72" height="5" rx="2" fill="#E3A92B"/>
  <text font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="700" font-size="84" fill="#F6F1E7" letter-spacing="-2">
    <tspan x="90" y="330">Closing deals takes</tspan>
    <tspan x="90" y="430">finding deals.</tspan>
  </text>
  <text x="90" y="530" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-weight="600" font-size="26" letter-spacing="4" fill="#CFE0D6">NEW-LOGO SALES CONSULTING  ·  THE REPEAT SUCCESS METHOD</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log(`Wrote ${out}`);
