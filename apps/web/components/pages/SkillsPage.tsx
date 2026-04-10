'use client';

import { useRouter } from 'next/navigation';
import { MOCK_DIAGNOSTIC } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';
import { useUIStore } from '@/store/ui.store';
import { severityToTag, severityToLabel, severityToColor } from '@/lib/formatters';
import { ProGate } from '@/components/shared/ProGate';

export function SkillsPage() {
  const router = useRouter();
  const openUpgradeModal = useUIStore((s) => s.openUpgradeModal);

  const freeGaps = MOCK_DIAGNOSTIC.gaps.slice(0, 3);
  const lockedGaps = MOCK_DIAGNOSTIC.gaps.slice(3);

  return (
    <div>
      <div className="flex items-center justify-between px-8 pt-6 pb-0">
        <h1 className="font-display font-bold" style={{ fontSize: 26, letterSpacing: '-0.5px' }}>Skill gap radar</h1>
        <button className="btn btn-primary btn-sm" onClick={() => router.push(ROUTES.ROADMAP)}>Add all to roadmap</button>
      </div>

      <div className="px-8 py-5">
        {/* Filters */}
        <div className="flex gap-2.5 mb-5 flex-wrap items-center">
          <select className="form-input" style={{ width: 'auto', padding: '8px 14px' }}>
            <option>Target role: Senior SDE</option>
            <option>Product Manager</option>
            <option>Data Scientist</option>
          </select>
          <span className="tag tag-red" style={{ padding: '8px 14px', fontSize: 13 }}>5 critical gaps</span>
          <span className="tag tag-amber" style={{ padding: '8px 14px', fontSize: 13 }}>3 medium gaps</span>
          <span className="tag tag-green" style={{ padding: '8px 14px', fontSize: 13 }}>8 strengths</span>
        </div>

        {/* Free skill rows */}
        <div className="flex flex-col gap-3.5">
          {freeGaps.map((gap) => (
            <div key={gap.skillId} className="skill-row">
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-display font-semibold text-base">{gap.skillName}</span>
                <span className={`tag ${severityToTag(gap.severity)}`}>{severityToLabel(gap.severity)}</span>
              </div>
              <div className="grid gap-2.5" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <div className="text-xs mb-1" style={{ color: 'var(--text3)' }}>Your level</div>
                  <div className="gap-track">
                    <div className="gap-fill" style={{ width: `${gap.userLevel * 10}%`, background: severityToColor(gap.severity) }} />
                  </div>
                </div>
                <div>
                  <div className="text-xs mb-1" style={{ color: 'var(--text3)' }}>Market demand</div>
                  <div className="gap-track">
                    <div className="gap-fill" style={{ width: `${gap.marketDemand}%`, background: 'var(--teal)' }} />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-2.5">
                <button className="btn btn-primary btn-sm" onClick={() => router.push(ROUTES.ROADMAP)}>Add to roadmap</button>
                <button className="btn btn-ghost btn-sm" onClick={() => router.push(ROUTES.COACH)}>Ask coach</button>
              </div>
            </div>
          ))}

          {/* Locked rows */}
          <ProGate featureName="full skill gap radar with all gaps and market demand scores">
            <div className="flex flex-col gap-3.5">
              {lockedGaps.map((gap) => (
                <div key={gap.skillId} className="skill-row" style={{ opacity: 0.5 }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-display font-semibold text-base">{gap.skillName}</span>
                    <span className="tag">Medium gap</span>
                  </div>
                  <div className="gap-track">
                    <div className="gap-fill" style={{ width: '50%', background: 'var(--border)' }} />
                  </div>
                </div>
              ))}
            </div>
          </ProGate>
        </div>
      </div>
    </div>
  );
}
