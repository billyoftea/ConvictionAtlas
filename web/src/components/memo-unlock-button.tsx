'use client';

import { useState } from 'react';
import { postApi } from '../lib/api';
import type { MemoUnlockResult } from '../lib/types';

export function MemoUnlockButton({ memoId }: { memoId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<'success' | 'error'>('success');

  async function handleUnlock() {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await postApi<MemoUnlockResult>(`/memos/${memoId}/unlock`, {
        customerRef: 'web-debug-user',
      });
      setTone('success');
      setMessage(response.message);
    } catch (error) {
      setTone('error');
      setMessage(error instanceof Error ? error.message : 'Unlock request failed.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="stack-tight">
      <button
        type="button"
        className="button-link"
        onClick={handleUnlock}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Recording unlock...' : 'Record unlock request'}
      </button>
      {message ? <div className={`feedback ${tone}`}>{message}</div> : null}
    </div>
  );
}
