import { sourceTextToKey } from './source/sourceTextToKey';
import { getCurrentLocale } from './locales';
import type { TranslationKey } from './source/translationKeys';

const adultHosts = ['novel18.syosetu.com', 'noc.syosetu.com'];
const currentLocale = getCurrentLocale();

export function isAdultHost(hostname = location.hostname): boolean {
  return adultHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
}

export function getTranslationMap(): Map<string, string> {
  const translations = new Map<string, string>();

  for (const [source, key] of sourceTextToKey) {
    const translated = currentLocale.ui[key];
    if (translated) {
      translations.set(source, translated);
    }
  }

  for (const [source, translated] of Object.entries(currentLocale.tagsGeneral)) {
    translations.set(source, translated);
  }

  for (const [source, translated] of Object.entries(currentLocale.genres)) {
    translations.set(source, translated);
  }

  if (isAdultHost()) {
    for (const [source, translated] of Object.entries(currentLocale.tagsAdult)) {
      translations.set(source, translated);
    }
  }

  return translations;
}

export function getAttributeTranslationMap(): Map<string, string> {
  const translations = new Map<string, string>();

  for (const [source, key] of sourceTextToKey) {
    const translated = currentLocale.attributes[key];
    if (translated) {
      translations.set(source, translated);
    }
  }

  return translations;
}

export function translateDynamicText(text: string): string {
  return currentLocale.dynamic.reduce((nextText, rule) => {
    if (typeof rule.replacement === 'string') {
      return nextText.replace(rule.pattern, rule.replacement);
    }

    return nextText.replace(rule.pattern, rule.replacement);
  }, text);
}

export function getUiText(key: TranslationKey, fallback: string): string {
  return currentLocale.ui[key] ?? fallback;
}
