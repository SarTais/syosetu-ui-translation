import css from './styles.css?inline';

const STYLE_ID = 'tm-syosetu-ui-translations-styles';

export function installStyles(): void {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.append(style);
}
