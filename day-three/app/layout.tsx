import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import type { ReactNode } from "react"
import { Footer } from "@/components/Footer"

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
          <header className="bg-card shadow-md">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/backlog" className="text-foreground hover:text-primary transition-colors">
                    Backlog
                  </Link>
                </li>
                <li>
                  <Link href="/sprint" className="text-foreground hover:text-primary transition-colors">
                    Current Sprint
                  </Link>
                </li>
                <li className="ml-auto">
                  <Link href="/login" className="text-foreground hover:text-primary transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

