'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div className={cn('flex gap-2 flex-wrap', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'ftab',
            activeTab === tab.id && 'active'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
