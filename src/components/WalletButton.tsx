'use client';

import React from 'react';

import { useAccount, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function WalletButton() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return isConnected ? (
    <button
      className="rounded-xl bg-brand px-4 py-2 text-white"
      onClick={() => disconnect()}
    >
      Connesso
    </button>
  ) : (
    <ConnectButton showBalance={false} chainStatus="icon" />
  );
}
