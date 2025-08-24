import type { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

const SectionHeading: FC<SectionHeadingProps> = ({ className, children, ...props }) => {
  return (
    <div className="mb-12 text-center">
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl',
          className
        )}
        {...props}
      >
        {children}
      </h2>
      <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary"></div>
    </div>
  );
};

export default SectionHeading;