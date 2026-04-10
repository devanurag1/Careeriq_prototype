/** All application route paths — never hardcode routes in components */
export const ROUTES = {
  // Public
  HOME: '/',
  PRICING: '/pricing',
  BLOG: '/blog',
  AUTH: '/auth',

  // Onboarding
  ONBOARDING: '/onboarding',

  // App (authenticated)
  DASHBOARD: '/dashboard',
  SKILLS: '/skills',
  ROADMAP: '/roadmap',
  COACH: '/coach',
  RESUME: '/resume',
  MARKET: '/market',
  PROFILE: '/profile',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
