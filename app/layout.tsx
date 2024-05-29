import ToastProvider from "@/providers/toast-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clipboard Online",
  description:
    "Transferindo texto entre diferentes dispositivos ficou mais fácil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta
          name="google-site-verification"
          content="Mp_kiEcFDFTxLqM9WIYWc_2Zxouv4XCxq5j-vvVMr_A"
        />
        <meta
          name="description"
          content="Clipboard Online: Compartilhe e acesse textos de forma rápida e segura. Envie texto para a clipboard, válido por 15 minutos, e acesse com um código de 6 dígitos. Criado por Danilo Bezerra."
        />
      </head>
      <body
        className={cn(
          "dark  dark:bg-slate-800 h-full flex flex-col",
          inter.className
        )}
      >
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
