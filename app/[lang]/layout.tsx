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
    <>
      <Header lang={lang} t={t.nav} />
      <main>{children}</main>
      <Footer lang={lang} t={t.footer} navLinks={t.nav.links} />
    </>
  );
}
