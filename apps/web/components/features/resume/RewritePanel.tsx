'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Download, Sparkles } from 'lucide-react';

export function RewritePanel() {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-green-600" />
          <h4 className="text-sm font-bold text-slate-900 font-syne uppercase tracking-wider">AI-optimized version</h4>
        </div>
        <Badge variant="green" className="text-[10px]">+45% match score</Badge>
      </div>

      <div className="flex-1 bg-slate-50 rounded-2xl p-6 border border-slate-100 text-xs leading-relaxed font-dm-sans overflow-y-auto max-h-[500px]">
        <div className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">ARJUN KUMAR — Senior Software Engineer</div>
        
        <p className="mb-4">
          <span className="bg-green-100 text-green-800 p-1 rounded">+ Experienced software engineer specializing in data-intensive backend systems with 3+ years building high-throughput microservices.</span>
          <br />
          <span className="text-red-400 line-through">Software engineer with experience in Java and various technologies...</span>
        </p>

        <div className="mb-4">
          <strong className="text-slate-900">Skills:</strong> Java,{' '}
          <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded-md font-bold">+ Python</span>,
          SQL,{' '}
          <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded-md font-bold">+ AWS</span>,
          REST APIs,{' '}
          <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded-md font-bold">+ Microservices</span>
        </div>

        <div>
          <strong className="text-slate-900">Key Accomplishments:</strong>
          <ul className="list-none space-y-3 mt-2">
            <li className="bg-green-100 text-green-800 p-2 rounded-xl border border-green-200">
              + Reduced API latency by 40% through query optimization and implementing Redis caching layer for target-intensive endpoints.
            </li>
            <li className="text-red-400 line-through italic ml-2">Worked on improving API performance</li>
            <li className="bg-green-100 text-green-800 p-2 rounded-xl border border-green-200">
              + Architected a real-time tracking microservice handling 50k requests/minute using Spring Boot and Kafka.
            </li>
          </ul>
        </div>
      </div>

      <Button variant="primary" className="w-full mt-6 py-6 font-syne gap-2 shadow-lg shadow-primary/20">
        <Download className="w-5 h-5" /> Download optimized resume
      </Button>
    </Card>
  );
}
