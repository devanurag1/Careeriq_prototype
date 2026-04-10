'use client';

import { create } from 'zustand';

export interface OnboardingAnswers {
  currentRole: string;
  targetRole: string;
  experienceYears: string;
  fears: string[];
  skills: string[];
}

interface OnboardingState {
  currentStep: number;
  totalSteps: number;
  answers: OnboardingAnswers;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setAnswer: <K extends keyof OnboardingAnswers>(
    key: K,
    value: OnboardingAnswers[K]
  ) => void;
  reset: () => void;
}

const INITIAL_ANSWERS: OnboardingAnswers = {
  currentRole: '',
  targetRole: '',
  experienceYears: '',
  fears: [],
  skills: [],
};

/**
 * Onboarding wizard state.
 * Tracks the current step and all collected answers.
 * Reset after onboarding completes and user reaches the dashboard.
 */
export const useOnboardingStore = create<OnboardingState>()((set) => ({
  currentStep: 1,
  totalSteps: 5,
  answers: INITIAL_ANSWERS,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  setAnswer: (key, value) =>
    set((state) => ({
      answers: { ...state.answers, [key]: value },
    })),

  reset: () => set({ currentStep: 1, answers: INITIAL_ANSWERS }),
}));
