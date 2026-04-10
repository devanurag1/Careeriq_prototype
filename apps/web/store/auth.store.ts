'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthUser, Plan } from '@careeriq/shared/types';

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  plan: Plan;
  token: string | null;
  setAuth: (user: AuthUser, token: string, plan?: Plan) => void;
  clearAuth: () => void;
  setPlan: (plan: Plan) => void;
}

/**
 * Global authentication state.
 * Persisted to localStorage so sessions survive page refreshes.
 * Components should use the useAuth() hook — not this store directly.
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      plan: 'FREE',
      token: null,

      setAuth: (user, token, plan = 'FREE') =>
        set({ isAuthenticated: true, user, token, plan }),

      clearAuth: () =>
        set({ isAuthenticated: false, user: null, token: null, plan: 'FREE' }),

      setPlan: (plan) => set({ plan }),
    }),
    { name: 'careeriq-auth' }
  )
);
