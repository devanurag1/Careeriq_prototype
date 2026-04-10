import type { Metadata } from 'next';
import { AuthPage } from '@/components/pages/AuthPage';

export const metadata: Metadata = {
  title: 'Sign up or Log in — CareerIQ',
  description: 'Create your free CareerIQ account and get your AI career diagnostic in 10 minutes.',
};

export default function Auth() {
  return <AuthPage />;
}
