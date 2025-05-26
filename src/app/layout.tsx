import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import AppProviders from '@/components/AppProviders'; // <- wrapper client
import './globals.css';

/*-------- font Google --------*/
const geistSans = Geist({  variable: '--font-geist-sans',  subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carbosia – Tokenising sustainability',
  description: 'MVP per la tokenizzazione di progetti sostenibili su blockchain',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Tutti i componenti client-side sono incapsulati qui */}
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
