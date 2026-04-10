'use client';

import React from 'react';
import { ChatMessage } from '@/components/features/coach/ChatMessage';
import { ChatInput } from '@/components/features/coach/ChatInput';
import { CoachContextSidebar } from '@/components/features/coach/CoachContextSidebar';
import { useCoach } from '@/hooks/useCoach';
import { Sparkles, History, Bot } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function CoachPage() {
  const { messages, sendMessage, isSending } = useCoach();

  const suggestions = [
    "How do I prepare for System Design interviews?",
    "Review my current roadmap for Senior SDE",
    "How to ask for a raise at my current role?",
  ];

  return (
    <div className="flex h-[calc(100vh-65px)] overflow-hidden bg-white">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-syne font-bold text-slate-900">CareerIQ Coach</h2>
          </div>
          <Button variant="ghost" size="sm" className="gap-2 text-slate-500 font-syne font-bold text-xs uppercase border-slate-100">
            <History className="w-4 h-4" /> View History
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto scroll-smooth py-4">
          {messages.length === 0 ? (
            <div className="max-w-2xl mx-auto mt-20 text-center px-4">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-100 shadow-sm animate-bounce duration-[2000ms]">
                <Bot className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-syne text-slate-900 mb-3">Hello, Arjun!</h3>
              <p className="text-slate-500 mb-10 max-w-sm mx-auto">
                I'm your AI career coach. Ask me anything about your roadmap, skills, or specific interview tips.
              </p>
              
              <div className="flex flex-col gap-2 max-w-md mx-auto">
                {suggestions.map((s, i) => (
                  <button 
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50 text-sm font-medium text-slate-700 hover:border-primary/30 hover:bg-primary/[0.02] hover:-translate-y-0.5 transition-all text-left flex items-center justify-between group"
                  >
                    {s}
                    <Sparkles className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {messages.map((m, i) => (
                <ChatMessage key={i} role={m.role} content={m.content} />
              ))}
            </div>
          )}
        </div>

        <ChatInput onSend={sendMessage} isLoading={isSending} />
      </div>

      {/* Profile/Context Sidebar */}
      <aside className="w-[320px] shrink-0">
        <CoachContextSidebar />
      </aside>
    </div>
  );
}
