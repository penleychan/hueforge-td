import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'HueForge TD',
  description: 'Community contributed Transmission Values for HueForge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background font-sans antialiased',
          fontSans.variable,
          'dark',
        )}
      >
        <Header title="HueForge TD (Transmission Distance)" />
        {children}

        <Analytics />
      </body>
    </html>
  );
}
