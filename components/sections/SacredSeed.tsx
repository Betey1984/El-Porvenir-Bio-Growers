import Image from "next/image";
import type { Translations } from "@/lib/i18n";

interface SacredSeedProps {
  t: Translations["sacredSeed"];
}

export default function SacredSeed({ t }: SacredSeedProps) {
  return (
    <section
      id="cacao"
      className="bg-brand-green py-24 md:py-40 px-6 relative overflow-hidden"
    >
      {/* Depth: darkness from the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 90% at 95% 50%, rgba(25,25,24,0.45) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Label */}
        <p className="font-body text-[10px] tracking-[0.38em] uppercase text-brand-gold mb-14 md:mb-20">
          {t.label}
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* Content — left */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <h2
              className="font-display font-light text-brand-white leading-[0.95] whitespace-pre-line"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
            >
              {t.title}
            </h2>

            <div className="w-12 h-px bg-brand-gold" />

            <p className="font-body font-light text-base md:text-lg text-brand-white/80 leading-relaxed">
              {t.body1}
            </p>

            <p className="font-body font-light text-sm md:text-base text-brand-white/60 leading-relaxed">
              {t.body2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-7 pt-6 border-t border-brand-white/15">
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-4xl text-brand-gold font-light leading-none">
                    {stat.value}
                  </p>
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-brand-white/50 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cinematic image — right, portrait */}
          <div className="order-1 md:order-2 aspect-[3/4] max-h-[70vh] md:max-h-none relative overflow-hidden">
            <Image
              src="/images/sacredseed.jpg"
              alt="Sacred Seed — native cacao, Colombia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={88}
            />

            {/* Bottom gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(25,25,24,0.7) 0%, rgba(25,25,24,0.1) 40%, transparent 65%)",
              }}
            />
            {/* Subtle gold atmospheric glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 55% 55% at 40% 30%, rgba(208,164,21,0.05) 0%, transparent 60%)",
              }}
            />

            {/* Caption */}
            <div className="absolute bottom-8 left-8">
              <p className="font-body text-[9px] tracking-[0.32em] uppercase text-brand-gold/70">
                {t.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
