'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Check, ChevronDown, Youtube, BookOpen, Briefcase, ExternalLink, Bot, Bookmark, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface Resource {
  type: 'youtube' | 'article' | 'project' | 'doc' | 'practice';
  title: string;
  meta: string;
  url: string;
  isRecommended?: boolean;
}

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    skill: string;
    isCompleted: boolean;
    isCurrent?: boolean;
    description: string;
    resources: Resource[];
  };
  onToggleComplete: (id: string) => void;
}

export function TaskCard({ task, onToggleComplete }: TaskCardProps) {
  const [isOpen, setIsOpen] = useState(task.isCurrent);

  return (
    <div className={cn(
      'task-card group',
      task.isCompleted && 'completed',
      task.isCurrent && 'current'
    )}>
      <div 
        className="task-top flex items-start gap-4 p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div 
          onClick={(e) => {
            e.stopPropagation();
            onToggleComplete(task.id);
          }}
          className={cn(
            'task-check w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
            task.isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-slate-200 hover:border-primary',
            task.isCurrent && !task.isCompleted && 'border-primary border-[2.5px]'
          )}
        >
          {task.isCompleted && <Check className="w-4 h-4" />}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={cn(
            'text-base font-semibold font-syne',
            task.isCompleted && 'line-through text-slate-400'
          )}>
            {task.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <Badge variant="default" className="bg-[#F1F0FB] text-[#534AB7] text-[10px] py-0.5 px-2">⏱ {task.duration}</Badge>
            <Badge variant={task.difficulty === 'Beginner' ? 'green' : task.difficulty === 'Intermediate' ? 'amber' : 'red'}>
              {task.difficulty}
            </Badge>
            <Badge variant="default" className="text-[10px] py-0.5 px-2">{task.skill}</Badge>
            {task.isCurrent && !task.isCompleted && (
              <Badge variant="default" className="bg-[#EEEDFE] text-[#534AB7] text-[10px] py-0.5 px-2">📍 Today's task</Badge>
            )}
          </div>
        </div>

        <ChevronDown 
          className={cn(
            'w-5 h-5 text-slate-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )} 
        />
      </div>

      {isOpen && (
        <div className="resources-panel p-4 border-t border-slate-100 bg-white slide-down">
          <p className="res-intro text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border-l-4 border-primary/20">
            {task.description}
          </p>

          <div className="space-y-6">
            {/* Resources grouped by type or just mixed? enhanced HTML has groups */}
            <div className="res-section">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Youtube className="w-3 h-3 text-red-500" /> Curated Learning
              </h5>
              <div className="flex flex-col gap-2">
                {task.resources.map((res, i) => (
                  <a 
                    key={i} 
                    href={res.url} 
                    target="_blank" 
                    className="res-item group/item flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all font-dm-sans"
                  >
                    <div className={cn(
                      'w-10 h-8 rounded-lg flex items-center justify-center shrink-0 text-white',
                      res.type === 'youtube' && 'bg-red-500',
                      res.type === 'article' && 'bg-blue-600',
                      res.type === 'doc' && 'bg-slate-700',
                      res.type === 'project' && 'bg-teal-600'
                    )}>
                      {res.type === 'youtube' && <Youtube className="w-5 h-5" />}
                      {res.type === 'article' && <BookOpen className="w-5 h-5" />}
                      {res.type === 'doc' && <FileText className="w-5 h-5" />}
                      {res.type === 'project' && <Briefcase className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold truncate group-hover/item:text-primary transition-colors">{res.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{res.meta}</div>
                    </div>
                    {res.isRecommended && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-primary/10 text-primary uppercase shrink-0">⭐ Recommended</span>
                    )}
                    <ExternalLink className="w-3 h-3 text-slate-300 group-hover/item:text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="task-actions flex items-center gap-2 pt-4 border-t border-slate-100 flex-wrap">
              <Button 
                variant={task.isCompleted ? 'outline' : 'primary'} 
                size="sm" 
                className="font-syne"
                onClick={() => onToggleComplete(task.id)}
              >
                {task.isCompleted ? '✓ Completed' : '✓ Mark as complete'}
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 font-syne border-slate-200">
                <Bot className="w-4 h-4" /> Ask coach
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 font-syne border-slate-200">
                <Bookmark className="w-4 h-4" /> Bookmark
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
