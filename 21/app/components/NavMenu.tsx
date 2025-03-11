import Link from "next/link"
import { Code, Briefcase, WorkflowIcon as Wordpress, Server, Cloud, Mail } from "lucide-react"

const NavMenu = () => {
  return (
    <div className="space-y-4">
      {/* Primary Navigation - Services */}
      <nav className="flex justify-center gap-4 my-4 max-w-[800px] mx-auto">
        <Link
          href="/services/web"
          className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border flex-grow"
        >
          <Code className="w-8 h-8 mb-1 text-dracula-green drop-shadow-icon" />
          <span className="text-xs font-pixel whitespace-nowrap">Web</span>
        </Link>
        <Link
          href="/services/cloud"
          className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border flex-grow"
        >
          <Cloud className="w-8 h-8 mb-1 text-dracula-cyan drop-shadow-icon" />
          <span className="text-xs font-pixel whitespace-nowrap">Cloud</span>
        </Link>
        <Link
          href="/services/consulting"
          className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border flex-grow"
        >
          <Briefcase className="w-8 h-8 mb-1 text-dracula-yellow drop-shadow-icon" />
          <span className="text-xs font-pixel whitespace-nowrap">Consulting</span>
        </Link>
        <Link
          href="/contact"
          className="flex flex-col items-center p-2 bg-dracula-currentLine rounded hover:bg-dracula-comment transition-colors pixelated-border flex-grow"
        >
          <Mail className="w-8 h-8 mb-1 text-dracula-purple drop-shadow-icon" />
          <span className="text-xs font-pixel whitespace-nowrap">Contact</span>
        </Link>
      </nav>
    </div>
  )
}

export default NavMenu

