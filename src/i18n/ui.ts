import Spain from "@/components/flags/Spain.astro";
import UnitedStates from "@/components/flags/UnitedStates.astro";
import * as en from "@/i18n/en.json";
import * as es from "@/i18n/es.json";

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

export const ui = { es, en } as const;

export const routes = {
  es: {
    home: "/",
  },
  en: {
    home: "/",
  },
};
