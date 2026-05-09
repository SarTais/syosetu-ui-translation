import { getAttributeTranslationMap, getTranslationMap, translateDynamicText } from '../i18n/current';
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

  root.querySelectorAll('[title]').forEach((el) => {
    const text = el.getAttribute('title');
    const exact = text ? translations.get(text) : undefined;
    const dynamic = text ? translateDynamicText(text) : undefined;
    const translated = exact ?? (dynamic && dynamic !== text ? dynamic : undefined);

    if (translated) {
      setAttributeIfChanged(el, 'title', translated);
    }
  });

  root.querySelectorAll('input[type="submit"][value], input[type="button"][value], input[type="reset"][value]').forEach((el) => {
    const value = el.getAttribute('value');
    const translated = value ? translations.get(value) : undefined;

    if (translated) {
      setAttributeIfChanged(el, 'value', translated);
    }
  });
}
