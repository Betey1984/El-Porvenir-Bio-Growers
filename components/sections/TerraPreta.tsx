import Image from "next/image";
import type { Translations } from "@/lib/i18n";

interface TerraPretaProps {
  t: Translations["terraPreta"];
}

export default function TerraPreta({ t }: TerraPretaProps) {
  return (
    <section
      id="terra-preta"
      className="bg-brand-black py-24 md:py-40 px-6 border-t border-brand-terra/20 relative overflow-hidden"
    >
      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 15% 80%, rgba(214,148,116,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-14 md:mb-20">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-terra shrink-0" />
          <p className="font-body text-[10px] tracking-[0.38em] uppercase text-brand-terra">
            {t.label}
          </p>
        </div>

        {/* Two-column: content + image */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-28 items-start">

          {/* Left — headline, definition, body */}
          <div className="space-y-8 md:space-y-10">
            <h2
              className="font-display font-light text-brand-white leading-[0.95] whitespace-pre-line"
              style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
            >
              {t.title}
            </h2>

            <blockquote
              className="font-display font-light italic leading-relaxed text-brand-terra/90 border-l border-brand-terra/30 pl-6"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
            >
              {t.definition}
            </blockquote>

            <p className="font-body font-light text-sm md:text-base text-brand-white/70 leading-relaxed">
              {t.body}
            </p>
          </div>

          {/* Right — textural image */}
          <div className="relative aspect-[4/3] overflow-hidden order-first md:order-last">
            <Image
              src="/images/terra-preta.png"
              alt="Terra Preta — living soil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(35,35,34,0.2) 0%, transparent 40%, rgba(35,35,34,0.5) 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, transparent 60%, rgba(35,35,34,0.5) 100%)",
              }}
            />
          </div>
        </div>

        {/* Ancestral ↔ Science table */}
        <div className="border-t border-brand-white/10 pt-10">
          <div className="grid grid-cols-2 gap-8 pb-5 border-b border-brand-white/8">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-brand-terra/70">
              {t.ancestralHeader}
            </p>
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-brand-white/40">
              {t.scienceHeader}
            </p>
          </div>

          <div className="divide-y divide-brand-white/8">
            {t.principles.map((p, i) => (
              <div key={i} className="grid grid-cols-2 gap-8 py-5 items-start">
                <p className="font-body text-sm text-brand-terra/80 leading-snug">
                  {p.ancestral}
                </p>
                <p className="font-body text-sm text-brand-white/65 leading-snug">
                  {p.modern}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
