import { isAdultHost } from '../i18n/current';

const BADGE_CLASS = 'tm-syosetu-tag-badge';

export function linkKeywordBadges(root: ParentNode = document): void {
  const keywordValues = findKeywordValues(root);
  const searchBase = getSearchBase();

  for (const value of keywordValues) {
    if (value.dataset.tmKeywordBadges === '1') {
      continue;
    }

    const tags = getKeywordTags(value);
    if (tags.length === 0) {
      continue;
    }

    value.textContent = '';
    for (const tag of tags) {
      value.append(createKeywordLink(tag, searchBase));
    }

    value.dataset.tmKeywordBadges = '1';
  }
}

function findKeywordValues(root: ParentNode): HTMLElement[] {
  const scope = root instanceof Document ? root : document;
  const titles = Array.from(scope.querySelectorAll<HTMLElement>('.p-infotop-data__title, .verticalpdf-info dt'));

  return titles.flatMap((title) => {
    const label = title.textContent?.trim();
    if (label !== 'キーワード') {
      return [];
    }

    const value = title.nextElementSibling;
    if (!(value instanceof HTMLElement)) {
      return [];
    }

    if (!value.matches('.p-infotop-data__value, .verticalpdf-info dd')) {
      return [];
    }

    return [value];
  });
}

function getKeywordTags(value: HTMLElement): string[] {
  if (value.querySelector(`.${BADGE_CLASS}`)) {
    return [];
  }

  return (value.textContent ?? '')
    .replace(/\u00a0/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function createKeywordLink(tag: string, searchBase: string): HTMLAnchorElement {
  const link = document.createElement('a');
  link.className = BADGE_CLASS;
  link.textContent = tag;
  link.href = searchBase + encodeURIComponent(tag);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function getSearchBase(): string {
  return isAdultHost() ? 'https://noc.syosetu.com/search/search/?word=' : 'https://yomou.syosetu.com/search.php?word=';
}
