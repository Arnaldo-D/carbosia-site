// src/lib/wagmi.ts
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { polygon, polygonMumbai } from 'wagmi/chains';   // catena prod/test “pronte”

// ---- se vuoi Amoy devi descriverla a mano --------------
export const polygonAmoy = {
  id:        80002,
  name:      'Polygon Amoy',
  network:   'amoy',
  nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
  rpcUrls:   { default: { http: ['https://rpc-amoy.polygon.technology'] } },
  blockExplorers: { default: { name: 'Polygonscan', url: 'https://www.oklink.com/amoy' } },
  testnet:   true,
} as const;
// ---------------------------------------------------------

/* ----- scegli le chain che vuoi supportare ---------- */
const { chains, publicClient } = configureChains(
  [polygonAmoy /* , polygon, polygonMumbai */],
  [
    jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  chains,
});
