// src/app/layout.tsx
import { ReactNode } from "react";
import Layout from "@/components/Layout";   // 👈 path assoluto consigliato

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/*  AVVOLGI children nel wrapper globale  */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
