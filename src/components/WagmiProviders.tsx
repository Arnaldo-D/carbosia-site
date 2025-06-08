'use client';

import { WagmiConfig }            from 'wagmi';
import { RainbowKitProvider }     from '@rainbow-me/rainbowkit';
import { wagmiConfig }            from '@/lib/wagmi';
import { polygonAmoy }            from 'wagmi/chains';

export default function WagmiProviders({
  children,
}: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={[polygonAmoy]} modalSize="compact">
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
