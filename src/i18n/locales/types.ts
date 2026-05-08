import type { TranslationKey } from '../source/translationKeys';

export type LocaleMessages = {
  ui: Record<TranslationKey, string>;
  attributes: Partial<Record<TranslationKey, string>>;
  tagsGeneral: Record<string, string>;
  tagsAdult: Record<string, string>;
};
