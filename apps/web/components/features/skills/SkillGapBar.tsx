'use client';

import React from 'react';
import { cn } from '@/lib/cn';

interface SkillGapBarProps {
  label: string;
  value: number; // 0-100
  colorClassName?: string;
  showValue?: boolean;
}

export function SkillGapBar({ label, value, colorClassName, showValue }: SkillGapBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
        <span>{label}</span>
        {showValue && <span>{value}%</span>}
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={cn('h-full transition-all duration-700', colorClassName || 'bg-primary')} 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
