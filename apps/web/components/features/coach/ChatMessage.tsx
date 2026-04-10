'use client';

import React from 'react';
import { cn } from '@/lib/cn';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  role: 'assistant' | 'user';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isBot = role === 'assistant';

  return (
    <div className={cn(
      'flex gap-4 p-6 transition-all animate-in fade-in slide-in-from-bottom-2',
      isBot ? 'bg-slate-50 border-y border-slate-100' : 'bg-white'
    )}>
      <div className={cn(
        'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border',
        isBot ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 border-slate-200 text-slate-400'
      )}>
        {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1 space-y-2 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          {isBot ? 'CareerIQ Coach' : 'You'}
        </div>
        <div 
          className="text-slate-800 leading-relaxed font-dm-sans"
          dangerouslySetInnerHTML={{ 
            __html: content.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>') 
          }} 
        />
      </div>
    </div>
  );
}
