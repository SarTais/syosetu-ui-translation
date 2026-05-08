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
    childList: true,
    subtree: true,
    characterData: true,
  });
}
