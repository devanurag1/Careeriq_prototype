'use client';

import React from 'react';
import { UploadZone } from '@/components/features/resume/UploadZone';
import { IssueList } from '@/components/features/resume/IssueList';
import { RewritePanel } from '@/components/features/resume/RewritePanel';
import { useResume } from '@/hooks/useResume';
import { useSubscription } from '@/hooks/useSubscription';
import { ProGate } from '@/components/shared/ProGate';
import { MetricCard } from '@/components/features/dashboard/MetricCard';
import { Target, AlertCircle, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ResumePage() {
  const { analysis, isUploading, upload, isSuccess } = useResume();
  const { isPro } = useSubscription();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-syne text-slate-900">Resume optimizer</h1>
          <p className="text-slate-500 mt-1">
            Optimise your resume for <strong>specific target roles</strong> to skip the screening bots.
          </p>
        </div>
        {!isPro && <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider border border-green-100 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> PRO FEATURE
          </span>}
      </div>

      <ProGate featureName="full resume optimizer with AI-powered suggestions">
        <div className="space-y-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard 
              label="Current Match" 
              value={`${analysis?.matchScore || 0}%`} 
              sub="Based on your target role" 
              icon={Target} 
              variant="amber" 
            />
            <MetricCard 
              label="Optimized Score" 
              value={`${analysis?.optimizedScore || 0}%`} 
              sub="After AI-powered fixes" 
              icon={Sparkles} 
              variant="green" 
            />
            <MetricCard 
              label="Key Issues" 
              value={analysis?.issues?.filter(i => i.severity === 'critical').length || 0} 
              sub="Critical blockers found" 
              icon={AlertCircle} 
              variant="blue" 
            />
          </div>

          {/* Target Role Selector Bar */}
          <div className="flex items-center gap-3 p-1.5 pl-5 bg-white border border-slate-100 rounded-full w-fit max-w-full">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Target:</span>
            <span className="font-bold text-slate-800 text-sm truncate">{analysis?.targetRole || 'Senior SDE at Swiggy'}</span>
            <Button variant="ghost" size="sm" className="h-8 px-4 rounded-full font-syne text-[10px] border-slate-100">Change role</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8">
            <div className="space-y-8">
              <UploadZone 
                onUpload={upload} 
                isUploading={isUploading} 
                isSuccess={isSuccess} 
                fileName="resume_arjun_2025.pdf"
                issueCount={analysis?.issues?.length}
              />
              {isSuccess && <IssueList issues={analysis.issues} />}
            </div>
            
            <div className={isSuccess ? 'animate-in slide-in-from-right-4 duration-500' : 'opacity-20 grayscale pointer-events-none'}>
              <RewritePanel />
            </div>
          </div>
        </div>
      </ProGate>

      {/* Footer / Info */}
      {!isSuccess && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-bold font-syne text-slate-900">Beat the ATS</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Applicant Tracking Systems (ATS) reject 75% of resumes before a human sees them. We verify your resume matches the exact keywords required by top firms.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold font-syne text-slate-900">AI-Powered Rewriting</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our AI doesn't just check grammar; it re-writes your bullet points to emphasize impact, metrics, and specific technical keywords matching your target role.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-bold font-syne text-slate-900">Issue Detection</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              From formatting errors that break parsers to "vague" accomplishment statements, we catch every bottleneck in your job application process.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
