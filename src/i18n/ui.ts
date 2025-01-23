import Spain from "@/components/flags/Spain.astro";
import UnitedStates from "@/components/flags/UnitedStates.astro";
import en from "@/i18n/en.json";
import es from "@/i18n/es.json";

// Add missing imports
export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof Spain }> = {
  en: {
    code: "en",
    name: "English",
    flag: UnitedStates,
  },
  es: {
    code: "es",
    name: "Español",
    flag: Spain,
  },
};

export const defaultLang = "es" as const;
export const showDefaultLang = false;

export const ui = { es: es, en: en } as const;

export const routes = {
  es: {
    home: "/",
  },
  en: {
    home: "/",
  },
};

export type UI = typeof ui;
