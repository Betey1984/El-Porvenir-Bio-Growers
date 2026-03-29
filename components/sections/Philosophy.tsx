import type { Translations } from "@/lib/i18n";

interface PhilosophyProps {
  t: Translations["philosophy"];
}

export default function Philosophy({ t }: PhilosophyProps) {
  return (
    <section
      id="philosophy"
      className="bg-brand-black py-24 md:py-40 px-6 border-t border-brand-white/8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14 md:mb-20">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-terra shrink-0" />
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-brand-terra">
            {t.label}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left — headline */}
          <div className="md:col-span-4">
            <h2
              className="font-display font-light text-brand-white leading-[1.0] whitespace-pre-line"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              {t.title}
            </h2>
          </div>

          {/* Right — intro + pillars */}
          <div className="md:col-span-8 space-y-10 md:space-y-12">
            <p className="font-body font-light text-base md:text-lg text-brand-white/75 leading-relaxed max-w-2xl">
              {t.intro}
            </p>

            {/* Pillars grid */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              {t.pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-3">
                  <div className="w-8 h-px bg-brand-terra/60" />
                  <h3 className="font-body text-[11px] tracking-[0.25em] uppercase text-brand-terra">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm text-brand-white/65 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
