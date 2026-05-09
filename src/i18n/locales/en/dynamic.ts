import type { DynamicTranslationRule } from '../types';
import { formatConfiguredDate } from '../../../utils/dateFormat';

export const dynamic: readonly DynamicTranslationRule[] = [
  {
    pattern: /作者：/g,
    replacement: 'Author: ',
  },
  {
    pattern: /最新エピソード掲載日：\s*/g,
    replacement: 'Latest episode: ',
  },
  {
    pattern: /最終掲載日：\s*/g,
    replacement: 'Final published: ',
  },
  {
    pattern: />>エピソード(\d+)の感想一覧/g,
    replacement: '>> Comments for episode $1',
  },
  {
    pattern: /続きから読む（(.+?)）/g,
    replacement: 'Continue reading ($1)',
  },
  {
    pattern: /最終更新日\s*:\s*/g,
    replacement: 'Last updated: ',
  },
  {
    pattern: /連載中\s*\/\s*/g,
    replacement: 'Ongoing / ',
  },
  {
    pattern: /この作品には/g,
    replacement: 'This work contains',
  },
  {
    pattern: /〔残酷描写〕が含まれています。/g,
    replacement: '[graphic violence].',
  },
  {
    pattern: /半角英数字の両方を含む\s*8字以上32字以内で入力/g,
    replacement: 'Use 8-32 half-width alphanumeric characters, including both letters and numbers',
  },
  {
    pattern: /エピソード(\d+)/g,
    replacement: 'Episode $1',
  },
  {
    pattern: /(\d+)\s*ページ/g,
    replacement: 'Page $1',
  },
  {
    pattern: /次のページ/g,
    replacement: 'Next page',
  },
  {
    pattern: /最後のページ/g,
    replacement: 'Last page',
  },
  {
    pattern: /(\d+)\s*characters以上、\s*(\d+)\s*characters以内で入力/g,
    replacement: 'Enter $1-$2 characters',
  },
  {
    pattern: /(\d+)\s*文字以上、\s*(\d+)\s*文字以内で入力/g,
    replacement: 'Enter $1-$2 characters',
  },
  {
    pattern: /空白・改行含まない(\d+)\s*characters以上、\s*空白・改行含む(\d+)\s*characters以内で入力/g,
    replacement: 'Enter at least $1 non-space/non-line-break characters and up to $2 characters including spaces and line breaks',
  },
  {
    pattern: /空白・改行含まない(\d+)\s*文字以上、/g,
    replacement: 'At least $1 non-space/non-line-break characters,',
  },
  {
    pattern: /空白・改行含む(\d+)\s*文字以内で入力/g,
    replacement: 'up to $1 characters including spaces and line breaks',
  },
  {
    pattern: /(\d{4})\/(\d{1,2})\/(\d{1,2})/g,
    replacement: (_match, year, month, day) => formatConfiguredDate(year, month, day),
  },
  {
    pattern: /(\d{4})\.(\d{1,2})\.(\d{1,2})/g,
    replacement: (_match, year, month, day) => formatConfiguredDate(year, month, day),
  },
  {
    pattern: /(\d{4})-(\d{1,2})-(\d{1,2})/g,
    replacement: (_match, year, month, day) => formatConfiguredDate(year, month, day),
  },
  {
    pattern: /(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/g,
    replacement: (_match, year, month, day) => formatConfiguredDate(year, month, day),
  },
  {
    pattern: /(\d{1,4}[./-]\d{1,2}[./-]\d{1,4}\s+\d{1,2}:\d{2})\s*更新/g,
    replacement: '$1 Updated',
  },
  {
    pattern: /(\d{1,2})時\s*(\d{1,2})分/g,
    replacement: '$1:$2',
  },
  {
    pattern: /エピソード\s*([\d\s～]+)\s*を表示中/g,
    replacement: 'Showing episodes $1',
  },
  {
    pattern: /連載〔\s*全\s*(\d+)\s*エピソード\s*〕/g,
    replacement: 'Ongoing [$1 episodes total]',
  },
  {
    pattern: /完結済〔\s*全\s*(\d+)\s*エピソード\s*〕/g,
    replacement: 'Completed [$1 episodes total]',
  },
  {
    pattern: /連載\(\s*全\s*(\d+)\s*エピソード\s*\)/g,
    replacement: 'Ongoing ($1 episodes total)',
  },
  {
    pattern: /完結済\(\s*全\s*(\d+)\s*エピソード\s*\)/g,
    replacement: 'Completed ($1 episodes total)',
  },
  {
    pattern: /全\s*(\d+)\s*エピソード/g,
    replacement: '$1 episodes total',
  },
  {
    pattern: /(\d[\d,]*)\s*件/g,
    replacement: '$1',
  },
  {
    pattern: /(\d[\d,]*)\s*文字/g,
    replacement: '$1 characters',
  },
  {
    pattern: /(\d[\d,]*)\s*pt/g,
    replacement: '$1 pt',
  },
];
