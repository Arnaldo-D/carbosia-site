// src/lib/wagmi.ts
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai }                 from 'wagmi/chains';
import { publicProvider }                from 'wagmi/providers/public';

import {
  connectorsForWallets,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';

/* ---------- chains & provider ---------- */
export const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
);

/* ---------- connectors ---------- */
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID as string;

const { wallets } = getDefaultWallets({
  appName: 'Carbosia',
  projectId,
  chains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors:  connectorsForWallets([...wallets]),
  publicClient,
});
