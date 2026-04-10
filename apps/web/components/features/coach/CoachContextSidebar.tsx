'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { User, Target, TrendingUp, ShieldCheck, Mail } from 'lucide-react';
import { useDiagnostic } from '@/hooks/useDiagnostic';

export function CoachContextSidebar() {
  const { diagnostic } = useDiagnostic();

  if (!diagnostic) return null;

  return (
    <Card className="p-6 h-full border-0 bg-slate-50 overflow-y-auto hidden lg:flex flex-col gap-8 rounded-none border-l border-slate-200">
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 font-syne">Current Profile</h4>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">AK</div>
          <div>
            <div className="text-sm font-bold text-slate-900">Arjun Kumar</div>
            <div className="text-[10px] text-slate-500">arjun@company.com</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <Target className="w-3 h-3" /> Target Role
            </div>
            <div className="text-xs font-semibold text-slate-700">{diagnostic.targetRole}</div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <TrendingUp className="w-3 h-3" /> Readiness
            </div>
            <div className="text-xs font-semibold text-slate-700">{diagnostic.readinessScore}/100</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 font-syne">Skill Gaps</h4>
        <div className="flex flex-wrap gap-2">
          {diagnostic.gaps.slice(0, 5).map(gap => (
            <Badge key={gap.skillId} variant="default" className="bg-white border-slate-200 text-slate-600 text-[10px]">
              {gap.skillName}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4 rounded-xl bg-primary/5 border border-primary/10">
        <p className="text-[10px] text-primary font-medium leading-relaxed">
          I am using your latest career diagnostic and roadmap progress to provide context-aware advice.
        </p>
      </div>
    </Card>
  );
}
