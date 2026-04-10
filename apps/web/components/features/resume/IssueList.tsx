'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { AlertCircle, AlertTriangle, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

interface Issue {
  type: string;
  severity: 'critical' | 'warning' | 'info';
  description: string;
}

interface IssueListProps {
  issues: Issue[];
}

export function IssueList({ issues }: IssueListProps) {
  const router = useRouter();

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-bold text-slate-900 font-syne uppercase tracking-wider">Issues detected</h4>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500">{issues.length} Total</span>
      </div>
      
      <div className="space-y-3">
        {issues.map((issue, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-colors">
            {issue.severity === 'critical' ? (
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            )}
            <p className="text-sm text-slate-600 leading-relaxed min-w-0">
              {issue.description}
            </p>
          </div>
        ))}
      </div>

      <Button 
        variant="ghost" 
        className="w-full mt-6 gap-2 text-slate-500 border-slate-200"
        onClick={() => router.push(ROUTES.COACH)}
      >
        <MessageSquare className="w-4 h-4" /> Ask coach about these gaps
      </Button>
    </Card>
  );
}
