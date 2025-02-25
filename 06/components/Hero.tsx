import Link from "next/link"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-dracula-purple/10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-dracula-purple to-dracula-pink">
          Innovative Web Solutions
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          <span className="text-dracula-cyan">Web Development</span> |
          <span className="text-dracula-pink"> WordPress Plugins</span> |
          <span className="text-dracula-green"> Business Consulting</span> |
          <span className="text-dracula-yellow"> Server Administration</span>
        </p>
        <Button asChild size="lg" className="bg-dracula-purple hover:bg-dracula-purple/90 px-8 py-3 text-base">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero

