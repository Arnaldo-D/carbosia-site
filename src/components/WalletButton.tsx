'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

/**
 * WalletButton
 * -------------
 * • Connect → apre MetaMask / Coinbase (injected)
 * • Dopo la connessione mostra l’indirizzo
 * • Clic sull’indirizzo → disconnect
 * • `flex-shrink-0` impedisce che il bottone sparisca nell’Header
 */
export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  /* ① Connesso e address pronto */
  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="inline-flex flex-shrink-0 items-center rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark"
      >
        {address.slice(0, 6)}…{address.slice(-4)}
      </button>
    );
  }

  /* ② Connesso ma address non ancora ricevuto */
  if (isConnected && !address) {
    return (
      <button
        disabled
        className="inline-flex flex-shrink-0 items-center rounded-lg border border-brand px-4 py-2 text-brand/60"
      >
        Loading…
      </button>
    );
  }

  /* ③ Non connesso */
  return (
    <button
      onClick={() => connect({ connector: injected() })}
      disabled={isPending}
      className="inline-flex flex-shrink-0 items-center rounded-lg border border-brand px-4 py-2 text-brand hover:bg-brand/10 disabled:opacity-50"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
