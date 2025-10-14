import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

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
    <html lang='en'>
      <body className='antialiased'>
        <div className='toolbar'>{children}</div>
      </body>
    </html>
  );
}
