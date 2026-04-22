import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import GTMManager from "@/components/GTMManager";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buffet & Locação | Eventos com Elegância e Praticidade",
  description:
    "Especialistas em buffet para eventos e locação de materiais. Atendimento personalizado, materiais de qualidade e soluções completas para o seu evento.",
  keywords:
    "buffet, locação de materiais, eventos, casamento, aniversário, corporativo",
  icons: {
    icon: "/favicon5.png",
    shortcut: "/favicon5.png",
    apple: "/favicon5.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <GTMManager />
        {children}
        <ScrollToTopButton />
        <CookieBanner />
      </body>
    </html>
  );
}