'use client';

import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { createConfig, http } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';

/* ---------- chain usata (test-net ufficiale di Polygon) ---------- */
export const chains = [polygonMumbai];

/* ---------- WalletConnect project-id ---------- */
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID as string;

/* ---------- wallet list & connectors ---------- */
const { wallets } = getDefaultWallets({
  appName: 'Carbosia',
  projectId,
  chains,
});

const connectors = connectorsForWallets([...wallets]);

/* ---------- wagmi config ---------- */
export const wagmiConfig = createConfig({
  chains,
  connectors,
  transports: {
    [polygonMumbai.id]: http(), // RPC pubblica di default
  },
});
