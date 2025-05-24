'use client';

import Link from 'next/link';
import WalletButton from './WalletButton';

/**
 * Header
 * -------
 * • Logo a sinistra
 * • Menu al centro
 * • Pulsante wallet sempre visibile a destra
 */
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-brand">
          Carbosia
        </Link>

        {/* Menu principale */}
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

        {/* Wallet */}
        <WalletButton />
      </div>
    </header>
  );
}
