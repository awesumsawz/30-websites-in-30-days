import { PAYLOAD_URL } from "@/config";

export async function getServiceBySlug(slug: string) {
  try {
    const response = await fetch(`${PAYLOAD_URL}/api/services?where[slug][equals]=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch service');
    
    const data = await response.json();
    return data.docs[0];
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
}

export async function getAllServices() {
  try {
    const response = await fetch(`${PAYLOAD_URL}/api/services`);
    if (!response.ok) throw new Error('Failed to fetch services');
    
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
} 