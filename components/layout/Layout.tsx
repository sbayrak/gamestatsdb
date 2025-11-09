import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

export default function Layout({ className, children }: LayoutProps) {
  return (
    <div className={cn('bg-transparent relative max-w-5xl mx-auto', className)}>
      {children}
    </div>
  );
}
