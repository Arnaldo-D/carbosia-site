import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans bg-gray-50 flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
