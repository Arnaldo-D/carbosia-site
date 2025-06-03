'use client';

import { WagmiConfig }            from 'wagmi';
import { RainbowKitProvider }     from '@rainbow-me/rainbowkit';
import { wagmiConfig, chains }    from '@/lib/wagmi';

export default function WagmiProviders({
  children,
}: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
