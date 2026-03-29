import type { Translations } from "@/lib/i18n";

interface EcosystemProps {
  t: Translations["ecosystem"];
}

export default function Ecosystem({ t }: EcosystemProps) {
  return (
    <section
      id="platform"
      className="bg-brand-black py-24 md:py-40 px-6 border-t border-brand-white/8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="font-body text-[10px] tracking-[0.38em] uppercase text-brand-gold mb-10">
          {t.label}
        </p>

        {/* Title */}
        <h2
          className="font-display font-light text-brand-white leading-[1.0] whitespace-pre-line"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
        >
          {t.title}
        </h2>

        {/* Platform subtitle */}
        <div className="mt-10 mb-16 md:mb-28 max-w-3xl border-l-2 border-brand-gold/50 pl-6">
          <p className="font-body font-light text-base md:text-lg text-brand-white/70 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-white/10">
          {t.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 space-y-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-brand-gold/55">
                  0{i + 1}
                </span>
                <div className="flex-1 h-px bg-brand-white/10" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light text-brand-white">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-brand-white/65 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
