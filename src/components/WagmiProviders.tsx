'use client';

import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from '@/lib/wagmi';
import type { ReactNode } from 'react';

export default function WagmiProviders({ children }: { children: ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
