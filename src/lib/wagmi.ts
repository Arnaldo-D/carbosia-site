import { http, createConfig } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { injected } from "wagmi/connectors";

// catena test-net Polygon Amoy + provider Alchemy
export const wagmiConfig = createConfig({
  chains: [polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(
      `https://polygon-amoy.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
    ),
  },
  connectors: [
    injected({               // MetaMask & simili
      shimDisconnect: true,  // ricorda la connessione dopo refresh
    }),
  ],
});
