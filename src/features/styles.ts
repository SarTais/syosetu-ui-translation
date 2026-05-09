import css from './styles.css?inline';
import { getUiText, isAdultHost } from '../i18n/current';

const STYLE_ID = 'tm-syosetu-ui-translations-styles';
const ROOT_CLASS = 'tm-syosetu-ui-translations';
const ADULT_ROOT_CLASS = 'tm-syosetu-adult';

export function installStyles(): void {
  document.documentElement.classList.add(ROOT_CLASS);
  document.documentElement.classList.toggle(ADULT_ROOT_CLASS, isAdultHost());
  document.documentElement.style.setProperty('--tm-syosetu-required-label', JSON.stringify(getUiText('common.required', 'Required')));

  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.append(style);
}
