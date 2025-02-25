import { Code, Server, Briefcase, Globe } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies like Next.js and Laravel.",
    icon: Globe,
    color: "text-dracula-cyan",
  },
  {
    title: "WordPress Plugins",
    description: "Tailor-made WordPress plugins to extend your site's functionality.",
    icon: Code,
    color: "text-dracula-pink",
  },
  {
    title: "Business Consulting",
    description: "Strategic advice to help your business leverage technology effectively.",
    icon: Briefcase,
    color: "text-dracula-green",
  },
  {
    title: "Server Administration",
    description: "Expert server management and optimization for peak performance.",
    icon: Server,
    color: "text-dracula-yellow",
  },
]

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-dracula-purple to-dracula-pink">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg border border-dracula-purple/20 hover:border-dracula-purple transition-colors duration-300"
            >
              <service.icon className={`w-12 h-12 ${service.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview

