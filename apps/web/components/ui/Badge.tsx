import * as React from 'react';
import { cn } from '@/lib/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'red' | 'amber' | 'green' | 'purple' | 'teal';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: '',
      red: 'tag-red',
      amber: 'tag-amber',
      green: 'tag-green',
      purple: 'tag-purple',
      teal: 'tag-teal',
    };

    return (
      <div
        ref={ref}
        className={cn('tag', variants[variant], className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
