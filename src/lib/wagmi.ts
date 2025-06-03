'use client';

import { getDefaultWallets, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { createConfig } from 'wagmi';
import { http } from 'viem';             //  ←  viene da *viem*
import { polygonMumbai } from 'wagmi/chains';

/* ---------- chain ---------- */
export const chains = [polygonMumbai];

/* ---------- WalletConnect ---------- */
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID as string;

/* ---------- connectors ---------- */
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
    [polygonMumbai.id]: http(),   // RPC pubblica di default
  },
});
