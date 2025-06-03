'use client';

import { useAccount, useContractRead } from 'wagmi';
import { polygonAmoy } from '@/lib/wagmi';
import ABI from '@/lib/abi/PolygonAmoyToken.json';

const TOKEN_ADDRESS = '0xAbCd...';

export default function TokenBalance() {
  const { address } = useAccount();

  const { data } = useContractRead({
    address: TOKEN_ADDRESS,
    abi: ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    enabled: !!address,
    chainId: polygonAmoy.id,
  });

  if (!address) return null;
  if (!data)    return <span>loading…</span>;

  return <span>{Number(data) / 1e18} ITCO₂</span>;
}
