import Link from "next/link"
import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-background via-background to-dracula-purple/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-dracula-purple to-dracula-pink">
          Ready to elevate your web presence?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">Let's collaborate and bring your ideas to life.</p>
        <Button asChild size="lg" className="bg-dracula-purple hover:bg-dracula-purple/90 px-8 py-3 text-base">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  )
}

export default CTA

