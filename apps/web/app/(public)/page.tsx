import type { Metadata } from 'next';
import { LandingPage } from '@/components/pages/LandingPage';

export const metadata: Metadata = {
  title: 'CareerIQ — AI Career Co-Pilot | Stop guessing. Start growing.',
  description:
    'The AI career co-pilot that tells you exactly what skills to learn, what to ignore, and how to stay irreplaceable in an AI-first world. Join 12,000+ professionals.',
};

export default function HomePage() {
  return <LandingPage />;
}
