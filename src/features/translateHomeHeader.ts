import { setTextIfChanged } from '../utils/dom';

export function translateHomeHeader(root: ParentNode = document): void {
  const scope = root instanceof Document ? root.body : root;
  if (!scope) {
    return;
  }

  scope.querySelectorAll('.p-header__description-data').forEach((el) => {
    translateNarouHeaderStatLine(el);
    translateYomouHeaderStatLine(el);
  });

  scope.querySelectorAll('.p-header__description').forEach((el) => {
    translateYomouHeaderDescription(el);
  });
}

function translateNarouHeaderStatLine(el: Element): void {
  const replacements = new Map([
    ['作品掲載数', 'Published novels '],
    ['作品 登録ユーザ数', ' novels, registered users '],
    ['人', ' users'],
  ]);

  for (const node of el.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE) {
      continue;
    }

    const textNode = node as CharacterData;
    const text = textNode.nodeValue ?? '';
    const normalized = text.replace(/\s+/g, ' ').trim();
    const translated = replacements.get(normalized);

    if (translated) {
      setTextIfChanged(textNode, translated);
    }
  }
}

function translateYomouHeaderStatLine(el: Element): void {
  const replacements = new Map([
    ['Web小説', 'Read and search '],
    ['作品を無料で読める・探せるサイトです。', ' free web novels.'],
  ]);

  for (const node of el.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE) {
      continue;
    }

    const textNode = node as CharacterData;
    const text = textNode.nodeValue ?? '';
    const normalized = text.replace(/\s+/g, ' ').trim();
    const translated = replacements.get(normalized);

    if (translated) {
      setTextIfChanged(textNode, translated);
    }
  }
}

function translateYomouHeaderDescription(el: Element): void {
  for (const node of el.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE) {
      continue;
    }

    const textNode = node as CharacterData;
    const text = textNode.nodeValue ?? '';
    const normalized = text.replace(/\s+/g, ' ').trim();

    if (normalized === '小説を読もう！は｢小説家になろう｣に投稿された') {
      setTextIfChanged(textNode, 'Yomou features novels posted on Narou');
    }
  }
}
