'use client';

import { WagmiConfig } from 'wagmi';              // ✅
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { wagmiConfig, chains } from '@/lib/wagmi';
import Layout from '@/components/Layout';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Layout>{children}</Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
