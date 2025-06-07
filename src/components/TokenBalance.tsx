// src/components/TokenBalance.tsx
'use client';

import { useAccount, useContractRead } from 'wagmi';
import { polygonAmoy }               from 'wagmi/chains';
import ABI                              from '@/lib/abi/PolygonAmoyToken.json'; // ok anche se il nome del file resta

const TOKEN_ADDRESS = '0xAbCd...'; // <-- metti l’indirizzo corretto

export default function TokenBalance() {
  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address:      TOKEN_ADDRESS,
    abi:          ABI,
    functionName: 'balanceOf',
    args:         address ? [address] : undefined,
    enabled:      !!address,
    chainId: polygonAmoy.id,
  });

  if (!address)     return null;
  if (isLoading)    return <span>loading…</span>;
  if (!data)        return <span>0 ITCO₂</span>;

  return <span>{Number(data) / 1e18} ITCO₂</span>;
}
