export function setTextIfChanged(node: CharacterData, nextText: string): void {
  if (node.nodeValue !== nextText) {
    node.nodeValue = nextText;
  }
}

export function setAttributeIfChanged(el: Element, name: string, nextValue: string): void {
  if (el.getAttribute(name) !== nextValue) {
    el.setAttribute(name, nextValue);
  }
}

export function isInsideNovelBody(node: Node): boolean {
  const parent = node.parentElement;
  return Boolean(
    parent?.closest(
      [
        '.novel_view',
        '.p-novel__body',
        '#novel_honbun',
        '#novel_p',
        '#novel_a',
        '.js-novel-text',
      ].join(',')
    )
  );
}

export function isIgnoredTextParent(node: Node): boolean {
  const parent = node.parentElement;
  return Boolean(parent?.closest('script,style,noscript,textarea,select,option'));
}
