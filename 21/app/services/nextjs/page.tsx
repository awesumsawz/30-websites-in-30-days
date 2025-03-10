import ServiceContent from "@/app/components/ServiceContent"

export default function NextJsService() {
  return (
    <ServiceContent
      title="Next.js Development"
      description="We build modern, fast, and SEO-friendly web applications using Next.js, a powerful React framework."
      features={["Server-side rendering", "Static site generation", "API routes", "Optimized performance"]}
    />
  )
}

