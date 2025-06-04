'use client';

import { useAccount, useReadContract } from 'wagmi';
import { polygonMumbai }              from 'wagmi/chains';   // ✅ catena Amoy già inclusa in wagmi v1
import ABI                            from '@/lib/abi/PolygonAmoyToken.json';

const TOKEN_ADDRESS = '0xAbCd...';    // lascia o aggiorna con l’address corretto

export default function TokenBalance() {
  const { address } = useAccount();

  /* balanceOf(address) -> uint256 */
  const { data, isLoading } = useReadContract({
    address: TOKEN_ADDRESS as `0x${string}`,
    abi:      ABI,
    functionName: 'balanceOf',
    args:     address ? [address] : undefined,
    chainId:  polygonMumbai.id,
    query:    { enabled: !!address },
  });

  if (!address)   return null;              // wallet non connesso
  if (isLoading)  return <span>loading…</span>;

  return <span>{Number(data) / 1e18} ITCO₂</span>;
}
