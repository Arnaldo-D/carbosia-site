import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-10">{children}</main>
      <Footer />
    </div>
  );
}
