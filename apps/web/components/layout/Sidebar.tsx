'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { useUIStore } from '@/store/ui.store';
import { MOCK_USER } from '@/lib/mockData';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  href: string;
  isPro: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', icon: '⊞', label: 'Home', href: ROUTES.DASHBOARD, isPro: false },
  { id: 'skills', icon: '◎', label: 'Skill gaps', href: ROUTES.SKILLS, isPro: false },
  { id: 'roadmap', icon: '↗', label: 'Roadmap', href: ROUTES.ROADMAP, isPro: false },
  { id: 'coach', icon: '💬', label: 'AI coach', href: ROUTES.COACH, isPro: false },
  { id: 'resume', icon: '📄', label: 'Resume', href: ROUTES.RESUME, isPro: true },
  { id: 'market', icon: '📈', label: 'Job market', href: ROUTES.MARKET, isPro: true },
  { id: 'profile', icon: '◉', label: 'Profile', href: ROUTES.PROFILE, isPro: false },
];

/** Sidebar navigation for the authenticated app shell */
export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const openUpgradeModal = useUIStore((s) => s.openUpgradeModal);

  // Split items into main and pro sections
  const mainItems = NAV_ITEMS.filter((item) => !item.isPro && item.id !== 'profile');
  const proItems = NAV_ITEMS.filter((item) => item.isPro);
  const profileItem = NAV_ITEMS.find((item) => item.id === 'profile')!;

  const renderNavItem = (item: NavItem) => {
    const isActive = pathname === item.href;
    return (
      <div
        key={item.id}
        className={`flex items-center gap-2.5 px-3.5 py-2 mx-2 rounded-lg text-sm cursor-pointer transition-all duration-150 ${
          isActive ? 'font-medium' : ''
        }`}
        style={{
          background: isActive ? 'var(--purple-light)' : 'transparent',
          color: isActive ? 'var(--purple-dark)' : 'var(--text2)',
        }}
        onClick={() => router.push(item.href)}
      >
        <span style={{ width: 18, textAlign: 'center', fontSize: 15 }}>{item.icon}</span>
        {item.label}
        {item.isPro && (
          <span className="ml-auto text-xs" style={{ color: 'var(--text3)' }}>
            🔒
          </span>
        )}
      </div>
    );
  };

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div
        className="px-5 py-4 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <span
          className="font-display font-extrabold text-lg cursor-pointer block"
          style={{ color: 'var(--purple)', letterSpacing: '-0.5px' }}
          onClick={() => router.push(ROUTES.HOME)}
        >
          CareerIQ
        </span>
        <span className="text-xs block mt-0.5" style={{ color: 'var(--text3)' }}>
          Free plan ·{' '}
          <span
            className="cursor-pointer"
            style={{ color: 'var(--purple)' }}
            onClick={openUpgradeModal}
          >
            Upgrade →
          </span>
        </span>
      </div>

      {/* Main nav */}
      <div className="py-2">
        {mainItems.map(renderNavItem)}

        {/* Pro section divider */}
        <div className="h-px mx-3 my-2" style={{ background: 'var(--border)' }} />
        <div
          className="px-3 pb-1 text-xs font-bold uppercase tracking-widest font-display"
          style={{ color: 'var(--text3)' }}
        >
          Pro features
        </div>
        {proItems.map(renderNavItem)}

        {/* Profile divider */}
        <div className="h-px mx-3 my-2" style={{ background: 'var(--border)' }} />
        {renderNavItem(profileItem)}
      </div>

      {/* User row at bottom */}
      <div
        className="mt-auto p-3 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div
          className="flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-colors duration-150"
          style={{}}
          onClick={() => router.push(ROUTES.PROFILE)}
        >
          <div className="avatar">
            <span>{MOCK_USER.initials}</span>
          </div>
          <div>
            <div className="text-xs font-medium" style={{ color: 'var(--text)' }}>
              {MOCK_USER.name}
            </div>
            <div className="text-xs" style={{ color: 'var(--text3)' }}>
              {MOCK_USER.email}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
