'use client';

import React from 'react';
import { SkillRow } from '@/components/features/skills/SkillRow';
import { useDiagnostic } from '@/hooks/useDiagnostic';
import { useSubscription } from '@/hooks/useSubscription';
import { Button } from '@/components/ui/Button';
import { ProGate } from '@/components/shared/ProGate';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Target, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function SkillsPage() {
  const router = useRouter();
  const { diagnostic, isLoading } = useDiagnostic();
  const { isPro } = useSubscription();

  if (isLoading || !diagnostic) return <div>Loading...</div>;

  const freeGaps = diagnostic.gaps.slice(0, 3);
  const lockedGaps = diagnostic.gaps.slice(3);

  const stats = {
    critical: diagnostic.gaps.filter(g => g.severity === 'critical' || g.severity === 'high').length,
    medium: diagnostic.gaps.filter(g => g.severity === 'medium').length,
    strengths: 8 // Mocking strength count
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-syne text-slate-900">Skill gap radar</h1>
          <p className="text-slate-500 mt-1">
            Comparing your profile against active <strong>Senior SDE</strong> market requirements.
          </p>
        </div>
        <Button variant="primary" className="font-syne" onClick={() => router.push(ROUTES.ROADMAP)}>
          Add all to roadmap
        </Button>
      </div>

      {/* Stats / Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <select className="form-input w-fit h-10 py-0 font-syne font-bold text-xs uppercase tracking-wider">
          <option>Target role: Senior SDE</option>
          <option>Target role: System Architect</option>
        </select>
        <Badge variant="red" className="h-10 px-4 font-syne gap-2">
          <AlertTriangle className="w-3.5 h-3.5" /> {stats.critical} critical gaps
        </Badge>
        <Badge variant="amber" className="h-10 px-4 font-syne gap-2">
          <Zap className="w-3.5 h-3.5" /> {stats.medium} medium gaps
        </Badge>
        <Badge variant="teal" className="h-10 px-4 font-syne gap-2">
          <ShieldCheck className="w-3.5 h-3.5" /> {stats.strengths} strengths
        </Badge>
      </div>

      <div className="space-y-4">
        {freeGaps.map((gap) => (
          <SkillRow key={gap.skillId} gap={gap} />
        ))}

        <ProGate featureName="full skill gap radar with deeper market intelligence">
          <div className="space-y-4">
            {lockedGaps.map((gap) => (
              <SkillRow key={gap.skillId} gap={gap} />
            ))}
          </div>
        </ProGate>
      </div>

      {/* Insight Footer */}
      <Card className="p-6 bg-[#EEEEFF] border-[#A89FF8] flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#A89FF8]">
          <Target className="w-8 h-8 text-[#3B2FC9]" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-lg font-bold text-[#3B2FC9] font-syne">How do we calculate these?</h4>
          <p className="text-[#5C4FF6] text-sm leading-relaxed">
            We analyse your profile against 2,400+ active job postings across India's top product companies (Swiggy, Razorpay, Zepto). Demand scores show the weightage companies give to each skill during screening.
          </p>
        </div>
      </Card>
    </div>
  );
}
