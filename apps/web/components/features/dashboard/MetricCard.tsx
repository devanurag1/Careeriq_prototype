'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface MetricCardProps {
  label: string;
  value: string | number;
  sub: string;
  icon: LucideIcon;
  variant?: 'blue' | 'teal' | 'amber' | 'green';
}

export function MetricCard({ label, value, sub, icon: Icon, variant = 'blue' }: MetricCardProps) {
  const styles = {
    blue: 'bg-blue-50 text-blue-600',
    teal: 'bg-teal-50 text-teal-600',
    amber: 'bg-amber-50 text-amber-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <Card className="p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>
        <div className={cn('p-2 rounded-lg', styles[variant])}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-900 font-syne">{value}</div>
        <div className="text-xs text-slate-500 mt-1">{sub}</div>
      </div>
    </Card>
  );
}
