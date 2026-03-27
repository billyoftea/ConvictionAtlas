import OpportunityDetailClient from './client';

const API = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://47.90.182.192/api';

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API}/opportunities`);
    const opps: { id: string }[] = await res.json();
    return opps.map((o) => ({ id: String(o.id) }));
  } catch {
    return [];
  }
}

export default function OpportunityDetailPage() {
  return <OpportunityDetailClient />;
}
