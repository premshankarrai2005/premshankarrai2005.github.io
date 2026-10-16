/**
 * Converts public/og-image.svg → public/og-image.png
 * Run once: node scripts/generate-og-image.mjs
 *
 * Requires: npm install -D @resvg/resvg-js
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

let Resvg;
try {
    ({ Resvg } = await import('@resvg/resvg-js'));
} catch (e) {
    console.error('❌ @resvg/resvg-js not found. Install it first:');
    console.error('   npm install -D @resvg/resvg-js');
    process.exit(1);
}

const svgPath = resolve(root, 'public', 'og-image.svg');
const pngPath = resolve(root, 'public', 'og-image.png');

const svgData = readFileSync(svgPath, 'utf-8');

const resvg = new Resvg(svgData, {
    fitTo: { mode: 'width', value: 1200 },
    font: { loadSystemFonts: true },
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();
writeFileSync(pngPath, pngBuffer);

console.log(`✅ og-image.png generated → ${pngPath}`);
console.log(`   Size: ${(pngBuffer.length / 1024).toFixed(1)} KB`);

