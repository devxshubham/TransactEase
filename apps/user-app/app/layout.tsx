import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { Appbarclient } from "../components/AppbarClient";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
          <Appbarclient />
          {children}
        </div>
      </Providers>
    </html>
  );
}
