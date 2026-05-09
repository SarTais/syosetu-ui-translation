import { setTextIfChanged } from '../utils/dom';

export function translateRegistration(root: ParentNode = document): void {
  const scope = root instanceof Document ? root.body : root;
  if (!scope) {
    return;
  }

  scope.querySelectorAll('.p-useradd__terms').forEach((el) => {
    for (const node of el.childNodes) {
      if (node.nodeType !== Node.TEXT_NODE) {
        continue;
      }

      const textNode = node as CharacterData;
      const normalized = (textNode.nodeValue ?? '').replace(/\s+/g, ' ').trim();
      if (normalized === 'を') {
        setTextIfChanged(textNode, ' ');
      }
    }
  });
}
