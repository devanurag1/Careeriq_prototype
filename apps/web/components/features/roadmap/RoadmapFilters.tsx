'use client';

import React from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';

interface RoadmapFiltersProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  onSearch: (query: string) => void;
}

export function RoadmapFilters({ activeTab, onTabChange, onSearch }: RoadmapFiltersProps) {
  const tabs = [
    { id: 'all', label: 'All tasks' },
    { id: 'todo', label: 'To do' },
    { id: 'done', label: 'Completed' },
    { id: 'youtube', label: 'YouTube' },
    { id: 'project', label: 'Projects' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <Tabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={onTabChange} 
        className="flex-1"
      />
      <div className="relative w-full md:w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <Input 
          placeholder="Search tasks..." 
          className="pl-10 h-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
