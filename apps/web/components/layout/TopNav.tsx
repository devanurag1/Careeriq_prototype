'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

/** Top navigation bar for public (marketing) pages */
export function TopNav() {
  const router = useRouter();

  return (
    <nav className="topnav">
      <div
        className="font-display font-extrabold text-xl cursor-pointer"
        style={{ color: 'var(--purple)', letterSpacing: '-0.5px' }}
        onClick={() => router.push(ROUTES.HOME)}
      >
        CareerIQ
      </div>

      <div className="hidden md:flex gap-8">
        <Link
          href={ROUTES.HOME}
          className="text-sm no-underline transition-colors duration-150"
          style={{ color: 'var(--text2)' }}
        >
          Features
        </Link>
        <Link
          href={ROUTES.PRICING}
          className="text-sm no-underline transition-colors duration-150"
          style={{ color: 'var(--text2)' }}
        >
          Pricing
        </Link>
        <Link
          href={ROUTES.BLOG}
          className="text-sm no-underline transition-colors duration-150"
          style={{ color: 'var(--text2)' }}
        >
          Blog
        </Link>
        <span className="text-sm cursor-pointer" style={{ color: 'var(--text2)' }}>
          For teams
        </span>
      </div>

      <div className="flex gap-2.5 items-center">
        <button className="btn btn-ghost btn-sm" onClick={() => router.push(ROUTES.AUTH)}>
          Log in
        </button>
        <button className="btn btn-primary btn-sm" onClick={() => router.push(ROUTES.AUTH)}>
          Get started free
        </button>
      </div>
    </nav>
  );
}
