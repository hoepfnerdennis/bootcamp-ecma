export const SITE = {
  title: "Bootcamp: JavaScript",
  description: "Einführung und Vertiefung JavaScript",
  defaultLanguage: "de_DE",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  German: "de",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  de: {
    Allgemein: [
      { text: "Organisatorisches", link: "main/introduction" },
      { text: "Zeitliche Planung", link: "main/time" },
    ],
    Einführung: [
      { text: "HTML", link: "content/html" },
      { text: "ECMA-Script", link: "content/ecma" },
      { text: "Browser Tools", link: "content/browser-tools" },
      { text: "Datentypen", link: "content/primitive-data-types" },
      { text: "Document Object Model", link: "content/dom" },
      { text: "Funktionen", link: "content/functions" },
      { text: "Bedingte Anweisungen", link: "content/if-else" },
      { text: "JSON", link: "content/json" },
      { text: "Schleifen", link: "content/loops" },
      { text: "Verwendung mehrerer Dateien", link: "content/multiple-files" },
    ],
    Vertiefung: [
      { text: "Projekt aufsetzen", link: "content/react/getting-started" },
      { text: "CSS Modules", link: "content/react/css-modules" },
      { text: "React", link: "content/react/react" },
      { text: "Asynchrone Verarbeitung", link: "content/react/promises" },
      {
        text: "Web Technologien",
        link: "content/react/web-technologies",
      },
      { text: "Daten laden", link: "content/react/fetch" },
    ],
    Aufgaben: [
      { text: "Aufgabe 1a", link: "lessons/1a" },
      { text: "Aufgabe 1b", link: "lessons/1b" },
      { text: "Aufgabe 2", link: "lessons/2" },
      { text: "Aufgabe 3", link: "lessons/3" },
      { text: "Aufgabe 4", link: "lessons/4" },
      { text: "Aufgabe 5", link: "lessons/5" },
      { text: "Aufgabe 6", link: "lessons/6" },
      { text: "Aufgabe 7", link: "lessons/7" },
      { text: "Aufgabe 8", link: "lessons/8" },
      { text: "Aufgabe 9", link: "lessons/9" },
      { text: "Aufgabe 10", link: "lessons/10" },
      { text: "Aufgabe 11", link: "lessons/11" },
    ],
  },
};
