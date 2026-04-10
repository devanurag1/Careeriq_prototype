'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Zap } from 'lucide-react';
import { useUIStore } from '@/store/ui.store';

export function UpgradeBanner() {
  const setUpgradeModal = useUIStore((state) => state.setUpgradeModal);

  return (
    <div className="relative overflow-hidden bg-[#EEEEFF] border border-[#A89FF8] p-6 rounded-2xl group">
      <Zap className="absolute -right-6 -top-6 w-24 h-24 text-[#A89FF8]/20 group-hover:rotate-12 transition-transform duration-700" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#3B2FC9] font-syne">Unlock Job Intelligence & Resume Optimizer</h3>
          <p className="text-[#5C4FF6] text-sm mt-1 max-w-md">
            Get access to real-time market trends, salary benchmarks, and AI-powered resume auditing to skip the screening.
          </p>
        </div>
        <Button variant="primary" className="shrink-0 font-syne" onClick={() => setUpgradeModal(true)}>
          Upgrade to Pro
        </Button>
      </div>
    </div>
  );
}
