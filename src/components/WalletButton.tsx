'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

/**
 * WalletButton – versione con background inline
 */
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  /* ——————————————————— CONNESSO ——————————————————— */
  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        /* 👇 inline style: verde brand */
        style={{ backgroundColor: '#17B47B' }}
        className="inline-flex min-w-fit items-center whitespace-nowrap rounded-lg px-4 py-2 text-white hover:brightness-110"
      >
        {address.slice(0, 6)}…{address.slice(-4)}
      </button>
    );
  }

  /* ——————————— CONNESSO ma address non pronto ——————————— */
  if (isConnected && !address) {
    return (
      <button
        disabled
        className="inline-flex min-w-fit items-center whitespace-nowrap rounded-lg border border-brand px-4 py-2 text-brand/60"
      >
        Loading…
      </button>
    );
  }

  /* —————————————————— NON connesso —————————————————— */
  return (
    <button
      onClick={() => connect({ connector: injected() })}
      disabled={isPending}
      className="inline-flex min-w-fit items-center whitespace-nowrap rounded-lg border border-brand px-4 py-2 text-brand hover:bg-brand/10 disabled:opacity-50"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
