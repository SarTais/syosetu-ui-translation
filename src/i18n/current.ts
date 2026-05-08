import { sourceTextToKey } from './source/sourceTextToKey';
import { getCurrentLocale } from './locales';

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
