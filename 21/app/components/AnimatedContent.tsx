"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function AnimatedContent({ children, header }: { children: React.ReactNode; header: React.ReactNode }) {
  const [isAnimated, setIsAnimated] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    setIsAnimated(!isHome)
  }, [isHome])

  useEffect(() => {
    const adjustHeaderPosition = () => {
      if (headerRef.current && !isAnimated) {
        const headerHeight = headerRef.current.offsetHeight
        const windowHeight = window.innerHeight
        const topSpace = (windowHeight - headerHeight) / 2
        headerRef.current.style.marginTop = `${Math.max(0, topSpace)}px`
      } else if (headerRef.current) {
        headerRef.current.style.marginTop = "0px"
      }
    }

    adjustHeaderPosition()
    window.addEventListener("resize", adjustHeaderPosition)
    return () => window.removeEventListener("resize", adjustHeaderPosition)
  }, [isAnimated])

  return (
    <div className={`flex flex-col ${isAnimated ? "min-h-screen" : "h-screen"}`}>
      <header ref={headerRef} className={`transition-all duration-500 ease-in-out ${isAnimated ? "py-4" : "py-8"}`}>
        {header}
      </header>
      <main className={`flex-grow ${isAnimated ? "overflow-y-auto" : ""}`}>
        {children}
      </main>
    </div>
  )
}

