import { useMemo } from 'react';
import { pcrTrainerConfig } from '../pcrTrainer.config';

const buildRegex = (keywords: readonly string[]) => {
  const escaped = keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(`(${escaped.join('|')})`, 'i');
};

const phiRegex = buildRegex(pcrTrainerConfig.phiKeywords);

export const usePhiScanner = (content: string) => {
  return useMemo(() => {
    const matches = content.match(phiRegex);
    return {
      hasPhiFlag: Boolean(matches),
      keyword: matches?.[0] ?? null,
    };
  }, [content]);
};
