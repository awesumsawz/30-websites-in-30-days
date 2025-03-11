import ServiceContent from "@/app/components/ServiceContent"

export default function CloudServices() {
  return (
    <ServiceContent
      title="Cloud Services"
      description="I provide comprehensive cloud solutions leveraging AWS, GitHub, and other leading platforms to help businesses build, deploy, and manage scalable applications and infrastructure."
      features={[
        "AWS architecture design and implementation (EC2, S3, Lambda, RDS)",
        "GitHub workflow optimization and CI/CD pipeline setup",
        "Cloud infrastructure management and cost optimization",
        "Serverless application development and deployment",
        "Docker containerization and Kubernetes orchestration",
        "Cloud security best practices and implementation"
      ]}
    />
  )
}

