import { ui, defaultLang, showDefaultLang, routes } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // 1. we take the path without the leading slash
    const pathKey = path.replaceAll("/", "") || "home";

    // 2. Check if there is a translation for that path
    const hasTranslation =
      routes[l as keyof typeof routes] !== undefined &&
      (routes[l as keyof typeof routes] as Record<string, string>)[pathKey] !== undefined;

    // 3. Get the base path (without the language prefix)
    const basePath = hasTranslation
      ? (routes[l as keyof typeof routes] as Record<string, string>)[pathKey]
      : path;

    // 4. Build the final URL avoiding double slashes
    const normalizedPath = basePath.startsWith("/") ? basePath : `/${basePath}`;

    // If it's the default language and showDefaultLang is false, we don't add the /es/ prefix
    if (!showDefaultLang && l === defaultLang) {
      return normalizedPath;
    }

    return `/${l}${normalizedPath === "/" ? "" : normalizedPath}`;
  };
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split("/");
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];
    return route[path as keyof typeof route] !== undefined ? route[path as keyof typeof route] : undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}
