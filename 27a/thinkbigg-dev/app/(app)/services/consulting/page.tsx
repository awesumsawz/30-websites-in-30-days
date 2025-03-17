import ServiceContent from "@/app/(app)/components/ServiceContent"
import { getServiceBySlug } from "@/app/api/services"

interface ListItem {
  item: string;
}

interface Service {
  title: string;
  intro: string;
  listItems: ListItem[];
  tldr: string;
}

export const revalidate = 60; // Revalidate every minute

export default async function ConsultingServices() {
  const service = await getServiceBySlug('consulting') as Service;

  if (!service) {
    throw new Error('Service not found');
  }

  return (
    <>
      <ServiceContent
        title={service.title}
        description={service.intro}
        features={service.listItems.map(item => item.item)}
        postFeatures={[service.tldr]}
      />
    </>
  )
}

