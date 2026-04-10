'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOCK_USER, MOCK_DIAGNOSTIC } from '@/lib/mockData';
import { ROUTES } from '@/constants/routes';
import { useAuthStore } from '@/store/auth.store';
import { useUIStore } from '@/store/ui.store';

export function ProfilePage() {
  const router = useRouter();
  const clearAuth = useAuthStore((s) => s.clearAuth);
  const openUpgradeModal = useUIStore((s) => s.openUpgradeModal);

  // Toggle states for notification settings
  const [toggles, setToggles] = useState({ dailyReminder: true, weeklyReport: true, marketAlerts: false });
  const flipToggle = (key: keyof typeof toggles) =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleLogout = () => {
    clearAuth();
    router.push(ROUTES.HOME);
  };

  return (
    <div>
      <div className="px-8 pt-6 pb-0">
        <h1 className="font-display font-bold" style={{ fontSize: 26, letterSpacing: '-0.5px' }}>Profile &amp; settings</h1>
      </div>

      <div className="px-8 py-5">
        <div className="grid gap-6" style={{ gridTemplateColumns: '1fr 2fr' }}>
          {/* Left sidebar card */}
          <div>
            <div className="card text-center mb-4">
              <div
                className="avatar avatar-lg mx-auto mb-3.5"
                style={{ width: 56, height: 56, fontSize: 18, margin: '0 auto 14px' }}
              >
                {MOCK_USER.initials}
              </div>
              <div className="font-display font-bold text-base mb-0.5">{MOCK_USER.name}</div>
              <div className="text-xs mb-3.5" style={{ color: 'var(--text3)' }}>{MOCK_USER.email}</div>
              <span className="tag tag-purple mb-3.5 inline-block">Free plan</span>
              <button className="btn btn-primary w-full justify-center mb-2" onClick={openUpgradeModal}>
                Upgrade to Pro
              </button>
              <button className="btn btn-ghost btn-sm w-full justify-center">Edit photo</button>
            </div>

            {/* Career stats */}
            <div className="card">
              <div className="font-display font-bold text-sm mb-3">Career stats</div>
              {[
                { label: 'Readiness score', value: `${MOCK_DIAGNOSTIC.readinessScore}/100` },
                { label: 'Day streak', value: `🔥 ${MOCK_USER.streakDays} days` },
                { label: 'Tasks completed', value: `${MOCK_USER.tasksCompleted} / 84` },
                { label: 'Member since', value: MOCK_USER.memberSince },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                  <span style={{ color: 'var(--text2)' }}>{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right settings area */}
          <div>
            {/* Career profile section */}
            <div className="mb-4 rounded-card overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div className="px-5 py-4 border-b font-display font-semibold text-base" style={{ borderColor: 'var(--border)' }}>Career profile</div>
              {[
                { label: 'Current role', sub: 'Software engineer · 3 years experience' },
                { label: 'Target role', sub: 'Senior Software Engineer' },
                { label: 'Industry', sub: 'Tech / Software' },
                { label: 'Skills', sub: 'Java, SQL, REST APIs (+3 more)' },
              ].map(({ label, sub }) => (
                <div key={label} className="settings-row">
                  <div>
                    <div className="font-medium text-sm">{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{sub}</div>
                  </div>
                  <button className="btn btn-ghost btn-sm">Edit</button>
                </div>
              ))}
            </div>

            {/* Notifications section */}
            <div className="mb-4 rounded-card overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div className="px-5 py-4 border-b font-display font-semibold text-base" style={{ borderColor: 'var(--border)' }}>Notifications</div>
              {[
                { key: 'dailyReminder' as const, label: 'Daily task reminder', sub: 'Get reminded at 9am every day' },
                { key: 'weeklyReport' as const, label: 'Weekly progress report', sub: 'Email summary every Monday' },
                { key: 'marketAlerts' as const, label: 'Job market alerts', sub: 'New skills trending in your target role' },
              ].map(({ key, label, sub }) => (
                <div key={key} className="settings-row">
                  <div>
                    <div className="font-medium text-sm">{label}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{sub}</div>
                  </div>
                  <div className={`toggle ${toggles[key] ? 'on' : ''}`} onClick={() => flipToggle(key)} />
                </div>
              ))}
            </div>

            {/* Billing section */}
            <div className="mb-4 rounded-card overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div className="px-5 py-4 border-b font-display font-semibold text-base" style={{ borderColor: 'var(--border)' }}>Billing &amp; plan</div>
              <div className="settings-row">
                <div>
                  <div className="font-medium text-sm">Current plan</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>Free forever</div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={openUpgradeModal}>Upgrade to Pro</button>
              </div>
              <div className="settings-row">
                <div>
                  <div className="font-medium text-sm">Payment method</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>Not added</div>
                </div>
                <button className="btn btn-ghost btn-sm">Add card</button>
              </div>
            </div>

            {/* Account section */}
            <div className="rounded-card overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <div className="px-5 py-4 border-b font-display font-semibold text-base" style={{ borderColor: 'var(--border)' }}>Account</div>
              <div className="settings-row">
                <div>
                  <div className="font-medium text-sm">Email</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>{MOCK_USER.email}</div>
                </div>
                <button className="btn btn-ghost btn-sm">Change</button>
              </div>
              <div className="settings-row">
                <div>
                  <div className="font-medium text-sm">Password</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--text2)' }}>Last changed 3 months ago</div>
                </div>
                <button className="btn btn-ghost btn-sm">Update</button>
              </div>
              <div className="settings-row">
                <button
                  className="btn btn-ghost btn-sm"
                  style={{ color: 'var(--red)', borderColor: 'var(--red)' }}
                  onClick={handleLogout}
                >
                  Log out
                </button>
                <button className="btn btn-ghost btn-sm" style={{ color: 'var(--red)' }}>Delete account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
