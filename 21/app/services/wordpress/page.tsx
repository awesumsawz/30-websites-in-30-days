import ServiceContent from "@/app/components/ServiceContent"

export default function WordPressService() {
  return (
    <ServiceContent
      title="WordPress Solutions"
      description="We create custom WordPress themes and plugins to power your content-driven websites."
      features={[
        "Custom theme development",
        "Plugin development",
        "E-commerce integration",
        "Performance optimization",
      ]}
    />
  )
}

