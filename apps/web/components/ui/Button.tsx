'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'btn-primary',
      ghost: 'btn-ghost',
      outline: 'btn-outline',
      danger: 'btn-danger', // We'll add this to global.css if missing
    };

    const sizes = {
      sm: 'btn-sm',
      md: '',
      lg: 'py-3 px-6 text-lg',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn('btn', variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
