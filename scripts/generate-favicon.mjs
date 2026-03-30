import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Simplified El Porvenir isotipo for favicon
// Gold: #C49A1A — thicker lines, reduced detail, clear at 16–32px
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <style>
      .g { fill: #C49A1A; }
      .gs { fill: none; stroke: #C49A1A; stroke-linecap: round; stroke-linejoin: round; }
    </style>
  </defs>

  <!-- Double ring border -->
  <circle cx="256" cy="256" r="234" class="gs" stroke-width="8"/>
  <circle cx="256" cy="256" r="220" class="gs" stroke-width="5"/>

  <!-- ── TRUNK ── -->
  <rect x="247" y="282" width="18" height="72" rx="9" class="g"/>

  <!-- ── LEFT BRANCH from trunk ── -->
  <path d="M253 300 C238 282 210 268 185 255" class="gs" stroke-width="15"/>
  <!-- ── RIGHT BRANCH from trunk ── -->
  <path d="M259 300 C274 282 302 268 327 255" class="gs" stroke-width="15"/>

  <!-- ── LEAVES (7 — simplified elongated ellipses) ── -->
  <!-- Center top -->
  <ellipse cx="256" cy="152" rx="28" ry="54" class="g"/>

  <!-- Left mid -->
  <ellipse cx="196" cy="178" rx="24" ry="48" class="g" transform="rotate(-32 196 178)"/>
  <!-- Left outer -->
  <ellipse cx="148" cy="228" rx="22" ry="44" class="g" transform="rotate(-60 148 228)"/>
  <!-- Left far -->
  <ellipse cx="126" cy="280" rx="18" ry="38" class="g" transform="rotate(-80 126 280)"/>

  <!-- Right mid -->
  <ellipse cx="316" cy="178" rx="24" ry="48" class="g" transform="rotate(32 316 178)"/>
  <!-- Right outer -->
  <ellipse cx="364" cy="228" rx="22" ry="44" class="g" transform="rotate(60 364 228)"/>
  <!-- Right far -->
  <ellipse cx="386" cy="280" rx="18" ry="38" class="g" transform="rotate(80 386 280)"/>

  <!-- ── GROUND LINE ── -->
  <line x1="170" y1="365" x2="342" y2="365" class="gs" stroke-width="10"/>

  <!-- ── ROOTS ── -->
  <!-- Center tap root -->
  <path d="M256 365 L256 415" class="gs" stroke-width="11"/>

  <!-- Left roots -->
  <path d="M245 368 C228 383 205 392 178 402" class="gs" stroke-width="10"/>
  <path d="M205 395 C192 410 174 420 155 432" class="gs" stroke-width="8"/>
  <path d="M178 404 C166 418 152 426 136 436" class="gs" stroke-width="7"/>

  <!-- Right roots -->
  <path d="M267 368 C284 383 307 392 334 402" class="gs" stroke-width="10"/>
  <path d="M307 395 C320 410 338 420 357 432" class="gs" stroke-width="8"/>
  <path d="M334 404 C346 418 360 426 376 436" class="gs" stroke-width="7"/>
</svg>`;

async function generate() {
  const buf = Buffer.from(svg);

  // app/icon.png — 512×512 (Next.js favicon)
  await sharp(buf, { density: 144 })
    .resize(512, 512)
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, 'app/icon.png'));

  // public/favicon.png — 256×256 (fallback)
  await sharp(buf, { density: 144 })
    .resize(256, 256)
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, 'public/favicon.png'));

  console.log('✓ app/icon.png  (512×512)');
  console.log('✓ public/favicon.png  (256×256)');
}

generate().catch(err => { console.error(err); process.exit(1); });
