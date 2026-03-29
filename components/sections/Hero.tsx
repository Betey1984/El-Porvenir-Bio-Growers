import Image from "next/image";
import type { Translations } from "@/lib/i18n";

interface HeroProps {
  t: Translations["hero"];
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen bg-brand-black overflow-hidden px-6 md:px-12 lg:px-16 xl:px-24 pt-24 pb-32 md:pb-36"
    >
      {/* ── Background video ────────────────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-black/58 pointer-events-none" />

      {/* Directional colour gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 90% at -5% 105%, rgba(90,99,70,0.25) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 105% 0%, rgba(20,20,19,0.7) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Isotipo watermark — right half, atmospheric ─────────────────── */}
      {/* Placed before main content (z-[1]) so text (z-10) always reads on top */}
      <div
        className="absolute inset-y-0 right-0 hidden lg:flex items-center justify-center pointer-events-none z-[1]"
        style={{ width: "52%" }}
      >
        <Image
          src="/images/logos/logo-gold.png"
          alt=""
          width={1755}
          height={1241}
          className="w-full h-auto"
          style={{
            opacity: 0.13,
            filter: "drop-shadow(0 0 80px rgba(208,164,21,0.18)) saturate(1.2)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Geographic coordinates — far right edge, xl only */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-end gap-4 pointer-events-none select-none z-[2]">
        <div className="w-px h-16 bg-brand-white/10" />
        <p
          className="font-body text-[9px] tracking-[0.3em] uppercase text-brand-white/20"
          style={{ writingMode: "vertical-rl" }}
        >
          4°35′N · 76°02′W
        </p>
        <p className="font-body text-[9px] tracking-[0.28em] uppercase text-brand-white/20">
          1,200 m
        </p>
        <div className="w-px h-16 bg-brand-white/10" />
      </div>

      {/* ── Main editorial text — left-anchored ────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Text block constrained to left half on lg+ so isotipo has space */}
        <div className="lg:max-w-[52%] xl:max-w-[50%]">
          <p className="animate-fade-up font-body text-[11px] tracking-[0.38em] uppercase text-brand-gold mb-10 md:mb-14">
            {t.eyebrow}
          </p>

          <h1
            className="animate-fade-up-delay-1 font-display font-light text-brand-white leading-[0.93] tracking-tight mb-12 md:mb-16 whitespace-pre-line"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.2rem)" }}
          >
            {t.headline}
          </h1>

          <div className="animate-fade-up-delay-2 mb-10 md:mb-14">
            <div className="w-14 h-px bg-brand-gold" />
          </div>

          <p className="animate-fade-up-delay-3 font-body font-light text-sm md:text-base text-brand-white/65 max-w-sm leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <div className="absolute bottom-8 md:bottom-10 left-6 md:left-12 lg:left-16 xl:left-24 right-6 md:right-12 lg:right-16 xl:right-24 flex items-end justify-between animate-fade-in z-10">
        <div className="flex items-center gap-4">
          <div className="w-px h-10 bg-gradient-to-b from-brand-white/25 to-transparent" />
          <span className="font-body text-[9px] tracking-[0.35em] uppercase text-brand-white/40">
            {t.scroll}
          </span>
        </div>
        <p className="font-body text-[9px] tracking-[0.28em] uppercase text-brand-gold/45 hidden md:block">
          {t.tagline}
        </p>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-white/8" />
    </section>
  );
}
