"use client"

import type React from "react"
import { Twitter, Facebook, Linkedin, Link } from "lucide-react"

interface SocialShareProps {
  url: string
  title: string
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return (
    <div className="flex space-x-4 mt-6 mb-2">
      <p className="font-mono text-sm mr-2 text-dracula-comment">Share this post:</p>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5 text-dracula-cyan" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-5 h-5 text-dracula-purple" />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-dracula-green" />
      </a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url)
          alert("Link copied to clipboard!")
        }}
        className="pixelated-border p-2 bg-gray-800 hover:bg-gray-700 transition-colors"
        aria-label="Copy link"
      >
        <Link className="w-5 h-5 text-dracula-orange" />
      </button>
    </div>
  )
}

export default SocialShare

