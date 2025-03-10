interface ServiceContentProps {
  title: string
  description: string
  features: string[]
}

export default function ServiceContent({ title, description, features }: ServiceContentProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-dracula-purple">{title}</h1>
      <p className="text-lg mb-6 text-dracula-foreground">{description}</p>
      <h2 className="text-2xl font-bold mb-4 text-dracula-cyan">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-dracula-foreground">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

