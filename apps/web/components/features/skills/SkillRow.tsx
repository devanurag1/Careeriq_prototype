'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge, BadgeProps } from '@/components/ui/Badge';
import { SkillGapBar } from './SkillGapBar';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { SkillGap } from '@careeriq/shared/types';

interface SkillRowProps {
  gap: SkillGap;
  isLocked?: boolean;
}

export function SkillRow({ gap, isLocked }: SkillRowProps) {
  const router = useRouter();

  const severityToVariant: Record<string, BadgeProps['variant']> = {
    critical: 'red',
    high: 'red',
    medium: 'amber',
    low: 'teal',
  };

  const severityToColor: Record<string, string> = {
    critical: 'bg-red-500',
    high: 'bg-red-400',
    medium: 'bg-amber-500',
    low: 'bg-teal-500',
  };

  if (isLocked) {
    return (
      <Card className="p-5 opacity-50 grayscale select-none flex items-center justify-between border-dashed">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-syne font-bold text-slate-800">{gap.skillName}</span>
            <Badge variant="default">Locked</Badge>
          </div>
          <div className="h-1.5 w-full max-w-xs bg-slate-100 rounded-full" />
        </div>
        <span className="text-xl">🔒</span>
      </Card>
    );
  }

  return (
    <Card className="p-5 hover:border-primary/20 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-syne font-bold text-slate-900 group-hover:text-primary transition-colors">{gap.skillName}</h4>
        <Badge variant={severityToVariant[gap.severity]}>{gap.severity}</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillGapBar 
          label="Your level" 
          value={gap.userLevel * 10} 
          colorClassName={severityToColor[gap.severity]}
          showValue
        />
        <SkillGapBar 
          label="Market demand" 
          value={gap.marketDemand} 
          colorClassName="bg-teal-500"
          showValue
        />
      </div>

      <div className="flex gap-2 mt-5">
        <Button 
          variant="primary" 
          size="sm" 
          className="font-syne h-8 text-[11px] uppercase tracking-wider"
          onClick={() => router.push(ROUTES.ROADMAP)}
        >
          Add to roadmap
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="font-syne h-8 text-[11px] uppercase tracking-wider border-slate-200"
          onClick={() => router.push(ROUTES.COACH)}
        >
          Ask coach
        </Button>
      </div>
    </Card>
  );
}
