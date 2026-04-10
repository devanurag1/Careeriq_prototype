'use client';

import { useRouter } from 'next/navigation';
import { MOCK_MARKET } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';
import { formatYoY } from '@/lib/formatters';

export function MarketPage() {
  const router = useRouter();
  const { risingSkills, hiringCompanies, salaryBenchmark, totalOpenings, pythonDemandYoY, javaOnlyRoleChange } = MOCK_MARKET;

  return (
    <div>
      <div className="flex items-center justify-between px-8 pt-6 pb-0">
        <h1 className="font-display font-bold" style={{ fontSize: 26, letterSpacing: '-0.5px' }}>Job market intelligence</h1>
        <span className="tag tag-green">Pro feature</span>
      </div>

      <div className="px-8 py-5">
        {/* Metrics */}
        <div className="grid gap-3.5 mb-6" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 24, color: 'var(--teal)' }}>{formatYoY(pythonDemandYoY)}</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Python demand (YoY)</div>
          </div>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 24, color: 'var(--red)' }}>{formatYoY(javaOnlyRoleChange)}</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Java-only roles</div>
          </div>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 24, color: 'var(--text)' }}>{totalOpenings.toLocaleString()}</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Open SDE roles (India)</div>
          </div>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 24, color: 'var(--green)' }}>{salaryBenchmark.formattedSalary}</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Median Senior SDE salary</div>
          </div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Rising skills heatmap */}
          <div className="card">
            <h4 className="font-display font-bold text-sm mb-4">Rising skills — add to your roadmap</h4>
            <div className="flex flex-col gap-2.5">
              {risingSkills.map((skill) => (
                <div key={skill.skillName} className="flex items-center gap-2.5 text-sm">
                  <div className="flex-shrink-0 font-medium" style={{ width: 130, color: 'var(--text)' }}>{skill.skillName}</div>
                  <div className="flex-1 h-7 rounded relative overflow-hidden" style={{ background: 'var(--surface2)' }}>
                    <div
                      className="hm-bar"
                      style={{ width: `${skill.demandScore}%`, background: skill.color }}
                    >
                      {skill.demandScore}%
                    </div>
                  </div>
                  <button className="btn btn-primary btn-sm flex-shrink-0" onClick={() => router.push(ROUTES.ROADMAP)}>+ Add</button>
                </div>
              ))}
            </div>
          </div>

          {/* Top hiring companies */}
          <div className="card">
            <h4 className="font-display font-bold text-sm mb-4">Top hiring companies — your target role</h4>
            <div className="flex flex-col gap-2.5">
              {hiringCompanies.map((company) => (
                <div key={company.name} className="flex items-center justify-between px-3.5 py-2.5 rounded-lg" style={{ background: 'var(--surface2)' }}>
                  <div>
                    <div className="text-sm font-semibold">{company.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text3)' }}>{company.openingsCount} {company.roleLabel} openings</div>
                  </div>
                  <button className="btn btn-outline btn-sm">View jobs</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
