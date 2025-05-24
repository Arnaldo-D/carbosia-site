'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export default function WalletButton() {
  const { address, isConnected } = useAccount();

  // ottieni il connettore injected (MetaMask, Brave, ecc.)
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark"
      >
        {address.slice(0, 6)}…{address.slice(-4)}
      </button>
    );

  const metamask = connectors.find(c => c.id === injected().id);

  return (
    <button
      onClick={() => metamask && connect({ connector: metamask })}
      disabled={!metamask || isPending}
      className="rounded-lg border border-brand px-4 py-2 text-brand hover:bg-brand/10 disabled:opacity-50"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
