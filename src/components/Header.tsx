'use client';

import Link from 'next/link';
import WalletButton from './WalletButton';

/**
 * Header (fixed)
 * --------------
 * • Logo a sinistra
 * • Menu al centro
 * • WalletButton assoluto in alto a destra ⇒ non scompare più
 */
export default function Header() {
  return (
    <header className="bg-white shadow">
      {/* container relativo per posizionare il wallet */}
      <div className="relative mx-auto flex max-w-5xl items-center gap-6 p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-brand">
          Carbosia
        </Link>

        {/* Menu */}
        <nav className="flex gap-4 text-sm">
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

        {/* Wallet in posizione assoluta */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <WalletButton />
        </div>
      </div>
    </header>
  );
}
