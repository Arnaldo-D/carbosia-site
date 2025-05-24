'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark"
      >
        {address.slice(0, 6)}…{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: injected() })}
      disabled={isPending}
      className="rounded-lg border border-brand px-4 py-2 text-brand hover:bg-brand/10 disabled:opacity-50"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
