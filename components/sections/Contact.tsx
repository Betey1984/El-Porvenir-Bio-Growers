import Image from "next/image";
import type { Translations } from "@/lib/i18n";

interface ContactProps {
  t: Translations["contact"];
}

export default function Contact({ t }: ContactProps) {
  return (
    <section
      id="contact"
      className="bg-brand-green overflow-hidden relative"
    >
      {/* Depth overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(25,25,24,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 grid md:grid-cols-2 min-h-[640px]">

        {/* ── Left — image ──────────────────────────────────────────────── */}
        <div className="relative hidden md:block">
          <Image
            src="/images/contactenos.webp"
            alt="El Porvenir — contacto"
            fill
            className="object-cover"
            sizes="50vw"
            quality={85}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(90,99,70,0.1) 0%, transparent 40%, rgba(90,99,70,0.6) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(25,25,24,0.2) 0%, transparent 30%, rgba(25,25,24,0.4) 100%)",
            }}
          />
        </div>

        {/* ── Right — form ──────────────────────────────────────────────── */}
        <div className="py-24 md:py-40 px-6 md:px-12 lg:px-16 flex flex-col justify-center">

          {/* Label */}
          <p className="font-body text-[10px] tracking-[0.38em] uppercase text-brand-gold mb-8 md:mb-10">
            {t.label}
          </p>

          {/* Title */}
          <h2
            className="font-display font-light text-brand-white leading-[0.95] whitespace-pre-line mb-6 md:mb-8"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
          >
            {t.title}
          </h2>

          {/* Intro */}
          <p className="font-body font-light text-sm text-brand-white/65 leading-relaxed mb-10 md:mb-12 max-w-sm">
            {t.intro}
          </p>

          {/* ── Contact details ───────────────────────────────────────── */}
          <div className="mt-14 md:mt-16 pt-8 border-t border-brand-white/15 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <a
              href={`mailto:${t.email}`}
              className="font-body text-xs text-brand-white/50 hover:text-brand-white/80 transition-colors duration-300 tracking-wide"
            >
              {t.email}
            </a>
            <span className="hidden sm:block w-px h-3 bg-brand-white/20" />
            <a
              href={`tel:${t.phone.replace(/\s/g, "")}`}
              className="font-body text-xs text-brand-white/50 hover:text-brand-white/80 transition-colors duration-300 tracking-wide"
            >
              {t.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
