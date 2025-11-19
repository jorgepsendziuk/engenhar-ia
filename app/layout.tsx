import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engenharia de Software em IA Aplicada",
  description: "Sistema de gerenciamento do curso de Engenharia de Software em IA Aplicada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

