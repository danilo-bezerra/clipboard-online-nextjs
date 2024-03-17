import ToastProvider from "@/providers/toast-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

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
      <body
        className={cn(
          "dark  dark:bg-slate-800 h-full flex flex-col",
          inter.className
        )}
      >
        <ToastProvider />
        <Header />
        {children}
        <footer className="p-6 dark:bg-slate-800">
          <p className="text-center text-sm ">
            Criado por{" "}
            <a
              className="hover:underline transition-all"
              href="https://github.com/danilo-bezerra"
              target="_blank"
            >
              <strong>Danilo Bezerra</strong>
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
