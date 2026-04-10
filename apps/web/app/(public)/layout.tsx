import React from 'react';

/** Layout for public marketing pages — no sidebar, just children */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
