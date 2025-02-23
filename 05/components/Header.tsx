import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-surface0 text-text">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/listings" className="hover:text-primary">
              Figurines
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

