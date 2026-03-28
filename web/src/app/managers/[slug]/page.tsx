import ManagerDetailClient from './client';
import { API_BASE_URL } from '../../../lib/runtime-config';

// 告诉 Next.js 静态导出时有哪些 slug
export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE_URL}/managers`);
    const managers: { slug: string }[] = await res.json();
    return managers.map((m) => ({ slug: m.slug }));
  } catch {
    // fallback: 把6个已知的 slug 写死
    return [
      { slug: 'narrative-manager' },
      { slug: 'event-driven-manager' },
      { slug: 'quant-manager' },
      { slug: 'hybrid-manager' },
      { slug: 'onchain-fundamentals-manager' },
      { slug: 'polymarket-specialist-manager' },
    ];
  }
}

export default function ManagerDetailPage() {
  return <ManagerDetailClient />;
}
