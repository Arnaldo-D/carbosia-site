// src/components/AppProviders.tsx
"use client";

import { WagmiProvider } from "wagmi";
import { ReactNode } from "react";
import { wagmiConfig } from "@/lib/wagmi";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}
