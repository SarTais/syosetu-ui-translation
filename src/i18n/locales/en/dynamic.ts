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
    pattern: /エピソード(\d+)/g,
    replacement: 'Episode $1',
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
    pattern: /(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/g,
    replacement: (_match, year, month, day) => formatConfiguredDate(year, month, day),
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
