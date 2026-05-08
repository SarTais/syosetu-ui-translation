import { getTranslationMap, translateDynamicText } from '../i18n/current';
import { isIgnoredTextParent, isInsideNovelBody, setTextIfChanged } from '../utils/dom';

const translations = getTranslationMap();

export function translateText(root: ParentNode = document): void {
  const walkerRoot = root instanceof Document ? root.body : root;
  if (!walkerRoot) {
    return;
  }

  const walker = document.createTreeWalker(walkerRoot, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (isIgnoredTextParent(node) || isInsideNovelBody(node)) {
        return NodeFilter.FILTER_REJECT;
      }

      const text = node.nodeValue?.trim() ?? '';

      if (!text) {
        return NodeFilter.FILTER_REJECT;
      }

      if (translations.has(text)) {
        return NodeFilter.FILTER_ACCEPT;
      }

      if (translateDynamicText(text) !== text) {
        return NodeFilter.FILTER_ACCEPT;
      }

      return NodeFilter.FILTER_REJECT;
    },
  });

  const nodes: CharacterData[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as CharacterData);
  }

  for (const node of nodes) {
    const current = node.nodeValue ?? '';
    const trimmed = current.trim();
    const exact = translations.get(trimmed);

    if (exact) {
      const next = current.replace(trimmed, exact);
      setTextIfChanged(node, next);
      continue;
    }

    const dynamic = translateDynamicText(current);
    if (dynamic !== current) {
      setTextIfChanged(node, dynamic);
    }
  }
}
