"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Translations } from "@/lib/i18n";
import Flag from "@/components/ui/Flag";

interface HeaderProps {
  lang: string;
  t: Translations["nav"];
}

const LANGS = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
] as const;

export default function Header({ lang, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function langPath(code: string) {
    return pathname.replace(/^\/(es|en|de)/, `/${code}`);
  }

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-black/96 backdrop-blur-md border-b border-brand-white/8"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">

        {/* ── Logo ──────────────────────────────────────────────────────── */}
        <Link
          href={`/${lang}`}
          className="flex items-center shrink-0 group"
          aria-label="El Porvenir Bio Growers — Home"
        >
          <Image
            src="/images/logos/logo-white-h.png"
            alt="El Porvenir Bio Growers"
            width={1491}
            height={484}
            className="h-10 sm:h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </Link>

        {/* ── Desktop nav ───────────────────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[11px] tracking-[0.22em] uppercase text-brand-white/60 hover:text-brand-gold transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right: language switcher + mobile toggle ───────────────────── */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Flag language switcher — desktop */}
          <div className="hidden md:flex items-center gap-0.5 border border-brand-white/15 rounded-sm overflow-hidden">
            {LANGS.map(({ code, label }) => (
              <Link
                key={code}
                href={langPath(code)}
                className={[
                  "flex items-center gap-1.5 px-2.5 py-1.5 font-body text-[10px] tracking-[0.15em] uppercase transition-all duration-300",
                  lang === code
                    ? "bg-brand-white/10 text-brand-gold"
                    : "text-brand-white/45 hover:text-brand-white/80 hover:bg-brand-white/5",
                ].join(" ")}
              >
                <Flag code={code} className="w-4 h-[11px] flex-shrink-0" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 shrink-0"
            aria-label="Toggle menu"
          >
            <span
              className={[
                "block w-full h-px bg-brand-white origin-center transition-all duration-300",
                menuOpen ? "rotate-45 translate-y-[6px]" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-full h-px bg-brand-white transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-full h-px bg-brand-white origin-center transition-all duration-300",
                menuOpen ? "-rotate-45 -translate-y-[6px]" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 bg-brand-black/98 border-t border-brand-white/10",
          menuOpen ? "max-h-screen py-8" : "max-h-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-5 px-8 mb-8">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-[0.22em] uppercase text-brand-white/70 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile language switcher */}
        <div className="flex gap-1 px-8">
          {LANGS.map(({ code, label }) => (
            <Link
              key={code}
              href={langPath(code)}
              onClick={() => setMenuOpen(false)}
              className={[
                "flex items-center gap-2 px-3 py-2 font-body text-[10px] tracking-[0.18em] uppercase border transition-colors duration-300",
                lang === code
                  ? "border-brand-gold/40 text-brand-gold bg-brand-white/5"
                  : "border-brand-white/15 text-brand-white/45 hover:text-brand-white/70",
              ].join(" ")}
            >
              <Flag code={code} className="w-5 h-3.5 flex-shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
