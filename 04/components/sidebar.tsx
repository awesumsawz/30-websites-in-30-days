"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Inbox, CheckSquare, CheckCircle, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Backlog", href: "/backlog", icon: Inbox },
  { name: "Kanban", href: "/kanban", icon: CheckSquare },
  { name: "Completed", href: "/completed", icon: CheckCircle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen)
  }

  return (
    <>
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 md:hidden text-primary hover:text-primary-foreground hover:bg-primary/20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 sidebar-bg shadow-lg transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          ${isDesktopMenuOpen ? "md:translate-x-0" : "md:-translate-x-56"}
        `}
      >
        <nav className="flex h-full flex-col p-6">
          <h1 className="mb-8 text-2xl font-bold text-accent-foreground">Ticketing System</h1>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-accent-foreground hover:bg-secondary/20 hover:text-secondary-foreground"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span className={`${isDesktopMenuOpen ? "md:inline" : "md:hidden"}`}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          variant="ghost"
          className="absolute top-4 -right-4 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary hover:bg-primary/30"
          onClick={toggleDesktopMenu}
        >
          {isDesktopMenuOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </aside>
      <div className={`md:pl-${isDesktopMenuOpen ? "64" : "8"} transition-all duration-300 ease-in-out`}>
        {/* Main content */}
      </div>
    </>
  )
}

