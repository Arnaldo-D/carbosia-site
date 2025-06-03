/* src/lib/wagmi.ts */
import { http, createConfig }      from 'wagmi';
import { defineChain }             from 'wagmi/chains';
import { getDefaultWallets }       from '@rainbow-me/rainbowkit';
import { createPublicClient }      from 'viem';

/* --------- chain Polygon Amoy (80002) --------- */
export const polygonAmoy = defineChain({
  id:       80_002,
  name:     'Polygon Amoy',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-amoy.polygon.technology'] },
    public:  { http: ['https://rpc-amoy.polygon.technology'] },
  },
  blockExplorers: {
    default: { name: 'AmoyScan', url: 'https://www.oklink.com/amoy' },
  },
});

/* --------- RainbowKit / wagmi config ---------- */
const { wallets, connectors } = getDefaultWallets({
  appName:  'Carbosia',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',   // ← se non l’hai ancora, lascialo così
  chains:    [polygonAmoy],
});

export const wagmiConfig = createConfig({
  connectors,
  chains: [polygonAmoy],
  publicClient: createPublicClient({
    chain: polygonAmoy,
    transport: http(),
  }),
});
