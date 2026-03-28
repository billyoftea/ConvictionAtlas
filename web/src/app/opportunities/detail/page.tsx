import { Suspense } from 'react';
import OpportunityDetailClient from './client';

export default function OpportunityDetailPage() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <OpportunityDetailClient />
    </Suspense>
  );
}
