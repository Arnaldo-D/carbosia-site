'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  /* Connesso e indirizzo disponibile */
  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="min-w-fit whitespace-nowrap rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark flex-shrink-0"
      >
        {address.slice(0, 6)}…{address.slice(-4)}
      </button>
    );
  }

  /* Connesso ma address non ancora ricevuto */
  if (isConnected && !address) {
    return (
      <button
        disabled
        className="min-w-fit whitespace-nowrap rounded-lg border border-brand px-4 py-2 text-brand/60 flex-shrink-0"
      >
        Loading…
      </button>
    );
  }

  /* Non connesso */
  return (
    <button
      onClick={() => connect({ connector: injected() })}
      disabled={isPending}
      className="min-w-fit whitespace-nowrap rounded-lg border border-brand px-4 py-2 text-brand hover:bg-brand/10 disabled:opacity-50 flex-shrink-0"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
