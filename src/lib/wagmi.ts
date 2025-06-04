// src/lib/wagmi.ts
import { createConfig, http } from "wagmi";
import { polygonAmoy } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(),          // oppure http("https://rpc-amoy.polygon.technology")
  },
  ssr: true,                           // evita mismatch tra server/client
});
