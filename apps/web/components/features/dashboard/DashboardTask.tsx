'use client';

import React from 'react';
import { RoadmapTask } from '@/components/features/roadmap/TaskCard';
import { useRoadmap } from '@/hooks/useRoadmap';
import { Card } from '@/components/ui/Card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';

interface DashboardTaskProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  onToggle: (id: string) => void;
}

export function DashboardTask({ task, onToggle }: DashboardTaskProps) {
  return (
    <div 
      className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white hover:border-primary/20 transition-all cursor-pointer group"
      onClick={() => onToggle(task.id)}
    >
      <div className={cn(
        "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
        task.isCompleted ? "bg-green-500 border-green-500 text-white" : "border-slate-200 group-hover:border-primary"
      )}>
        {task.isCompleted && <Check className="w-3 h-3" />}
      </div>
      <span className={cn(
        "text-sm font-medium transition-all min-w-0 truncate",
        task.isCompleted ? "text-slate-400 line-through" : "text-slate-700"
      )}>
        {task.title}
      </span>
    </div>
  );
}
