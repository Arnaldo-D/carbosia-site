'use client';

import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from '@/lib/wagmi';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';

const queryClient = new QueryClient();

export default function WagmiProviders({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  );
}
