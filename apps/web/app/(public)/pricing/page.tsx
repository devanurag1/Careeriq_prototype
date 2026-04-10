import type { Metadata } from 'next';
import { PricingPage } from '@/components/pages/PricingPage';

export const metadata: Metadata = {
  title: 'Pricing — CareerIQ',
  description: 'Simple, honest pricing. Start free. Upgrade when CareerIQ has proven its value.',
};

export default function Pricing() {
  return <PricingPage />;
}
