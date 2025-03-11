import ServiceContent from "@/app/components/ServiceContent"

export default function WebServices() {
  return (
    <>
      <ServiceContent
        title="Web Development Solutions"
        description="I provide comprehensive web development services using a versatile tech stack that includes Laravel, Next.js, and WordPress to deliver tailored solutions for any project requirements."
        features={[
          "Full-stack development with Laravel's MVC architecture and Eloquent ORM",
          "Modern, SEO-friendly applications with Next.js server-side rendering and static generation",
          "Custom WordPress themes and plugins for content-driven websites",
          "E-commerce integration and performance optimization across all platforms"
        ]}
      />
    </>
  )
}