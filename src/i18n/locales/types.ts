import type { TranslationKey } from '../source/translationKeys';

export type DynamicTranslationRule = {
  pattern: RegExp;
  replacement: string | ((substring: string, ...args: string[]) => string);
};

export type LocaleMessages = {
  ui: Record<TranslationKey, string>;
  attributes: Partial<Record<TranslationKey, string>>;
  dynamic: readonly DynamicTranslationRule[];
  genres: Record<string, string>;
  tagsGeneral: Record<string, string>;
  tagsAdult: Record<string, string>;
};
