import type { Plan } from '@careeriq/shared/types';

/** Plan hierarchy for comparison */
export const PLAN_HIERARCHY: Record<Plan, number> = {
  FREE: 0,
  PRO: 1,
  PRO_MAX: 2,
};

/** Human-readable plan labels */
export const PLAN_LABELS: Record<Plan, string> = {
  FREE: 'Free',
  PRO: 'Pro',
  PRO_MAX: 'Pro Max',
};

/** Monthly price in INR */
export const PLAN_PRICES: Record<Plan, number> = {
  FREE: 0,
  PRO: 499,
  PRO_MAX: 999,
};

/** Features gated behind Pro plan */
export const PRO_FEATURES = [
  'Full 12-week roadmap',
  'Complete skill gap radar',
  'Resume optimizer + rewrite',
  'Real-time job market intelligence',
  'Unlimited AI coach',
] as const;
