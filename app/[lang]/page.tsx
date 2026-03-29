import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLang, getTranslations } from "@/lib/i18n";

import Hero       from "@/components/sections/Hero";
import Manifesto  from "@/components/sections/Manifesto";
import About      from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import TerraPreta from "@/components/sections/TerraPreta";
import SacredSeed from "@/components/sections/SacredSeed";
import Ecosystem  from "@/components/sections/Ecosystem";
import Contact    from "@/components/sections/Contact";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const descriptions: Record<string, string> = {
    es: "Plataforma regenerativa de cacao fino de origen colombiano. Semilla Sagrada · Terra Preta · Suelo Vivo.",
    en: "Regenerative fine cacao platform from Colombian origin. Sacred Seed · Terra Preta · Living Soil.",
    de: "Regenerative Feinkakao-Plattform aus kolumbianischem Ursprung. Heilige Saat · Terra Preta · Lebendiger Boden.",
  };
  return {
    title: "El Porvenir Bio Growers",
    description: descriptions[lang] ?? descriptions.en,
  };
}

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "de" }];
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  const t = getTranslations(lang);

  return (
    <>
      {/* 1 — Identity */}
      <Hero t={t.hero} />

      {/* 2 — Core belief */}
      <Manifesto t={t.manifesto} />

      {/* 3 — Who we are (light section) */}
      <About t={t.about} />

      {/* 4 — Philosophy: listening to the earth */}
      <Philosophy t={t.philosophy} />

      {/* 5 — Terra Preta: core concept */}
      <TerraPreta t={t.terraPreta} />

      {/* 6 — Sacred Seed: cacao as culture */}
      <SacredSeed t={t.sacredSeed} />

      {/* 7 — Platform vision */}
      <Ecosystem t={t.ecosystem} />

      {/* 8 — Contact: form + image */}
      <Contact t={t.contact} />
    </>
  );
}
