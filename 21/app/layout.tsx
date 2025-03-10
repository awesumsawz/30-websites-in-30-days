import "./globals.css"
import { Roboto_Mono, Press_Start_2P } from "next/font/google"
import type React from "react"
import Link from "next/link"
import NavMenu from "./components/NavMenu"
import PixelatedBackground from "./components/PixelatedBackground"
import FloatingPixels from "./components/FloatingPixels"
import AnimatedContent from "./components/AnimatedContent"
import SoundEffect from "./components/SoundEffect"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

export const metadata = {
  title: "Think Bigg Development",
  description: "Web development and business consulting services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${robotoMono.variable} ${pressStart2P.variable} font-sans bg-dracula-background text-dracula-foreground h-full overflow-hidden`}
      >
        <PixelatedBackground />
        <div className="relative z-10 h-full flex flex-col">
          <AnimatedContent
            header={
              <div className="text-center px-4">
                <Link href="/" className="inline-block">
                  <h1 className="text-4xl font-bold font-pixel text-dracula-purple mb-2">Think Bigg Development</h1>
                </Link>
                <p className="text-xl text-dracula-cyan">Web Development • Business Consulting</p>
                <NavMenu />
              </div>
            }
          >
            <div className="max-w-4xl mx-auto px-4 pb-8">{children}</div>
          </AnimatedContent>
          <footer className="py-4 text-center text-dracula-comment">
            © {new Date().getFullYear()} Think Bigg Development. All rights reserved.
          </footer>
        </div>
        <FloatingPixels />
        <SoundEffect />
      </body>
    </html>
  )
}



import './globals.css'