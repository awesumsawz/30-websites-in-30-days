import Link from "next/link"
import { Code, Briefcase, WorkflowIcon as Wordpress, Server } from "lucide-react"

const NavMenu = () => {
  return (
    <nav className="grid grid-cols-4 gap-4 my-4 max-w-2xl mx-auto">
      <Link
        href="/services/nextjs"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border w-full"
      >
        <Code className="w-8 h-8 mb-1 text-dracula-green drop-shadow-icon" />
        <span className="text-xs font-pixel">Next.js</span>
      </Link>
      <Link
        href="/services/laravel"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border w-full"
      >
        <Server className="w-8 h-8 mb-1 text-dracula-red drop-shadow-icon" />
        <span className="text-xs font-pixel">Laravel</span>
      </Link>
      <Link
        href="/services/wordpress"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border w-full"
      >
        <Wordpress className="w-8 h-8 mb-1 text-dracula-cyan drop-shadow-icon" />
        <span className="text-xs font-pixel">WordPress</span>
      </Link>
      <Link
        href="/services/consulting"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border w-full"
      >
        <Briefcase className="w-8 h-8 mb-1 text-dracula-orange drop-shadow-icon" />
        <span className="text-xs font-pixel">Consulting</span>
      </Link>
    </nav>
  )
}

export default NavMenu

