'use client';

import { useContractRead } from 'wagmi';
import { formatUnits } from 'viem';
import { wagmiConfig } from '@/lib/wagmi';
import { polygonAmoyAbi } from '@/lib/abi/PolygonAmoyToken'; //  <-- se non hai l’ABI, commenta le 3 righe “abi” e “functionName”!

export default function TokenBalance() {
  const { data, isLoading } = useContractRead({
    config: wagmiConfig,
    abi: polygonAmoyAbi,
    address: '0xYourTokenAddress',
    functionName: 'balanceOf',
    args: ['0xYourWalletAddress'],
  });

  if (isLoading) return <span className="text-xs text-gray-500">Loading…</span>;
  const balance = data ? formatUnits(data as bigint, 18) : '0';
  return <span className="text-sm font-mono">{balance} ITCO₂</span>;
}
