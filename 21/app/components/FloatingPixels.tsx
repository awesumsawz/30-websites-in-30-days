"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"

interface Pixel {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

const FloatingPixels: React.FC = () => {
  const [pixels, setPixels] = useState<Pixel[]>([])
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const colors = ["#8be9fd", "#50fa7b", "#ffb86c", "#ff79c6", "#bd93f9", "#ff5555", "#f1fa8c"]

  useEffect(() => {
    const createPixels = () => {
      const newPixels: Pixel[] = []
      for (let i = 0; i < 20; i++) {
        newPixels.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setPixels(newPixels)
    }

    createPixels()

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        setPixels((prevPixels) =>
          prevPixels.map((pixel) => {
            let newX = pixel.x + pixel.speedX
            let newY = pixel.y + pixel.speedY

            if (newX < -pixel.size) newX = window.innerWidth + pixel.size
            if (newX > window.innerWidth + pixel.size) newX = -pixel.size
            if (newY < -pixel.size) newY = window.innerHeight + pixel.size
            if (newY > window.innerHeight + pixel.size) newY = -pixel.size

            return {
              ...pixel,
              x: newX,
              y: newY,
            }
          }),
        )
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className="absolute opacity-50"
          style={{
            left: `${pixel.x}px`,
            top: `${pixel.y}px`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            backgroundColor: pixel.color,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingPixels

