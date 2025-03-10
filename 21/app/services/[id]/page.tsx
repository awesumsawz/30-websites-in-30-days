import { notFound } from "next/navigation"

const services = {
  nextjs: {
    title: "Next.js Development",
    description: "We build modern, fast, and SEO-friendly web applications using Next.js, a powerful React framework.",
    features: ["Server-side rendering", "Static site generation", "API routes", "Optimized performance"],
  },
  laravel: {
    title: "Laravel Development",
    description:
      "Our Laravel development services provide robust and scalable web applications for your business needs.",
    features: ["MVC architecture", "Eloquent ORM", "Artisan CLI", "Built-in security features"],
  },
  wordpress: {
    title: "WordPress Solutions",
    description: "We create custom WordPress themes and plugins to power your content-driven websites.",
    features: ["Custom theme development", "Plugin development", "E-commerce integration", "Performance optimization"],
  },
  consulting: {
    title: "Business Consulting",
    description:
      "Our business consulting services help you navigate the digital landscape and grow your online presence.",
    features: ["Digital strategy", "Technology stack recommendations", "Process optimization", "Growth hacking"],
  },
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services[params.id as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-dracula-purple">{service.title}</h1>
      <p className="text-lg mb-6 text-dracula-foreground">{service.description}</p>
      <h2 className="text-2xl font-bold mb-4 text-dracula-cyan">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="text-dracula-foreground">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

