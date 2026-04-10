'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_ROADMAP } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';
import { ProGate } from '@/components/shared/ProGate';
import type { RoadmapTask } from '@careeriq/shared/types';

export function RoadmapPage() {
  const router = useRouter();
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(
    new Set(
      MOCK_ROADMAP.weeks
        .flatMap((w) => w.tasks)
        .filter((t) => t.isCompleted)
        .map((t) => t.id)
    )
  );

  const toggleTask = (id: string) =>
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const freeWeeks = MOCK_ROADMAP.weeks.slice(0, 2);
  const lockedWeeks = MOCK_ROADMAP.weeks.slice(2);

  const renderTask = (task: RoadmapTask) => {
    const done = completedTasks.has(task.id);
    return (
      <div key={task.id} className={`roadmap-task ${done ? 'done' : ''}`}>
        <div
          className={`rt-check ${done ? 'done' : ''}`}
          onClick={() => toggleTask(task.id)}
        >
          {done ? '✓' : ''}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium" style={{ color: 'var(--text)', textDecoration: done ? 'line-through' : 'none' }}>{task.title}</div>
          <div className="text-xs" style={{ color: 'var(--text3)' }}>
            {task.estimatedMins} min{task.resourceUrl ? ` · ${task.resourceUrl.replace('https://', '')}` : ''}
          </div>
        </div>
        {!done && (
          <button className="btn btn-ghost btn-sm" onClick={() => router.push(ROUTES.COACH)}>Get help</button>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between px-8 pt-6 pb-0">
        <h1 className="font-display font-bold" style={{ fontSize: 26, letterSpacing: '-0.5px' }}>Learning roadmap</h1>
        <button className="btn btn-ghost btn-sm" onClick={() => router.push(ROUTES.COACH)}>Ask AI to adjust plan</button>
      </div>

      <div className="px-8 py-5">
        {/* Progress banner */}
        <div className="flex items-center justify-between rounded-xl p-4 mb-6" style={{ background: 'var(--purple-light)', border: '1px solid var(--purple-mid)' }}>
          <div>
            <div className="font-display font-semibold text-sm mb-0.5" style={{ color: 'var(--purple-dark)' }}>
              Week {MOCK_ROADMAP.weeks.findIndex(w => !w.tasks.every(t => completedTasks.has(t.id))) + 1} of 12 · Python for Data Engineering
            </div>
            <div className="text-xs" style={{ color: 'var(--purple)' }}>You're on a {MOCK_ROADMAP.streakDays}-day streak 🔥 Keep going!</div>
          </div>
          <div className="text-right">
            <div className="font-display font-extrabold text-2xl" style={{ color: 'var(--purple)' }}>{MOCK_ROADMAP.progressPct}%</div>
            <div className="text-xs" style={{ color: 'var(--purple)' }}>overall complete</div>
          </div>
        </div>

        {/* Free weeks */}
        {freeWeeks.map((week) => (
          <div key={week.id} className="mb-6">
            <div className="font-display font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text3)' }}>
              Week {week.weekNumber} — {week.theme}
            </div>
            {week.tasks.map(renderTask)}
          </div>
        ))}

        {/* Locked weeks (Pro gate) */}
        <ProGate featureName="Weeks 3–12 (72 personalized learning tasks)">
          <div>
            {lockedWeeks.map((week) => (
              <div key={week.id} className="mb-6">
                <div className="font-display font-bold text-sm uppercase tracking-wider mb-3" style={{ color: 'var(--text3)' }}>
                  Week {week.weekNumber} — {week.theme}
                </div>
                <div className="rounded-lg mb-2" style={{ background: 'var(--surface2)', height: 48 }} />
                <div className="rounded-lg mb-2" style={{ background: 'var(--surface2)', height: 48 }} />
              </div>
            ))}
          </div>
        </ProGate>
      </div>
    </div>
  );
}
