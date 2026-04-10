import type { Metadata } from 'next';
import './globals.css';
import { UpgradeModal } from '@/components/shared/UpgradeModal';

export const metadata: Metadata = {
  title: 'CareerIQ — AI Career Co-Pilot',
  description:
    'The AI career co-pilot that tells you exactly what skills to learn, what to ignore, and how to stay irreplaceable in an AI-first world.',
  keywords: 'career guidance, AI career, skill gap, career roadmap, job market India',
  openGraph: {
    title: 'CareerIQ — AI Career Co-Pilot',
    description: 'Stop guessing. Start growing with AI.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <UpgradeModal />
      </body>
    </html>
  );
}
