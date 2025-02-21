import "./globals.css"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ADA Compliant Dracula-Themed Jira Clone",
  description: "A dark-themed, accessible ticketing app for small teams",
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

