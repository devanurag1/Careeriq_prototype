import type { Metadata } from 'next';
import { OnboardingPage } from '@/components/pages/OnboardingPage';

export const metadata: Metadata = {
  title: 'Set up your career profile — CareerIQ',
};

export default function Onboarding() {
  return <OnboardingPage />;
}
