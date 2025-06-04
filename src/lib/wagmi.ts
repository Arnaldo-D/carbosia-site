import { polygonAmoy } from 'wagmi/chains';
import { http } from 'wagmi';

export const chains = [polygonAmoy];

export const wagmiConfig = createConfig({
  chains,
  transports: {
    [polygonAmoy.id]: http('https://rpc-amoy.polygon.technology'),
  },
});
