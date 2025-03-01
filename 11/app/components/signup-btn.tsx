"use client"

import { useState } from "react"

export default function SignUpButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
      <button
        className="signup-button text-white py-2 px-4 rounded-md font-bold transition-all !bg-black cursor-pointer"
        style={{ backgroundColor: "black" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Sign Up 
      </button>
  )
}
