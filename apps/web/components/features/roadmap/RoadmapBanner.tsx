'use client';

import React from 'react';
import { Progress } from '@/components/ui/Progress';

interface RoadmapBannerProps {
  currentWeek: number;
  totalWeeks: number;
  topic: string;
  streakDays: number;
  percentComplete: number;
}

export function RoadmapBanner({ 
  currentWeek, 
  totalWeeks, 
  topic, 
  streakDays, 
  percentComplete 
}: RoadmapBannerProps) {
  return (
    <div className="prog-banner flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#EEEEFF] border border-[#A89FF8] mb-8">
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-bold text-[#3B2FC9]">
          Week {currentWeek} of {totalWeeks} · {topic}
        </h3>
        <p className="text-sm text-[#5C4FF6]">
          You're on a <strong>{streakDays}-day streak 🔥</strong> — you're in the top 25% of users at your level
        </p>
        <div className="mt-4">
          <Progress value={percentComplete} className="h-2 w-full max-w-md bg-[#A89FF8]" />
        </div>
      </div>
      <div className="text-center md:text-right">
        <div className="text-4xl font-extrabold text-[#5C4FF6] font-syne">{percentComplete}%</div>
        <div className="text-xs text-[#A89FF8] mt-1 font-medium">overall complete</div>
      </div>
    </div>
  );
}
