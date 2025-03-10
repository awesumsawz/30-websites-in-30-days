"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function AnimatedContent({ children, header }: { children: React.ReactNode; header: React.ReactNode }) {
  const [isAnimated, setIsAnimated] = useState(false)
  const [content, setContent] = useState<React.ReactNode>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      setIsAnimated(true)
      setContent(null)
      setTimeout(() => {
        setContent(children)
      }, 300)
    } else {
      setIsAnimated(false)
      setContent(children)
    }
  }, [pathname, children])

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
      <header ref={headerRef} className={`transition-all duration-500 ease-linear ${isAnimated ? "py-4" : "py-8"}`}>
        {header}
      </header>
      <main
        className={`transition-all duration-500 ease-linear flex-grow ${
          isAnimated ? "opacity-100 overflow-y-auto" : "opacity-0"
        }`}
      >
        <div
          ref={contentRef}
          className={`transition-opacity duration-300 ease-linear ${content ? "opacity-100" : "opacity-0"}`}
        >
          {content}
        </div>
      </main>
    </div>
  )
}

