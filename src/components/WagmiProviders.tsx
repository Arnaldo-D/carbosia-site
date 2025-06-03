'use client';

import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiConfig } from '@/lib/wagmi';

export default function WagmiProviders({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* RainbowKit legge le chain direttamente dal config */}
      <RainbowKitProvider>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
