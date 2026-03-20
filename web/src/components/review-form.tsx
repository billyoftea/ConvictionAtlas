'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postApi } from '../lib/api';
import type { Review } from '../lib/types';

export function ReviewForm({ managerSlug }: { managerSlug: string }) {
  const router = useRouter();
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<'success' | 'error'>('success');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      await postApi<Review>(`/managers/${managerSlug}/reviews`, {
        authorName,
        rating,
        comment,
      });
      setTone('success');
      setMessage('Review submitted.');
      setAuthorName('');
      setRating(5);
      setComment('');
      router.refresh();
    } catch (error) {
      setTone('error');
      setMessage(error instanceof Error ? error.message : 'Review submission failed.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="inline-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          className="input"
          placeholder="Name"
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
        />
        <select
          className="input"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          {[5, 4, 3, 2, 1].map((value) => (
            <option key={value} value={value}>
              {value} star{value === 1 ? '' : 's'}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="textarea"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="What stood out in this manager's latest positioning?"
        rows={5}
        required
      />
      <button type="submit" className="button-link primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit review'}
      </button>
      {message ? <div className={`feedback ${tone}`}>{message}</div> : null}
    </form>
  );
}
