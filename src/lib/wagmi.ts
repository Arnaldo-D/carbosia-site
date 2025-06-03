// src/lib/wagmi.ts
'use client';

import { http } from 'viem';
import { createConfig } from 'wagmi';
import { defineChain } from 'wagmi/chains';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';

const polygonAmoy = defineChain({
  id: 80002,
  name: 'Polygon Amoy',
  network: 'polygon-amoy',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-amoy.polygon.technology'] },
    public: { http: ['https://rpc-amoy.polygon.technology'] },
  },
  blockExplorers: {
    default: {
      name: 'AmoyScan',
      url: 'https://www.oklink.com/amoy',
    },
  },
  testnet: true,
});

const { wallets, connectors } = getDefaultWallets({
  appName: 'Carbosia',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // ← se non ne hai uno, crea gratis su WalletConnect Cloud
  chains: [polygonAmoy],
});

export const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  connectors,
  transports: {
    [polygonAmoy.id]: http(),
  },
  ssr: true,          // indispensabile con Next 15
});
