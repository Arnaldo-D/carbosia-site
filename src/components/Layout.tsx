'use client';                                   // <-- deve essere client

import Header from '@/components/Header';       // menu + wallet button
import Footer from '@/components/Footer';       // se hai un footer; altrimenti rimuovi questa riga

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {/* contenuto pagina */}
      <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>

      {/* <Footer /> se esiste */}
    </>
  );
}
