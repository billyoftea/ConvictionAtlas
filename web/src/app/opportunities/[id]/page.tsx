import OpportunityDetailClient from './client';
import { API_BASE_URL } from '../../../lib/runtime-config';

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE_URL}/opportunities`);
    const opps: { id: string }[] = await res.json();
    return opps.map((o) => ({ id: String(o.id) }));
  } catch {
    return [];
  }
}

export default function OpportunityDetailPage() {
  return <OpportunityDetailClient />;
}
