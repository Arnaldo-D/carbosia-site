'use client';

import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function WalletButton() {
  const { address, isConnected } = useAccount();

  return isConnected ? (
    <button className="rounded-xl bg-brand px-4 py-2 text-white">
      {address ? `${address.slice(0, 6)}…${address.slice(-4)}` : 'Connesso'}
    </button>
  ) : (
    <ConnectButton showBalance={false} chainStatus="icon" />
  );
}
