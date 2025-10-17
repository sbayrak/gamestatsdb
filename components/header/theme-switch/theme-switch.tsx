'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const { setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      className='rounded-full cursor-pointer'
    >
      <Sun
        className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
        data-testid='sun-icon'
      />
      <Moon
        className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0'
        data-testid='moon-icon'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
