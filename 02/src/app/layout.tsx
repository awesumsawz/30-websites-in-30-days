import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";

import "./globals.css";


const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brew & Byte",
  description: "A tech forward coffee shop for the discerning tech professional",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="bg-green-900 {`${robotoSans.variable} ${robotoMono.variable} antialiased`}" >
        <header className="flex justify-between items-center mb-4 px-6 py-2 bg-green-950 border-b-2 border-white-900">
          <div className="branding">
            <h1 className="text-2xl font-bold text-green-800">Brew & Byte</h1>
            <p className="text-sm text-gray-600">but first, coffee.</p>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/menu">Menu</Link></li>
            </ul>
          </nav>
        </header>
        <main className="m-4">
          {children}
        </main>
      </body>
    </html>
  );
}
