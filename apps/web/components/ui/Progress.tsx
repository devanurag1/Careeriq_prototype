import * as React from 'react';
import { cn } from '@/lib/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('prog-track w-full', className)}
      {...props}
    >
      <div
        className="prog-fill h-full bg-primary transition-all duration-500"
        style={{ width: `${value || 0}%` }}
      />
    </div>
  )
);
Progress.displayName = 'Progress';

export { Progress };
