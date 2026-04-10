'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bot, Share2, Download, Zap } from 'lucide-react';

interface StatRowProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

const StatRow = ({ label, value, highlight }: StatRowProps) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 text-sm">
    <span className="text-slate-500">{label}</span>
    <span className={highlight ? 'font-bold text-primary' : 'font-semibold text-slate-800'}>{value}</span>
  </div>
);

export function RoadmapSidebar() {
  return (
    <div className="flex flex-col gap-6 sticky top-24 h-fit">
      <div className="bg-[#EEEEFF] border border-[#A89FF8] p-5 rounded-2xl relative overflow-hidden group">
        <Zap className="absolute -right-4 -top-4 w-16 h-16 text-[#A89FF8]/20 group-hover:rotate-12 transition-transform duration-500" />
        <div className="flex items-center gap-2 mb-3">
          <Bot className="w-5 h-5 text-[#3B2FC9]" />
          <h4 className="text-sm font-bold text-[#3B2FC9] font-syne uppercase tracking-wider">AI Insight</h4>
        </div>
        <p className="text-xs text-[#5C4FF6] leading-relaxed font-dm-sans">
          Based on <strong>Zepto & CRED</strong> job postings this week — Python + Pandas is the most requested skill. You're on the right track. Complete week 3 and your readiness score goes from <strong>68 → 76</strong>.
        </p>
      </div>

      <Card className="p-5">
        <h4 className="text-xs font-bold text-slate-400 font-syne uppercase tracking-widest mb-4">Your progress</h4>
        <div className="space-y-1">
          <StatRow label="Overall complete" value="24%" highlight />
          <StatRow label="Tasks done" value="7 / 84" />
          <StatRow label="Current streak" value="🔥 4 days" />
          <StatRow label="Time invested" value="6.5 hrs" />
        </div>
      </Card>

      <Card className="p-5">
        <h4 className="text-xs font-bold text-slate-400 font-syne uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Resource breakdown</h4>
        <div className="space-y-1">
          <StatRow label="YouTube videos" value="34 total" />
          <StatRow label="Articles" value="28 total" />
          <StatRow label="Projects" value="8 total" />
          <StatRow label="Practice sets" value="14 total" />
        </div>
      </Card>

      <Card className="p-5 bg-slate-50 border-slate-200">
        <h4 className="text-xs font-bold text-slate-800 font-syne uppercase tracking-widest mb-4">Quick actions</h4>
        <div className="flex flex-col gap-2">
          <Button variant="ghost" size="sm" className="justify-start gap-2 bg-white text-xs border-slate-200 hover:border-primary">
            <Bot className="w-3.5 h-3.5" /> Ask AI to adjust plan
          </Button>
          <Button variant="ghost" size="sm" className="justify-start gap-2 bg-white text-xs border-slate-200 hover:border-primary">
            <Share2 className="w-3.5 h-3.5" /> Share progress
          </Button>
          <Button variant="ghost" size="sm" className="justify-start gap-2 bg-white text-xs border-slate-200 hover:border-primary">
            <Download className="w-3.5 h-3.5" /> Export as PDF
          </Button>
        </div>
      </Card>
    </div>
  );
}
