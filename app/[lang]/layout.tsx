import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Porvenir Bio Growers",
  description:
    "Regenerative agriculture rooted in origin, biodiversity, and the future of cacao. Colombia.",
  openGraph: {
    title: "El Porvenir Bio Growers",
    description:
      "Regenerative agriculture rooted in origin, biodiversity, and the future of cacao.",
    type: "website",
  },
};


import { notFound } from "next/navigation";
import { isValidLang, getTranslations } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }, { lang: "de" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLang(lang)) {
    notFound();
  }

  const t = getTranslations(lang);

  return (
    <html lang={lang} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
      <Header lang={lang} t={t.nav} />
      <main>{children}</main>
      <Footer lang={lang} t={t.footer} navLinks={t.nav.links} />
      </body>
    </html>
  );
}
