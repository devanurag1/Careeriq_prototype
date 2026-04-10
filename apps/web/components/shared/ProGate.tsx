'use client';

import { useUIStore } from '@/store/ui.store';

interface ProGateProps {
  children: React.ReactNode;
  featureName: string;
}

/**
 * Wraps any UI element with a Pro plan gate.
 * Free users see a blurred overlay with an upgrade CTA.
 * Pro users see the children normally.
 *
 * For the prototype, isPro is always false since we simulate the Free plan.
 */
export function ProGate({ children, featureName }: ProGateProps) {
  const openUpgradeModal = useUIStore((s) => s.openUpgradeModal);

  // In production: const { isPro } = useSubscription()
  const isPro = false;

  if (isPro) return <>{children}</>;

  return (
    <div className="lock-gate">
      <div
        style={{
          filter: 'blur(3px)',
          opacity: 0.5,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {children}
      </div>
      <div className="lock-gate-overlay">
        <div className="text-3xl">🔒</div>
        <h4 className="font-display font-bold text-lg">Pro feature</h4>
        <p className="text-sm text-center max-w-xs" style={{ color: 'var(--text2)' }}>
          Upgrade to access {featureName} and unlock the full potential of CareerIQ.
        </p>
        <button className="btn btn-primary btn-sm" onClick={openUpgradeModal}>
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}
