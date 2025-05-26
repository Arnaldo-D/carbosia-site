// src/components/Providers.tsx
'use client';

import { ReactNode, useState } from 'react';
import { WagmiConfig, createConfig, http } from 'wagmi';
import { metaMask } from '@wagmi/connectors';
import { polygonAmoy } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// --- 1. wagmi config -------------------------------------------------
const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  connectors: [metaMask()],
  transports: { [polygonAmoy.id]: http() },
  ssr: false,          // disattiva auto-hydrate sul server
});

// --- 2. react-query client (memoizzato) ------------------------------
export default function Providers({ children }: { children: ReactNode }) {
  // QueryClient va creato una volta sola in client-side
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiConfig config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiConfig>
  );
}
