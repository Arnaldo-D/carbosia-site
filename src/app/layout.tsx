"use client";

import { ReactNode } from "react";
import Layout from "@/components/Layout";
import AppProviders from "@/components/AppProviders";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* wrapper globale con Header + Footer */}
        <AppProviders>
          <Layout>{children}</Layout>
        </AppProviders>
      </body>
    </html>
  );
}
