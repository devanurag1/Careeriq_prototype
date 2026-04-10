'use client';

import React, { useState } from 'react';
import { RoadmapBanner } from '@/components/features/roadmap/RoadmapBanner';
import { RoadmapFilters } from '@/components/features/roadmap/RoadmapFilters';
import { TaskCard } from '@/components/features/roadmap/TaskCard';
import { RoadmapSidebar } from '@/components/features/roadmap/RoadmapSidebar';
import { useRoadmap } from '@/hooks/useRoadmap';
import { Button } from '@/components/ui/Button';
import { Lock, Bot, RefreshCcw } from 'lucide-react';
import { useUIStore } from '@/store/ui.store';

export default function RoadmapPage() {
  const { roadmap, isLoading, completeTask } = useRoadmap();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const setUpgradeModal = useUIStore((state) => state.setUpgradeModal);

  if (isLoading || !roadmap) return <div>Loading...</div>;

  const filteredWeeks = roadmap.weeks.filter(week => {
    // Basic filtering logic - in a real app this would filter tasks within weeks
    return true;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-syne text-slate-900">Learning roadmap</h1>
          <p className="text-slate-500 mt-1">
            Personalised for <strong>{roadmap.ownerName}</strong> · Target: {roadmap.targetRole} · Every resource curated to your level
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" size="sm" className="gap-2 font-syne border-slate-200">
            <Bot className="w-4 h-4" /> Ask AI to adjust plan
          </Button>
          <Button variant="primary" size="sm" className="gap-2 font-syne">
            <RefreshCcw className="w-4 h-4" /> Refresh roadmap
          </Button>
        </div>
      </div>

      <RoadmapBanner 
        currentWeek={3}
        totalWeeks={12}
        topic="Python for Data Engineering"
        streakDays={4}
        percentComplete={24}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-8">
        <div className="space-y-8">
          <RoadmapFilters 
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onSearch={setSearchQuery}
          />

          {filteredWeeks.map((week) => (
            <div key={week.id} className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-bold font-syne text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">Week {week.number}</span>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
                <h3 className="text-base font-bold text-slate-800 font-syne">{week.title}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${
                  week.isCompleted ? 'bg-green-50 text-green-600 border-green-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                }`}>
                  {week.isCompleted ? '✓ Completed' : 'In progress'}
                </span>
              </div>

              <div className="space-y-3">
                {week.tasks.map((task: any) => (
                  <TaskCard 
                    key={task.id} 
                    task={{
                      ...task,
                      description: task.description || "Learn the fundamentals of this topic with hand-picked videos and articles.",
                      resources: task.resources || [
                        { type: 'youtube', title: 'Curated Tutorial', meta: 'Industry Expert · 30m', url: '#' },
                        { type: 'article', title: 'Deep Dive Guide', meta: 'Official Docs · 15m', url: '#' }
                      ]
                    }} 
                    onToggleComplete={completeTask} 
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Locked Week Preview */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold font-syne text-slate-400 uppercase tracking-widest">Weeks 4–12</span>
              <div className="h-[1px] flex-1 bg-slate-100 italic">SQL, System Design, Cloud & more...</div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase border bg-red-50 text-red-600 border-red-100 flex items-center gap-1">
                <Lock className="w-2.5 h-2.5" /> Pro only
              </span>
            </div>
            
            <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 bg-white text-center space-y-4">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6 text-slate-300" />
              </div>
              <h4 className="text-lg font-bold font-syne text-slate-800">9 more weeks of personalised learning — all unlocked with Pro</h4>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Weeks 4–12 cover Advanced SQL, System Design patterns, AWS basics, REST API design, Docker fundamentals, and a capstone project.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="primary" size="sm" onClick={() => setUpgradeModal(true)}>
                  Unlock all 9 weeks — ₹499/mo
                </Button>
                <Button variant="ghost" size="sm" className="border-slate-200">
                  Preview Week 4 →
                </Button>
              </div>
            </div>
          </div>
        </div>

        <RoadmapSidebar />
      </div>
    </div>
  );
}
