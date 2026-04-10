'use client';

import React from 'react';
import { CareerScoreRing } from '@/components/features/dashboard/CareerScoreRing';
import { MetricCard } from '@/components/features/dashboard/MetricCard';
import { DashboardTask } from '@/components/features/dashboard/DashboardTask';
import { UpgradeBanner } from '@/components/features/dashboard/UpgradeBanner';
import { useDiagnostic } from '@/hooks/useDiagnostic';
import { useRoadmap } from '@/hooks/useRoadmap';
import { useSubscription } from '@/hooks/useSubscription';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight, 
  Bot,
  Plus
} from 'lucide-react';

export default function DashboardPage() {
  const { diagnostic, isLoading: diagLoading } = useDiagnostic();
  const { roadmap, completeTask } = useRoadmap();
  const { isPro } = useSubscription();

  if (diagLoading || !diagnostic) return <div>Loading...</div>;

  const weeklyTasks = roadmap?.weeks[0]?.tasks.slice(0, 4) || [];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 font-syne">Good morning, Arjun</h1>
          <p className="text-slate-500 mt-1">Here is what's happening with your career roadmap today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="font-syne border-slate-200">
            <TrendingUp className="w-4 h-4 mr-2" /> View Reports
          </Button>
          <Button variant="primary" className="font-syne">
            <Plus className="w-4 h-4 mr-2" /> Add Task
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Score & Metrics */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 flex flex-col items-center justify-center text-center">
              <CareerScoreRing score={diagnostic.readinessScore} />
              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 font-syne">Your Readiness Score</h3>
                <p className="text-sm text-slate-500 max-w-[240px]">
                  You are in the <strong>top 15%</strong> of Senior SDE candidates this month.
                </p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/5 mt-2">
                  How to improve? <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              <MetricCard 
                label="Target Role" 
                value={diagnostic.targetRole} 
                sub="Matching 84% of requirements" 
                icon={Target} 
                variant="blue" 
              />
              <MetricCard 
                label="Market Demand" 
                value="High" 
                sub="142 new openings today" 
                icon={TrendingUp} 
                variant="green" 
              />
              <MetricCard 
                label="Network Fit" 
                value="Strong" 
                sub="12 connections at target companies" 
                icon={Users} 
                variant="teal" 
              />
            </div>
          </div>

          {!isPro && <UpgradeBanner />}

          {/* Skill Gaps Preview */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 font-syne">Top Skill Gaps</h3>
              <Button variant="ghost" size="sm" className="text-slate-500">View all</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diagnostic.gaps.slice(0, 4).map((gap) => (
                <div key={gap.skillId} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">{gap.skillName}</span>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-tighter">{gap.severity}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-1000" 
                      style={{ width: `${gap.userLevel * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Tasks & AI Coach */}
        <div className="space-y-8">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <h3 className="text-lg font-bold text-slate-900 font-syne">Weekly Tasks</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">Week 3</span>
            </div>
            <div className="space-y-3">
              {weeklyTasks.map((task) => (
                <DashboardTask 
                  key={task.id} 
                  task={task} 
                  onToggle={completeTask} 
                />
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-slate-500 border-slate-200">
              Go to Roadmap <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          <Card className="p-6 bg-slate-900 text-white border-0 overflow-hidden relative">
            <Bot className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
            <h3 className="text-lg font-bold font-syne mb-2">Ask your AI Coach</h3>
            <p className="text-slate-400 text-xs mb-6 leading-relaxed">
              "How can I improve my System Design skills for the Swiggy interview?"
            </p>
            <div className="relative">
              <Input 
                placeholder="Ask anything..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 h-12 pr-12"
              />
              <Button size="icon" className="absolute right-1 top-1 bottom-1 w-10 h-10 rounded-lg">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
