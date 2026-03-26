'use client';

import { FormEvent, useState } from 'react';
import { formatDateTime, formatMoney, postApi } from '../lib/api';
import type {
  ManagerServiceOffer,
  ResearchOrder,
  ResearchOrderPaymentResult,
} from '../lib/types';
import { MarkdownContent } from './markdown-content';

type CustomResearchFormProps = {
  managerSlug: string;
  managerName: string;
  offer: ManagerServiceOffer | null;
  paymentRail: string;
  identityProvider: string;
};

export function CustomResearchForm({
  managerSlug,
  managerName,
  offer,
  paymentRail,
  identityProvider,
}: CustomResearchFormProps) {
  const [requesterRef, setRequesterRef] = useState('web-debug-user');
  const [topic, setTopic] = useState('');
  const [brief, setBrief] = useState('');
  const [order, setOrder] = useState<ResearchOrder | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<'success' | 'error'>('success');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const created = await postApi<ResearchOrder>(
        `/managers/${managerSlug}/research-requests`,
        {
          requesterRef,
          topic,
          brief,
        },
      );
      setOrder(created);
      setTone('success');
      setMessage('Research order created. The next step is payment and delivery.');
    } catch (error) {
      setTone('error');
      setMessage(error instanceof Error ? error.message : 'Failed to create order.');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handlePay() {
    if (!order) {
      return;
    }

    setIsPaying(true);
    setMessage(null);

    try {
      const result = await postApi<ResearchOrderPaymentResult>(
        `/research-orders/${order.id}/pay`,
        {},
      );
      setOrder(result.order);
      setTone('success');
      setMessage(result.message);
    } catch (error) {
      setTone('error');
      setMessage(error instanceof Error ? error.message : 'Payment failed.');
    } finally {
      setIsPaying(false);
    }
  }

  function resetOrder() {
    setOrder(null);
    setTopic('');
    setBrief('');
    setMessage(null);
  }

  return (
    <div className="panel panel-nested custom-research-panel atlas-content-card">
      {!order ? (
        <form className="inline-form" onSubmit={handleSubmit}>
          <div className="tag-row">
            <span className="pill">Custom research</span>
            {offer ? (
              <span className="chip">
                {formatMoney(offer.amountUsd)} {offer.asset}
              </span>
            ) : null}
            <span className="chip">{paymentRail}</span>
          </div>

          {offer ? (
            <div className="atlas-inline-copy">
              <p className="muted">{offer.description}</p>
              <div className="atlas-inline-stats atlas-inline-stats-wrap">
                <span>{offer.delivery}</span>
                <span>{offer.network}</span>
              </div>
            </div>
          ) : null}

          <div className="form-row">
            <input
              className="input"
              value={requesterRef}
              onChange={(event) => setRequesterRef(event.target.value)}
              placeholder="Customer reference"
            />
            <input
              className="input"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="Topic, token, event, or ecosystem"
              required
            />
          </div>

          <textarea
            className="textarea"
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
            placeholder={`What do you want ${managerName} to analyze?`}
            rows={6}
            required
          />

          <button type="submit" className="button-link primary" disabled={isSubmitting}>
            {isSubmitting ? 'Creating order...' : 'Create research order'}
          </button>
        </form>
      ) : (
        <div className="stack-tight">
          <div className="mini-metrics">
            <span className="eyebrow">Order live</span>
            <span className="chip">{order.status}</span>
            <span className="chip">{order.paymentStatus}</span>
          </div>
          <h3>{order.deliveryTitle ?? `${managerName}: ${order.topic}`}</h3>
          <p className="muted">{order.brief}</p>
          <div className="service-rail-meta">
            <span>{formatMoney(order.priceUsd)} {order.paymentAsset ?? offer?.asset ?? 'USDT'}</span>
            <span>{order.paymentNetwork ?? offer?.network ?? 'TRON'}</span>
            <span>{identityProvider}</span>
            <span>{formatDateTime(order.createdAt)}</span>
          </div>

          {order.deliverySummary ? <p className="muted">{order.deliverySummary}</p> : null}
          {order.deliveryContent ? (
            <MarkdownContent content={order.deliveryContent} className="rich-text" />
          ) : (
            <div className="memo-preview-shell">
              <p className="memo-preview-copy">
                This order is ready for payment. Once the x402 payment settles, the manager
                will deliver a full markdown research memo here.
              </p>
              <div className="memo-preview-fade" />
            </div>
          )}

          <div className="memo-unlock-strip">
            <div>
              <div className="eyebrow">Agent payment</div>
              <strong>
                {order.deliveryContent ? 'Delivery complete' : 'Pay and generate report'}
              </strong>
              <div className="muted">
                {formatMoney(order.priceUsd)} via {paymentRail} on{' '}
                {order.paymentNetwork ?? offer?.network ?? 'TRON'}
              </div>
            </div>
            <div className="cta-row">
              {!order.deliveryContent ? (
                <button
                  type="button"
                  className="button-link primary"
                  onClick={handlePay}
                  disabled={isPaying}
                >
                  {isPaying ? 'Paying and generating...' : 'Pay order'}
                </button>
              ) : null}
              <button type="button" className="button-link" onClick={resetOrder}>
                New request
              </button>
            </div>
          </div>
        </div>
      )}

      {message ? <div className={`feedback ${tone}`}>{message}</div> : null}
    </div>
  );
}
