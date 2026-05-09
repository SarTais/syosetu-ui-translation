import { enhanceDisplaySettings } from './features/displaySettings';
import { linkKeywordBadges } from './features/keywordBadges';
import { installStyles } from './features/styles';
import { translateAttributes } from './features/translateAttributes';
import { translateHomeHeader } from './features/translateHomeHeader';
import { translateRegistration } from './features/translateRegistration';
import { translateText } from './features/translateText';
import { translateTitle } from './features/translateTitle';

let translateTimer: ReturnType<typeof setTimeout> | undefined;

function bootstrap(): void {
  installStyles();
  translatePage(document.body);
  installObserver();
}

bootstrap();

function translatePage(root: ParentNode): void {
  translateTitle();
  enhanceDisplaySettings(root);
  linkKeywordBadges(root);
  translateHomeHeader(root);
  translateRegistration(root);
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
    attributeFilter: ['aria-label', 'placeholder', 'title', 'value'],
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  });
}
