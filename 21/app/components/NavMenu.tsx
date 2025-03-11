import Link from "next/link"
import { Code, Briefcase, WorkflowIcon as Wordpress, Server, Mail, BookOpen } from "lucide-react"

const NavMenu = () => {
  return (
    <nav className="flex justify-center gap-4 my-4 flex-wrap">
      <Link
        href="/services/nextjs"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border min-w-[6rem] w-auto"
      >
        <Code className="w-8 h-8 mb-1 text-dracula-green drop-shadow-icon" />
        <span className="text-xs font-pixel whitespace-nowrap">Next.js</span>
      </Link>
      <Link
        href="/services/laravel"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border min-w-[6rem] w-auto"
      >
        <Server className="w-8 h-8 mb-1 text-dracula-red drop-shadow-icon" />
        <span className="text-xs font-pixel whitespace-nowrap">Laravel</span>
      </Link>
      <Link
        href="/services/wordpress"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border min-w-[6rem] w-auto"
      >
        <Wordpress className="w-8 h-8 mb-1 text-dracula-cyan drop-shadow-icon" />
        <span className="text-xs font-pixel whitespace-nowrap">WordPress</span>
      </Link>
      <Link
        href="/services/consulting"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border min-w-[6rem] w-auto"
      >
        <Briefcase className="w-8 h-8 mb-1 text-dracula-orange drop-shadow-icon" />
        <span className="text-xs font-pixel whitespace-nowrap">Consulting</span>
      </Link>
      <Link
        href="/blog"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border min-w-[6rem] w-auto"
      >
        <BookOpen className="w-8 h-8 mb-1 text-dracula-yellow drop-shadow-icon" />
        <span className="text-xs font-pixel whitespace-nowrap">Blog</span>
      </Link>
      <Link
        href="/contact"
        className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border min-w-[6rem] w-auto"
      >
        <Mail className="w-8 h-8 mb-1 text-dracula-purple drop-shadow-icon" />
        <span className="text-xs font-pixel whitespace-nowrap">Contact</span>
      </Link>
    </nav>
  )
}

export default NavMenu

