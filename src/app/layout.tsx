// src/app/layout.tsx
import { ReactNode } from "react";
import Layout from "@/components/Layout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* wrapper globale con Header + Footer */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
