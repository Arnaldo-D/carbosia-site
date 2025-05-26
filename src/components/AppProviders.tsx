'use client';

import WagmiProviders from '@/components/WagmiProviders';
import Layout         from '@/components/Layout';

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProviders>
      <Layout>{children}</Layout>
    </WagmiProviders>
  );
}
