'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/store/ui.store';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

/** Upgrade modal — shown when a Free user clicks any Pro-locked feature */
export function UpgradeModal() {
  const { isUpgradeModalOpen, closeUpgradeModal } = useUIStore();
  const router = useRouter();

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeUpgradeModal();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeUpgradeModal]);

  if (!isUpgradeModalOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeUpgradeModal();
      }}
    >
      <div className="modal-box">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-colors"
          style={{ background: 'var(--surface2)', color: 'var(--text2)', border: 'none', cursor: 'pointer' }}
          onClick={closeUpgradeModal}
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">⚡</div>
          <h3 className="font-display font-extrabold text-2xl mb-2" style={{ letterSpacing: '-0.5px' }}>
            Upgrade to Pro
          </h3>
          <p className="text-sm" style={{ color: 'var(--text2)' }}>
            Unlock everything you need to take control of your career.
          </p>
        </div>

        {/* Plan card */}
        <div className="pcard featured mb-5">
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 font-display font-bold text-xs text-white px-3 py-1 rounded-full"
            style={{ background: 'var(--purple)', whiteSpace: 'nowrap' }}
          >
            Most popular
          </div>
          <h3 className="font-display font-bold text-lg mb-1">Pro plan</h3>
          <div className="font-display font-extrabold text-4xl mb-4" style={{ letterSpacing: '-1px' }}>
            ₹499 <span className="text-sm font-normal" style={{ color: 'var(--text3)' }}>/ month</span>
          </div>
          <ul className="list-none mb-6 flex flex-col gap-1">
            {[
              'Unlimited AI coach conversations',
              'Full 12-week personalized roadmap',
              'Complete skill gap radar',
              'Resume optimizer + rewrite',
              'Real-time job market intelligence',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm py-1 border-b" style={{ color: 'var(--text2)', borderColor: 'var(--border)' }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary w-full justify-center py-3"
            onClick={() => {
              closeUpgradeModal();
              router.push(ROUTES.PRICING);
            }}
          >
            Start Pro — ₹499/month
          </button>
        </div>

        <p className="text-center text-xs" style={{ color: 'var(--text3)' }}>
          Cancel anytime. No lock-in. 7-day money-back guarantee.
        </p>
      </div>
    </div>
  );
}
