import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-white">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-4xl px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
