'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig }      from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiConfig, polygonAmoy } from '@/lib/wagmi';
import Layout               from '@/components/Layout';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={[polygonAmoy]}>
        <Layout>{children}</Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
