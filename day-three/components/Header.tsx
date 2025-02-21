"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import clsx from "clsx"; // Install via `npm install clsx`

// 🔹 Define valid paths as a TypeScript type
type HeaderPath = "/" | "/backlog" | "/sprint" | "/login";

// 🔹 Define the structure of a header link
interface HeaderLink {
  label: string;
  href: HeaderPath;
}

// 🔹 Define header links as a constant (TypeScript will enforce correct paths)
const HEADER_LINKS: ReadonlyArray<HeaderLink> = [
  { label: "Home", href: "/" },
  { label: "Backlog", href: "/backlog" },
  { label: "Current Sprint", href: "/sprint" },
  { label: "Login", href: "/login" }
] as const;

// 🔹 Define a reusable HeaderLinkItem component with strong TypeScript typing
interface HeaderLinkItemProps {
  link: HeaderLink;
  isActive: boolean;
}

function HeaderLinkItem({ link, isActive }: HeaderLinkItemProps) {
  return (
    <li>
      <Link
        href={link.href}
        className={clsx(
          "text-foreground hover:text-primary transition-colors",
          isActive && "text-primary font-semibold"
        )}
        aria-current={isActive ? "page" : undefined} // 🔹 Improves accessibility
      >
        {link.label}
      </Link>
    </li>
  );
}

// 🔹 Main Header Component
export function Header() {
  const pathname = usePathname();

  // 🔹 Memoize active links to prevent unnecessary re-renders
  const activeLinks = useMemo(
    () =>
      HEADER_LINKS.map((link) => ({
        ...link,
        isActive: pathname === link.href
      })),
    [pathname]
  );

  return (
    <header className="bg-card shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          {activeLinks.map((link) => (
            <HeaderLinkItem key={link.href} link={link} isActive={link.isActive} />
          ))}
        </ul>
      </nav>
    </header>
  );
}