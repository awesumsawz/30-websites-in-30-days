import React from "react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 font-pixel">Loading...</p>
    </div>
  )
}

