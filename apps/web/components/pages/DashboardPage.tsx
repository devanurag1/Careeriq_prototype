'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_DIAGNOSTIC, MOCK_USER, MOCK_ROADMAP } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';
import { useUIStore } from '@/store/ui.store';
import { severityToTag, severityToLabel, severityToColor } from '@/lib/formatters';

export function DashboardPage() {
  const router = useRouter();
  const openUpgradeModal = useUIStore((s) => s.openUpgradeModal);

  // Weekly task completion state
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set(['t-sql']));
  const toggleTask = (id: string) =>
    setCheckedTasks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const weeklyTasks = [
    { id: 't-py', label: 'Complete Python basics — Module 1' },
    { id: 't-sql', label: 'Read SQL joins article' },
    { id: 't-lc', label: 'Practice 5 LeetCode easy problems' },
    { id: 't-sys', label: 'Watch system design intro (45 min)' },
  ];

  const scorePercent = MOCK_DIAGNOSTIC.readinessScore;
  const scoreConic = `conic-gradient(var(--purple) 0% ${scorePercent}%, var(--border) ${scorePercent}% 100%)`;

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between px-8 pt-6" style={{ paddingBottom: 0 }}>
        <div>
          <h1 className="font-display font-bold" style={{ fontSize: 26, letterSpacing: '-0.5px' }}>Good morning, {MOCK_USER.name.split(' ')[0]} 👋</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text3)' }}>Here's your career snapshot for today.</p>
        </div>
        {/* Score ring */}
        <div className="flex items-center gap-5">
          <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: scoreConic }}>
            <div className="w-16 h-16 rounded-full flex flex-col items-center justify-center" style={{ background: 'var(--surface)' }}>
              <span className="font-display font-extrabold text-xl leading-none" style={{ color: 'var(--purple)' }}>{scorePercent}</span>
              <span className="text-xs" style={{ color: 'var(--text3)' }}>/100</span>
            </div>
          </div>
          <div>
            <div className="font-display font-semibold text-sm">Career readiness</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Good — keep growing</div>
          </div>
        </div>
      </div>

      <div className="px-8 py-5">
        {/* Metrics row */}
        <div className="grid gap-3.5 mb-6" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { num: MOCK_DIAGNOSTIC.gaps.length, label: 'Skill gaps', color: 'var(--red)' },
            { num: MOCK_USER.weeksActive, label: 'Weeks active', color: 'var(--text)' },
            { num: `🔥 ${MOCK_USER.streakDays}`, label: 'Day streak', color: 'var(--amber)' },
            { num: MOCK_USER.tasksCompleted, label: 'Tasks done', color: 'var(--teal)' },
          ].map((m, i) => (
            <div key={i} className="metric-card">
              <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 28, color: m.color }}>{m.num}</div>
              <div className="text-xs" style={{ color: 'var(--text3)' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* 2-col grid */}
        <div className="grid gap-4 mb-5" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Skill gaps preview */}
          <div className="card">
            <h4 className="font-display font-bold text-sm mb-3.5">Top skill gaps</h4>
            {MOCK_DIAGNOSTIC.gaps.slice(0, 3).map((gap) => (
              <div key={gap.skillId} className="mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">{gap.skillName}</span>
                  <span className={`tag ${severityToTag(gap.severity)}`} style={{ fontSize: 11 }}>{severityToLabel(gap.severity).split(' ')[0]}</span>
                </div>
                <div className="gap-track">
                  <div className="gap-fill" style={{ width: `${gap.gapScore}%`, background: severityToColor(gap.severity) }} />
                </div>
              </div>
            ))}
            <button className="btn btn-outline btn-sm w-full justify-center mt-3.5" onClick={() => router.push(ROUTES.SKILLS)}>
              View full skill radar →
            </button>
          </div>

          {/* Weekly tasks */}
          <div className="card">
            <h4 className="font-display font-bold text-sm mb-3.5">This week's tasks</h4>
            {weeklyTasks.map((task) => {
              const done = checkedTasks.has(task.id);
              return (
                <div key={task.id} className="flex items-center gap-2.5 py-2 border-b text-sm" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}>
                  <div className={`task-check ${done ? 'done' : ''}`} onClick={() => toggleTask(task.id)}>
                    {done && '✓'}
                  </div>
                  <span style={{ textDecoration: done ? 'line-through' : 'none', opacity: done ? 0.5 : 1 }}>{task.label}</span>
                </div>
              );
            })}
            <button className="btn btn-outline btn-sm w-full justify-center mt-3.5" onClick={() => router.push(ROUTES.ROADMAP)}>
              Open full roadmap →
            </button>
          </div>
        </div>

        {/* AI Coach quick access */}
        <div className="card mb-4">
          <h4 className="font-display font-bold text-sm mb-2.5">AI coach — quick question</h4>
          <div className="flex gap-2.5">
            <input
              className="form-input cursor-pointer"
              placeholder="Ask your career coach anything..."
              readOnly
              onClick={() => router.push(ROUTES.COACH)}
            />
            <button className="btn btn-primary" onClick={() => router.push(ROUTES.COACH)}>Ask →</button>
          </div>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            {['Am I at risk from AI?', 'What should I learn next?', 'How do I switch to PM?'].map((s) => (
              <div key={s} className="sug-chip" onClick={() => router.push(ROUTES.COACH)}>{s}</div>
            ))}
          </div>
        </div>

        {/* Upgrade banner */}
        <div className="upgrade-banner">
          <div>
            <strong className="font-display font-bold block text-base mb-1" style={{ color: 'var(--purple-dark)' }}>Unlock your full 12-week roadmap</strong>
            <p className="text-sm" style={{ color: 'var(--purple-dark)', lineHeight: 1.6 }}>
              You're on the free plan. Upgrade to access all 84 tasks, full skill radar, resume optimizer, and unlimited AI coaching.
            </p>
          </div>
          <button className="btn btn-primary flex-shrink-0" style={{ whiteSpace: 'nowrap' }} onClick={openUpgradeModal}>
            Upgrade to Pro ₹499/mo
          </button>
        </div>
      </div>
    </div>
  );
}
