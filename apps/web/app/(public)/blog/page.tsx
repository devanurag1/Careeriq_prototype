import type { Metadata } from 'next';
import { BlogPage } from '@/components/pages/BlogPage';

export const metadata: Metadata = {
  title: 'Resources & Insights — CareerIQ',
  description: 'Career strategy for the age of AI disruption. Data-backed insights for tech professionals.',
};

export default function Blog() {
  return <BlogPage />;
}
