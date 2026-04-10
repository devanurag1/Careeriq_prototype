'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_INITIAL_MESSAGES, MOCK_AI_REPLIES, MOCK_AI_DEFAULT_REPLY, MOCK_USER, MOCK_DIAGNOSTIC } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';
import type { ChatMessage } from '@careeriq/shared/types';

const SUGGESTIONS = [
  'What should I learn next?',
  'Am I at risk from AI in my role?',
  'How do I switch to product management?',
  'Review my career progress',
  'What skills are most in demand right now?',
];

export function CoachPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text?: string) => {
    const msgText = (text ?? input).trim();
    if (!msgText) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-user`,
      sessionId: 'sess-001',
      role: 'user',
      content: msgText,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const reply = MOCK_AI_REPLIES[msgText] ?? MOCK_AI_DEFAULT_REPLY;
      const aiMsg: ChatMessage = {
        id: `msg-${Date.now()}-ai`,
        sessionId: 'sess-001',
        role: 'assistant',
        content: reply,
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  // Bold markdown (**text**) renderer
  const renderContent = (text: string) =>
    text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
      part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
    );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex justify-between items-center px-5 py-3.5 border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: 'var(--purple)' }}>🤖</div>
            <span className="font-display font-bold text-sm">AI career coach</span>
          </div>
          <div className="text-xs rounded-full px-2.5 py-1" style={{ color: 'var(--text3)', background: 'var(--surface2)' }}>
            3 / 3 messages today (free)
          </div>
        </div>

        {/* Suggestion chips */}
        <div className="flex gap-2 px-5 py-2.5 overflow-x-auto border-b" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {SUGGESTIONS.map((s) => (
            <div key={s} className="sug-chip" onClick={() => sendMessage(s)}>{s}</div>
          ))}
        </div>

        {/* Messages */}
        <div ref={msgsRef} className="flex-1 overflow-y-auto p-5 flex flex-col gap-3.5" style={{ background: 'var(--bg)' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`max-w-xl ${msg.role === 'user' ? 'self-end' : 'self-start'}`}>
              {msg.role === 'assistant' && (
                <div className="text-xs mb-1.5 font-medium font-display" style={{ color: 'var(--text3)' }}>CareerIQ Coach</div>
              )}
              <div className={msg.role === 'user' ? 'msg-bubble-user' : 'msg-bubble-ai'}>
                {renderContent(msg.content)}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="self-start max-w-xl">
              <div className="text-xs mb-1.5 font-medium font-display" style={{ color: 'var(--text3)' }}>CareerIQ Coach</div>
              <div className="msg-bubble-ai" style={{ color: 'var(--text3)' }}>Typing…</div>
            </div>
          )}
        </div>

        {/* Input row */}
        <div className="flex gap-2.5 px-5 py-3.5 border-t" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <input
            className="form-input flex-1 rounded-3xl"
            placeholder="Ask your coach anything about your career..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="btn btn-primary" onClick={() => sendMessage()}>Send</button>
        </div>
      </div>

      {/* Context sidebar */}
      <div className="w-48 flex-shrink-0 border-l overflow-y-auto p-4" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="text-xs font-bold tracking-wider uppercase mb-3 font-display" style={{ color: 'var(--text3)' }}>Your profile</div>
        {[
          { label: 'Role', value: 'Software engineer' },
          { label: 'Goal', value: 'Senior SDE' },
          { label: 'Top gap', value: 'Python' },
          { label: 'Score', value: `${MOCK_DIAGNOSTIC.readinessScore}/100` },
          { label: 'Streak', value: `🔥 ${MOCK_USER.streakDays} days` },
        ].map(({ label, value }) => (
          <div key={label} className="text-xs mb-2" style={{ color: 'var(--text2)', lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--text)' }}>{label}:</strong> {value}
          </div>
        ))}

        <div className="h-px my-3" style={{ background: 'var(--border)' }} />
        <div className="text-xs font-bold tracking-wider uppercase mb-3 font-display" style={{ color: 'var(--text3)' }}>Quick links</div>
        {[
          { label: '→ My roadmap', href: ROUTES.ROADMAP },
          { label: '→ Skill gaps', href: ROUTES.SKILLS },
          { label: '→ Resume', href: ROUTES.RESUME },
        ].map(({ label, href }) => (
          <div key={href} className="text-xs mb-1.5 cursor-pointer" style={{ color: 'var(--purple)' }} onClick={() => router.push(href)}>
            {label}
          </div>
        ))}

        <div className="h-px my-3" style={{ background: 'var(--border)' }} />
        <div className="text-xs font-bold tracking-wider uppercase mb-3 font-display" style={{ color: 'var(--text3)' }}>History</div>
        <div className="text-xs" style={{ color: 'var(--text3)', lineHeight: 1.8 }}>Yesterday<br />Last week<br />3 weeks ago</div>
      </div>
    </div>
  );
}
