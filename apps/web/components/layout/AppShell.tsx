'use client';

import { Sidebar } from './Sidebar';

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * Outer shell for all authenticated pages.
 * Renders the persistent sidebar + scrollable main content area.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto min-w-0" style={{ background: 'var(--bg)' }}>
        {children}
      </main>
    </div>
  );
}
