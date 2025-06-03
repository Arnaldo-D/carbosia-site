'use client';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig, chains } from '@/lib/wagmi';
import Layout from '@/components/Layout';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Layout>{children}</Layout>
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
