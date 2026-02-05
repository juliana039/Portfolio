import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';  // ADICIONAR

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juliana Magalhães | Desenvolvedora iOS",
  description: "Portfólio de Juliana Magalhães - Desenvolvedora iOS com 5 apps publicados na App Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />  {/* ADICIONAR */}
      </body>
    </html>
  );
}