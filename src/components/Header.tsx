'use client';

import Link from 'next/link';
import WalletButton from './WalletButton';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto flex max-w-5xl items-center gap-6 p-4">
        {/* ① logo */}
        <Link href="/" className="text-xl font-bold text-brand">
          Carbosia
        </Link>

        {/* ② menu – prende solo lo spazio che serve */}
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

        {/* ③ wallet – spinto a destra con ml-auto */}
        <div className="ml-auto">
          <WalletButton />
        </div>
      </div>
    </header>
  );
}
