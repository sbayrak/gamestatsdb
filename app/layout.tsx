import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'GamestatsDB | Steam Game Stats Database',
  description:
    'A database of Steam game statistics, including player counts, achievements, and more.',
  applicationName: 'GamestatsDB',
  appleWebApp: {
    title: 'GamestatsDB',
    capable: true,
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
