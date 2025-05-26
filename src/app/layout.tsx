'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import WagmiProviders from '@/components/WagmiProviders';   // context per il wallet
import Layout          from '@/components/Layout';          // Header + Footer
import './globals.css';                                     // Tailwind

/* ------------- font Google ----------------------------- */
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
        <WagmiProviders>
          <Layout>{children}</Layout>
        </WagmiProviders>
      </body>
    </html>
  );
}
