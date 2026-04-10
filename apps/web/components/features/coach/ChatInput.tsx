'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Send, Sparkles } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form className="p-4 bg-white border-t border-slate-100 shadow-up" onSubmit={handleSubmit}>
      <div className="relative max-w-4xl mx-auto group">
        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        <Input 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask your coach anything about your career..."
          className="pl-11 pr-24 h-14 bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-sm"
          disabled={isLoading}
        />
        <div className="absolute right-2 top-2 bottom-2">
          <Button 
            type="submit" 
            className="h-full px-5 font-syne"
            disabled={!text.trim() || isLoading}
          >
            {isLoading ? 'Thinking...' : 'Send'} <Send className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </form>
  );
}
