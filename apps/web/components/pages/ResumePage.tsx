'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_RESUME } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';

export function ResumePage() {
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = () => setUploaded(true);

  return (
    <div>
      <div className="flex items-center justify-between px-8 pt-6 pb-0">
        <h1 className="font-display font-bold" style={{ fontSize: 26, letterSpacing: '-0.5px' }}>Resume optimizer</h1>
        <span className="tag tag-green">Pro feature</span>
      </div>

      <div className="px-8 py-5">
        {/* Scores */}
        <div className="grid gap-3.5 mb-6" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 28, color: 'var(--red)' }}>{MOCK_RESUME.matchScore}%</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Current match score</div>
          </div>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 28, color: 'var(--green)' }}>{MOCK_RESUME.optimizedScore}%</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Optimized score (AI)</div>
          </div>
          <div className="metric-card">
            <div className="font-display font-extrabold leading-none mb-1" style={{ fontSize: 28, color: 'var(--amber)' }}>{MOCK_RESUME.issues.filter(i => i.severity === 'critical').length}</div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>Critical issues found</div>
          </div>
        </div>

        {/* Target role row */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm" style={{ color: 'var(--text2)' }}>Target role:</span>
          <span className="font-display font-semibold text-sm">{MOCK_RESUME.targetRole}</span>
          <button className="btn btn-ghost btn-sm">Change target</button>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Left col */}
          <div>
            {/* Upload */}
            <div className="card mb-4">
              <h4 className="font-display font-bold text-sm mb-3">Upload your resume</h4>
              {!uploaded ? (
                <div className="upload-zone" onClick={handleUpload}>
                  <div className="text-4xl mb-3">📄</div>
                  <h4 className="font-display font-semibold text-base mb-1.5">Drop PDF or DOCX here</h4>
                  <p className="text-sm" style={{ color: 'var(--text3)' }}>or click to browse files</p>
                </div>
              ) : (
                <div className="upload-zone" style={{ borderColor: 'var(--teal)', background: 'var(--teal-light)', cursor: 'default' }}>
                  <div className="text-2xl mb-2" style={{ color: 'var(--teal)' }}>✓</div>
                  <h4 className="font-display font-semibold text-base mb-1" style={{ color: 'var(--teal)' }}>resume_arjun_2025.pdf uploaded</h4>
                  <p className="text-sm" style={{ color: 'var(--text3)' }}>AI analysis complete — {MOCK_RESUME.issues.length} issues found</p>
                </div>
              )}
            </div>

            {/* Issues */}
            <div className="card">
              <h4 className="font-display font-bold text-sm mb-3">Issues detected</h4>
              {MOCK_RESUME.issues.map((issue, i) => (
                <div key={i} className="flex items-start gap-2 py-2 border-b text-sm" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}>
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: issue.severity === 'critical' ? 'var(--red)' : 'var(--amber)' }}
                  />
                  {issue.description}
                </div>
              ))}
              <button className="btn btn-ghost btn-sm mt-2.5" onClick={() => router.push(ROUTES.COACH)}>
                Ask coach about these gaps
              </button>
            </div>
          </div>

          {/* Right col — AI rewrite */}
          <div className="card">
            <div className="flex justify-between items-center mb-3.5">
              <h4 className="font-display font-bold text-sm">AI-optimized version</h4>
              <span className="tag tag-green" style={{ fontSize: 11 }}>+45% match score</span>
            </div>
            <div className="rounded-lg p-4 text-xs leading-7 min-h-60" style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>
              <div className="font-semibold mb-2" style={{ color: 'var(--text)' }}>ARJUN KUMAR — Software Engineer</div>
              <span style={{ color: 'var(--green)', background: 'var(--green-light)', padding: '2px 6px', borderRadius: 4 }}>
                + Experienced software engineer specializing in data-intensive backend systems with 3+ years building high-throughput microservices.
              </span>
              <br /><br />
              <span style={{ color: 'var(--red)', textDecoration: 'line-through' }}>Software engineer with experience in Java and various technologies...</span>
              <br /><br />
              <strong>Skills:</strong> Java,{' '}
              <span style={{ color: 'var(--green)', background: 'var(--green-light)', padding: '1px 5px', borderRadius: 4 }}>+ Python</span>,
              SQL,{' '}
              <span style={{ color: 'var(--green)', background: 'var(--green-light)', padding: '1px 5px', borderRadius: 4 }}>+ AWS</span>,
              REST APIs,{' '}
              <span style={{ color: 'var(--green)', background: 'var(--green-light)', padding: '1px 5px', borderRadius: 4 }}>+ Microservices</span>
              <br /><br />
              <strong>Experience:</strong><br />
              <span style={{ color: 'var(--green)', background: 'var(--green-light)', padding: '1px 5px', borderRadius: 4 }}>
                + Reduced API latency by 40% through query optimization
              </span>
              <br />
              <span style={{ color: 'var(--red)', textDecoration: 'line-through' }}>Worked on improving API performance</span>
            </div>
            <button className="btn btn-primary w-full justify-center mt-3.5">
              Download optimized resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
