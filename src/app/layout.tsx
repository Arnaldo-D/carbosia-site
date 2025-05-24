import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ➜ IMPORTA il Layout che contiene Header + Footer
import Layout from "@/components/Layout";

// Font settings (li manteniamo)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbosia – Tokenising sustainability",
  description: "MVP per la tokenizzazione di progetti sostenibili su blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Layout applica Header e Footer a TUTTE le pagine */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
