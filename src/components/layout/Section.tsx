import { cn } from '@/lib/utils';
import React, { type ElementType, type HTMLAttributes, type ReactNode } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  removePadding?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ as: Comp = 'section', children, className, removePadding = false, ...props }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn(
          'py-16 lg:py-24',
          !removePadding && 'container',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Section.displayName = 'Section';


export function SectionLabel({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn("font-mono text-[11px] font-medium text-brand-amber uppercase tracking-[0.25em] mb-3 block", className)}
            {...props}
        >
            {children}
        </span>
    )
}
