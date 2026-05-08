import { getUiText } from '../i18n/current';

const ORIGINAL_TOGGLE_CLASS = 'tm-syosetu-original-illust-toggle';

export function enhanceDisplaySettings(root: ParentNode = document): void {
  const scope = root instanceof Document ? root : document;

  scope.querySelectorAll<HTMLImageElement>('img.js-adjust-layout-illustflag[alt="挿絵表示切替ボタン"]').forEach((image) => {
    if (image.dataset.tmIllustrationToggle === '1') {
      return;
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'tm-syosetu-illust-toggle';
    updateIllustrationButtonText(button, image);
    button.addEventListener('click', () => {
      image.click();
      window.setTimeout(() => updateIllustrationButtonText(button, image), 0);
    });

    image.classList.add(ORIGINAL_TOGGLE_CLASS);
    image.dataset.tmIllustrationToggle = '1';
    image.insertAdjacentElement('afterend', button);
  });
}

function updateIllustrationButtonText(button: HTMLButtonElement, image: HTMLImageElement): void {
  const isOn = /novelview_on\.gif(?:\?|$)/.test(image.src);
  button.textContent = isOn
    ? getUiText('displaySettings.illustrationsOn', 'Illustrations: On')
    : getUiText('displaySettings.illustrationsOff', 'Illustrations: Off');
}
