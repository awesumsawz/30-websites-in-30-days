"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface ServiceContentProps {
  title: string
  description: string
  features: string[]
}

export default function ServiceContent({ title, description, features }: ServiceContentProps) {
  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-pixel mb-4 text-dracula-purple">{title}</h1>
      <p className="text-lg mb-6 text-dracula-foreground">{description}</p>

      <h2 className="text-2xl font-pixel mb-4 text-dracula-cyan">Key Features</h2>
      <ul className="list-none space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-4 h-4 bg-dracula-green mr-3 mt-1"></span>
            <span className="text-dracula-foreground font-mono">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-6 bg-dracula-currentLine rounded-lg pixelated-border">
        <h3 className="text-xl font-pixel mb-3 text-dracula-pink">Ready to get started?</h3>
        <p className="mb-4 font-mono">
          Contact us today to discuss your project requirements and how we can help you achieve your goals.
        </p>
        <Link href="/contact">
          <button className="bg-dracula-purple text-white px-4 py-2 rounded font-pixel hover:bg-dracula-pink transition-colors">
            Contact Us
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

