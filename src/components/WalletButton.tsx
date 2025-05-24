'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

/**
 * WalletButton
 * -------------
 * • “Connect wallet” → apre MetaMask / Coinbase / Brave (injected)
 * • Dopo la connessione mostra l’indirizzo abbreviato
 * • Clic sull’indirizzo → disconnect
 * • Gestisce lo stato “Loading…” finché wagmi non restituisce l’address
 */
export default function WalletButton() {
  /* stato wagmi */
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  /* ① Connesso e address pronto */
  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark"
      >
        {address.slice(0, 6)}…{address.slice(-4)}
      </button>
    );
  }

  /* ② Connesso ma wagmi non ha ancora fornito l’address */
  if (isConnected && !address) {
    return (
      <button
        disabled
        className="rounded-lg border border-brand px-4 py-2 text-brand/60"
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
      className="rounded-lg border border-brand px-4 py-2 text-brand hover:bg-brand/10 disabled:opacity-50"
    >
      {isPending ? 'Connecting…' : 'Connect wallet'}
    </button>
  );
}
