import { enhanceDisplaySettings } from './features/displaySettings';
import { linkKeywordBadges } from './features/keywordBadges';
import { installStyles } from './features/styles';
import { translateAttributes } from './features/translateAttributes';
import { translateText } from './features/translateText';

let translateTimer: ReturnType<typeof setTimeout> | undefined;

function bootstrap(): void {
  installStyles();
  translatePage(document.body);
  installObserver();
}

bootstrap();

function translatePage(root: ParentNode): void {
  enhanceDisplaySettings(root);
  linkKeywordBadges(root);
  translateText(root);
  translateAttributes(root);
}

function installObserver(): void {
  if (!document.body) {
    return;
  }

  const observer = new MutationObserver(() => {
    if (translateTimer) {
      clearTimeout(translateTimer);
    }

    translateTimer = setTimeout(() => {
      translatePage(document.body);
    }, 250);
  });

  observer.observe(document.body, {
    attributeFilter: ['aria-label', 'placeholder', 'value'],
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  });
}
