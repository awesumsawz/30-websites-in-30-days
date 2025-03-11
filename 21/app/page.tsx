import Link from "next/link"
import ColorfulPixelLogo from "./components/ColorfulPixelLogo"
import BlinkingCursor from "./components/BlinkingCursor"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-pixel mb-6 text-center">
        Retro-Futuristic Web Development<BlinkingCursor />
      </h2>
    </div>
  )
}

