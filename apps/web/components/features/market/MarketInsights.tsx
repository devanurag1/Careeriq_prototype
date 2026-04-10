'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TrendingUp, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

interface RisingSkill {
  skillName: string;
  demandScore: number;
  color: string;
}

interface MarketInsightsProps {
  risingSkills: RisingSkill[];
}

export function MarketInsights({ risingSkills }: MarketInsightsProps) {
  const router = useRouter();

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h4 className="text-sm font-bold text-slate-900 font-syne uppercase tracking-wider">Rising skills — add to roadmap</h4>
      </div>
      
      <div className="space-y-4">
        {risingSkills.map((skill) => (
          <div key={skill.skillName} className="flex items-center gap-4">
            <div className="w-32 text-sm font-bold text-slate-700 font-syne truncate">{skill.skillName}</div>
            <div className="flex-1 h-8 bg-slate-100 rounded-lg relative overflow-hidden">
              <div 
                className="h-full flex items-center justify-end pr-3 text-[10px] font-bold text-white transition-all duration-1000 ease-out"
                style={{ width: `${skill.demandScore}%`, backgroundColor: skill.color }}
              >
                {skill.demandScore}%
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 px-3 gap-1.5 text-[10px] font-bold uppercase tracking-widest border-slate-100 hover:border-primary hover:text-primary"
              onClick={() => router.push(ROUTES.ROADMAP)}
            >
              <Plus className="w-3 h-3" /> Add
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
