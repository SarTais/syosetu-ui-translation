import { en } from './en';
import type { LocaleMessages } from './types';

export const locales = {
  en,
} satisfies Record<string, LocaleMessages>;

export type LocaleCode = keyof typeof locales;

const fallbackLocale: LocaleCode = 'en';

export function getCurrentLocale(languages: readonly string[] = navigator.languages): LocaleMessages {
  for (const language of languages) {
    const locale = normalizeLocale(language);

    if (locale && locale in locales) {
      return locales[locale];
    }
  }

  return locales[fallbackLocale];
}

function normalizeLocale(language: string): LocaleCode | undefined {
  const baseLanguage = language.toLowerCase().split('-')[0];
  return baseLanguage in locales ? (baseLanguage as LocaleCode) : undefined;
}
