import { getAttributeTranslationMap, getTranslationMap } from '../i18n/current';
import { setAttributeIfChanged } from '../utils/dom';

const translations = getTranslationMap();
const attributeTranslations = getAttributeTranslationMap();

export function translateAttributes(root: ParentNode = document): void {
  root.querySelectorAll('[placeholder]').forEach((el) => {
    const text = el.getAttribute('placeholder');
    const translated = text ? attributeTranslations.get(text) ?? translations.get(text) : undefined;

    if (translated) {
      setAttributeIfChanged(el, 'placeholder', translated);
    }
  });

  root.querySelectorAll('[aria-label]').forEach((el) => {
    const text = el.getAttribute('aria-label');
    const translated = text ? translations.get(text) : undefined;

    if (translated) {
      setAttributeIfChanged(el, 'aria-label', translated);
    }
  });

  root.querySelectorAll('input[value]').forEach((el) => {
    if (el.matches('.search_text,input[name="word"],input[name="notword"]')) {
      return;
    }

    const value = el.getAttribute('value');
    const translated = value ? translations.get(value) : undefined;

    if (translated) {
      setAttributeIfChanged(el, 'value', translated);
    }
  });
}
