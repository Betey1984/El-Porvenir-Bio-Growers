import Link from "next/link";
import Image from "next/image";
import Flag from "@/components/ui/Flag";
import type { Translations } from "@/lib/i18n";

interface FooterProps {
  lang: string;
  t: Translations["footer"];
  navLinks: Translations["nav"]["links"];
}

export default function Footer({ lang, t, navLinks }: FooterProps) {
  return (
    <footer className="bg-brand-black border-t border-brand-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-12 border-b border-brand-white/10">

          {/* Brand lockup — logo + name stack */}
          <div className="flex items-center gap-5">
            <Image
              src="/images/logos/logo-white.png"
              alt="El Porvenir Bio Growers"
              width={1755}
              height={1241}
              className="h-16 w-auto opacity-85"
            />
            <div className="flex flex-col gap-0.5 border-l border-brand-white/15 pl-5">
              <span className="font-display text-xl font-light text-brand-white leading-none tracking-wide">
                El Porvenir
              </span>
              <span className="font-body text-[10px] tracking-[0.28em] uppercase text-brand-white/50 mt-0.5">
                Bio Growers
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-brand-white/50 hover:text-brand-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10">

          {/* Tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-[0.2em] uppercase text-brand-white/35"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Copyright + Language switcher */}
          <div className="flex items-center gap-6">
            <p className="font-body text-[10px] text-brand-white/35 whitespace-nowrap">
              {t.copyright}
            </p>

            {/* Flag language switcher */}
            <div className="flex gap-1">
              {(["es", "en", "de"] as const).map((code) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={[
                    "flex items-center gap-1.5 px-2 py-1 font-body text-[9px] tracking-widest uppercase transition-all duration-300 border",
                    lang === code
                      ? "border-brand-gold/30 text-brand-gold"
                      : "border-transparent text-brand-white/30 hover:text-brand-white/60",
                  ].join(" ")}
                >
                  <Flag code={code} className="w-3.5 h-[9px]" />
                  <span>{code.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
