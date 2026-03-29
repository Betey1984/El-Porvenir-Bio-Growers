import type { Translations } from "@/lib/i18n";

interface ManifestoProps {
  t: Translations["manifesto"];
}

export default function Manifesto({ t }: ManifestoProps) {
  return (
    <section
      id="manifesto"
      className="bg-brand-green py-24 md:py-40 px-6 relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(35,35,34,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-2">
        {/* Opening mark */}
        <p className="font-display text-5xl text-brand-gold/40 leading-none mb-6 select-none">
          &ldquo;
        </p>

        <blockquote
          className="font-display font-light italic text-brand-white leading-relaxed"
          style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
        >
          {t.quote}
        </blockquote>

        {/* Gold rule */}
        <div className="flex justify-center mt-10 mb-6">
          <div className="w-8 h-px bg-brand-gold/60" />
        </div>

        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-brand-white/55">
          {t.attribution}
        </p>
      </div>
    </section>
  );
}
