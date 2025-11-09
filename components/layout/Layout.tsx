import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

export default function Layout({ className, children }: LayoutProps) {
  return (
    <div
      className={cn(
        'bg-transparent relative h-96 max-w-5xl border-2 border-blue-500 border-solid mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
