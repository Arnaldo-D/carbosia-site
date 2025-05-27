import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import AppProviders from '@/components/AppProviders';   // 👈 unico wrapper client

import './globals.css';  // se non c’è già

/* ------- Google fonts ------- */
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carbosia – Tokenising sustainability',
  description: 'MVP per la tokenizzazione di progetti sostenibili su blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Tutto ciò che usa hook client-side sta dentro <AppProviders> */}
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
