import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { pcrTrainerConfig } from '../pcrTrainer.config';

interface PrivacyBannerProps {
  hasPhiFlag: boolean;
  keyword: string | null;
}

export const PrivacyBanner: React.FC<PrivacyBannerProps> = ({ hasPhiFlag, keyword }) => {
  return (
    <div className={`rounded-2xl border px-5 py-4 flex items-center gap-4 ${hasPhiFlag ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-amber-50 border-amber-200 text-amber-700'}`}>
      <ShieldAlert className="w-5 h-5" />
      <div>
        <p className="text-sm font-semibold">{pcrTrainerConfig.privacyBanner}</p>
        {hasPhiFlag && keyword && (
          <p className="text-xs mt-1">Potential PHI detected (keyword: {keyword}). Please remove identifiers.</p>
        )}
      </div>
    </div>
  );
};
