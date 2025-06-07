'use client';

import Link from 'next/link';
import WalletButton from './WalletButton';
import TokenBalance from './TokenBalance';

/**
 * Header con saldo ITCO₂
 * • Logo   • Menu   • WalletButton + Balance
 */
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-brand">
          Carbosia
        </Link>

        {/* Menu */}
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </nav>

        {/* Wallet + Saldo */}
        <div className="flex items-center gap-3">
          <WalletButton />
          <TokenBalance />
        </div>
      </div>
    </header>
  );
}
