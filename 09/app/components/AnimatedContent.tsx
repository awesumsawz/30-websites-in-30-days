"use client"

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnimatedContent({ children, header }: { children: React.ReactNode; header: React.ReactNode }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [contentHeight, setContentHeight] = useState<string>("auto");
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIsAnimated(true);
      setContentHeight(`${document.querySelector("main")?.offsetHeight || 0}px`);
      setContent(null);
      setTimeout(() => {
        setContent(children);
        setTimeout(() => setContentHeight("auto"), 50);
      }, 300);
    } else {
      setIsAnimated(false);
      setContent(null);
      setContentHeight("auto");
    }
  }, [pathname, children]);

  useEffect(() => {
    const adjustHeaderPosition = () => {
      if (headerRef.current && !isAnimated) {
        const headerHeight = headerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const topSpace = (windowHeight - headerHeight) / 2;
        headerRef.current.style.marginTop = `${topSpace}px`;
      } else if (headerRef.current) {
        headerRef.current.style.marginTop = "0px";
      }
    }

    adjustHeaderPosition();
    window.addEventListener("resize", adjustHeaderPosition);
    return () => window.removeEventListener("resize", adjustHeaderPosition);
  }, [isAnimated]);

  return (
    <div className={`flex flex-col ${isAnimated ? "min-h-screen" : "h-screen"}`}>
      <header
        ref={headerRef}
        className={`transition-all duration-500 ease-in-out-expo ${isAnimated ? "py-4" : "py-8"}`}
      >
        {header}
      </header>
      <main
        className={`transition-all duration-500 ease-in-out-expo flex-grow ${isAnimated ? "opacity-100" : "opacity-0"}`}
        style={{ height: contentHeight, overflow: "hidden" }}
      >
        <div className={`transition-opacity duration-500 ease-in-out-expo ${content ? "opacity-100" : "opacity-0"}`}>
          {content}
        </div>
      </main>
    </div>
  )
}

