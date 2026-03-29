import { es } from "./es";
import { en } from "./en";
import { de } from "./de";
import type { Translations } from "./types";

export type { Translations };
export type Lang = "es" | "en" | "de";

export const SUPPORTED_LANGS: Lang[] = ["es", "en", "de"];

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}

export function getTranslations(lang: string): Translations {
  if (lang === "en") return en;
  if (lang === "de") return de;
  return es; // default to Spanish
}
