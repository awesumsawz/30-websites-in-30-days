import ServiceContent from "@/app/components/ServiceContent"

export default function LaravelService() {
  return (
    <ServiceContent
      title="Laravel Development"
      description="We create robust and scalable web applications using Laravel, a powerful PHP framework."
      features={["MVC architecture", "Eloquent ORM", "Artisan CLI", "Built-in security features"]}
    />
  )
}

