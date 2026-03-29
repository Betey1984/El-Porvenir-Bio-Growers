import Image from "next/image";
import type { Translations } from "@/lib/i18n";

interface AboutProps {
  t: Translations["about"];
}

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="bg-brand-white py-24 md:py-40 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="font-body text-[10px] tracking-[0.38em] uppercase text-brand-green mb-14 md:mb-20">
          {t.label}
        </p>

        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-start">
          {/* Left — headline */}
          <div>
            <h2
              className="font-display font-light text-brand-black leading-[1.0] whitespace-pre-line"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
            >
              {t.title}
            </h2>
          </div>

          {/* Right — body copy */}
          <div className="space-y-6 md:space-y-7 md:pt-3">
            <p className="font-body font-light text-base md:text-lg text-brand-black/70 leading-relaxed">
              {t.body1}
            </p>
            {t.body2 && (
              <p className="font-body font-light text-base md:text-lg text-brand-black/70 leading-relaxed">
                {t.body2}
              </p>
            )}

            {/* Detail lines */}
            <div className="flex flex-col gap-3 pt-3">
              {[t.detail1, t.detail2].map((detail) => (
                <div key={detail} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-[7px] shrink-0" />
                  <p className="font-body text-sm text-brand-black/55 leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width editorial image */}
        <div className="mt-16 md:mt-28 aspect-[21/8] relative overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="El Porvenir — cacao farm, Colombia"
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(90,99,70,0.15) 0%, rgba(35,35,34,0.35) 55%, rgba(35,35,34,0.65) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-brand-gold/80">
              El Porvenir · Colombia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
