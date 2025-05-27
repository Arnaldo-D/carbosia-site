'use client';

import { ReactNode } from 'react';
import WagmiProviders from '@/components/WagmiProviders';
import Layout from '@/components/Layout';

/**
 * Incapsula tutti i provider “client-side” (wagmi, ecc.)
 * e racchiude il contenuto nell’UI di base (Header/Footer).
 */
export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <WagmiProviders>
      <Layout>{children}</Layout>
    </WagmiProviders>
  );
}
