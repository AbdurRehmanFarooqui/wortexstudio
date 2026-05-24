import type { Metadata } from "next";
import { Orbitron, Quantico } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/app/components/SmoothScrolling";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BottomCTA from "./components/BottomCTA";

const OrbitronFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const QuanticoFont = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quantico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wortex Studio",
  description: "Wortex Studio is a creative software agency crafting purposeful digital products and impactful experiences through design, development, and strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-clip">
      <body
        suppressHydrationWarning
        className={`    
          ${OrbitronFont.variable}
          ${QuanticoFont.variable}
          antialiased
          overflow-x-clip
          `}
      >
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
        {/* <BottomCTA /> */}
        <Footer />
      </body>
    </html>
  );
}
