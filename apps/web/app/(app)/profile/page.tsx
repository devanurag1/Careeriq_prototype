import type { Metadata } from 'next';
import { ProfilePage } from '@/components/pages/ProfilePage';

export const metadata: Metadata = { title: 'Profile & Settings — CareerIQ' };

export default function Profile() {
  return <ProfilePage />;
}
