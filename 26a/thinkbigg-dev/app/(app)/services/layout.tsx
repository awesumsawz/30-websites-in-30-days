export const metadata = {
  title: 'Services | Think Bigg Development',
  description: 'Web, Cloud, and Business Consulting Services',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="services-container">
      {children}
    </div>
  )
}
