'use client';

import React from 'react';
import { MarketInsights } from '@/components/features/market/MarketInsights';
import { HiringCompanies } from '@/components/features/market/HiringCompanies';
import { useMarket } from '@/hooks/useMarket';
import { useSubscription } from '@/hooks/useSubscription';
import { ProGate } from '@/components/shared/ProGate';
import { MetricCard } from '@/components/features/dashboard/MetricCard';
import { TrendingUp, AlertCircle, Briefcase, IndianRupee, Sparkles, Globe } from 'lucide-react';

export default function MarketPage() {
  const { market, isLoading } = useMarket();
  const { isPro } = useSubscription();

  if (isLoading || !market) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-syne text-slate-900">Job market intelligence</h1>
          <p className="text-slate-500 mt-1">
            Real-time hiring trends, demand shifts, and salary benchmarks for <strong>Senior SDE</strong> roles in India.
          </p>
        </div>
        {!isPro && <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider border border-green-100 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> PRO FEATURE
          </span>}
      </div>

      <ProGate featureName="full market intelligence with salary benchmarks and deep-dive demand heatmaps">
        <div className="space-y-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              label="Python Demand" 
              value={`${market.pythonDemandYoY > 0 ? '+' : ''}${market.pythonDemandYoY}%`} 
              sub="Year-over-year growth" 
              icon={TrendingUp} 
              variant="teal" 
            />
            <MetricCard 
              label="Java-only Roles" 
              value={`${market.javaOnlyRoleChange}%`} 
              sub="Decline in single-stack roles" 
              icon={AlertCircle} 
              variant="amber" 
            />
            <MetricCard 
              label="Open Openings" 
              value={market.totalOpenings.toLocaleString()} 
              sub="Active SDE roles (India)" 
              icon={Briefcase} 
              variant="blue" 
            />
            <MetricCard 
              label="Median Salary" 
              value={market.salaryBenchmark.formattedSalary} 
              sub="For Senior SDE (5-8 yrs)" 
              icon={IndianRupee} 
              variant="green" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MarketInsights risingSkills={market.risingSkills} />
            <HiringCompanies companies={market.hiringCompanies} />
          </div>

          {/* Additional Insight Banner */}
          <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden group">
            <Globe className="absolute -right-8 -top-8 w-48 h-48 text-white/5 group-hover:rotate-12 transition-transform duration-1000" />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 font-syne">
                <Sparkles className="w-4 h-4" /> Market Opportunity
              </div>
              <h3 className="text-2xl font-bold text-white font-syne mb-3">AI & Platform Engineering roles have seen a 124% jump this quarter.</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Most companies are pivoting away from purely "Product Feature" roles towards infrastructure and AI-agents. We've adjusted your roadmap to prioritize <strong>Vector Databases</strong> and <strong>LLM orchestration</strong> skills.
              </p>
              <div className="flex gap-4">
                <div className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold font-syne">
                  Total open roles: 4,500+
                </div>
                <div className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold font-syne">
                  Hiring now: Swiggy, CRED, Razorpay
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProGate>
    </div>
  );
}
