/**
 * generate-favicon.mjs
 * Crops the isotipo from logo-gold.png (strips text),
 * adds padding, exports 512×512 favicon.
 *
 * Run: node scripts/generate-favicon.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const src  = path.join(root, 'public/images/logos/logo-gold.png');

async function generate() {
  // ── 1. Crop isotipo (strips "EL PORVENIR / BIO GROWERS" text below) ──────
  //   Measured bounds: content x 550–1192, isotipo top 358–814, gap 814–854
  //   Crop a square centred on the isotipo, with 5 % padding on each side.
  const isoLeft   = 550;
  const isoTop    = 354;          // 4 px above measured top for anti-aliasing
  const isoWidth  = 644;          // 1192 – 550 + 2 px
  const isoHeight = 464;          // 814 – 354 + a few px
  const side      = isoWidth;     // make it square using the wider dimension

  // Vertical centering: add blank rows above/below so isotipo sits centred
  const padTop = Math.round((side - isoHeight) / 2);

  const cropped = await sharp(src)
    .extract({ left: isoLeft, top: isoTop, width: side, height: isoHeight })
    // Extend to a square with transparent background
    .extend({
      top:    padTop,
      bottom: side - isoHeight - padTop,
      left:   0,
      right:  0,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  // ── 2. Add breathing room (12 % padding on each side) ───────────────────
  const padPct  = 0.12;
  const inner   = 512;
  const padPx   = Math.round(inner * padPct);
  const total   = inner + padPx * 2;

  const padded = await sharp(cropped)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: padPx, bottom: padPx, left: padPx, right: padPx,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  // ── 3. Final resize to exactly 512×512 ──────────────────────────────────
  const final = await sharp(padded)
    .resize(512, 512)
    .png({ compressionLevel: 9 })
    .toBuffer();

  // ── 4. Write outputs ─────────────────────────────────────────────────────
  await sharp(final).toFile(path.join(root, 'app/icon.png'));
  await sharp(final).resize(256, 256).png({ compressionLevel: 9 })
    .toFile(path.join(root, 'public/favicon.png'));

  console.log('✓ app/icon.png       (512×512)');
  console.log('✓ public/favicon.png (256×256)');
}

generate().catch(err => { console.error(err); process.exit(1); });
