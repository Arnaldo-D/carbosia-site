'use client';

import { useAccount, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';

/* ABI minimale ERC-20: balanceOf + decimals */
const erc20Abi = [
  {
    constant: true,
    name: 'balanceOf',
    inputs: [{ name: 'owner', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    name: 'decimals',
    inputs: [],
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

/** Mostra il saldo ITCO₂ quando il wallet è connesso */
export default function TokenBalance() {
  const { address, isConnected } = useAccount();

  /* esci se non connesso */
  if (!isConnected || !address) return null;

  /* legge balance e decimals dal contratto */
  const { data: balanceRaw } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ITCO2 as `0x${string}`,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address],
  });

  const { data: decimalsRaw } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ITCO2 as `0x${string}`,
    abi: erc20Abi,
    functionName: 'decimals',
  });

  /* se i dati non sono ancora arrivati */
  if (balanceRaw === undefined || decimalsRaw === undefined) {
    return (
      <span className="inline-block rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-500">
        saldo…
      </span>
    );
  }

  /* formatta il saldo */
  const decimals = Number(decimalsRaw);
  const balance = Number(formatUnits(balanceRaw, decimals)).toLocaleString(
    undefined,
    { maximumFractionDigits: 2 }
  );

  return (
    <span className="inline-block rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-700">
      ITCO₂ <em className="font-semibold">{balance}</em>
    </span>
  );
}
