// src/lib/wagmi.ts
import { http, createConfig }                 from 'wagmi';
import { polygonAmoy }                        from 'wagmi/chains';
import { getDefaultWallets, connectorsForWallets }
                                             from '@rainbow-me/rainbowkit';
import { publicProvider }                     from 'wagmi/providers/public';

/* ---------- chains attive ---------- */
export const chains = [polygonAmoy];

/* ---------- WalletConnect project ID ---------- */
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID as string;

/* ---------- connettori RainbowKit ---------- */
const { wallets } = getDefaultWallets({
  appName: 'Carbosia',
  projectId,
  chains,
});

export const connectors = connectorsForWallets([...wallets]);

/* ---------- wagmi config ---------- */
export const wagmiConfig = createConfig({
  connectors,
  chains,
  transports: { [polygonAmoy.id]: http() },
});
