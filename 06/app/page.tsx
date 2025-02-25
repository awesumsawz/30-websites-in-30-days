import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <ServicesOverview />
      <CTA />
    </div>
  )
}

