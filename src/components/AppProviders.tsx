"use client";

import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";          // <-- css globale RainbowKit

// chain che stai usando
import { polygonAmoy } from "wagmi/chains";
import { http } from "wagmi";

// crea la config con i connector RainbowKit già pronti
export const wagmiConfig = getDefaultConfig({
  appName: "Carbosia",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "YOUR_PROJECT_ID",
  chains: [polygonAmoy],
  transports: { [polygonAmoy.id]: http() },
  ssr: true,
});

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider chains={[polygonAmoy]}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
