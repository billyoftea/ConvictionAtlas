'use client';

import { useMemo, useState } from 'react';
import { formatDateTime, formatMoney, postApi } from '../lib/api';
import type {
  ManagerServiceOffer,
  Memo,
  MemoUnlockResult,
} from '../lib/types';
import { MarkdownContent } from './markdown-content';

type MemoUnlockButtonProps = {
  memo: Memo;
  managerName: string;
  unlockOffer: ManagerServiceOffer | null;
  paymentRail: string;
  identityProvider: string;
};

export function MemoUnlockButton({
  memo,
  managerName,
  unlockOffer,
  paymentRail,
  identityProvider,
}: MemoUnlockButtonProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(!memo.isPremium);
  const [unlockedContent, setUnlockedContent] = useState(
    memo.isPremium ? null : memo.content,
  );
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<'success' | 'error'>('success');
  const [paymentSummary, setPaymentSummary] = useState<string | null>(null);

  const preview = useMemo(() => {
    const source = memo.previewContent ?? memo.content ?? memo.summary;
    const clean = source
      .replace(/[#>*`\[\]\(\)_-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!clean) {
      return memo.summary;
    }

    return `${clean.slice(0, 280).trim()}${clean.length > 280 ? '...' : ''}`;
  }, [memo.content, memo.summary]);

  async function handleUnlock() {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await postApi<MemoUnlockResult>(`/memos/${memo.id}/unlock`, {
        customerRef: 'web-debug-user',
      });
      setTone('success');
      setIsUnlocked(true);
      setUnlockedContent(response.content);
      setMessage(response.message);
      setPaymentSummary(
        `${response.paymentRequest.protocol} | ${response.paymentRequest.asset} on ${response.paymentRequest.network} | ${response.paymentRequest.identityProvider}`,
      );
    } catch (error) {
      setTone('error');
      setMessage(error instanceof Error ? error.message : 'Unlock request failed.');
      setPaymentSummary(null);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="panel panel-nested memo-paywall-card">
      <div className="tag-row">
        <span className="pill">{memo.generatedBy}</span>
        <span className="chip">{memo.accessTier}</span>
        {unlockOffer ? (
          <span className="chip">
            {formatMoney(unlockOffer.amountUsd)} {unlockOffer.asset}
          </span>
        ) : null}
      </div>

      <h3>{memo.title}</h3>
      <p className="muted">{memo.summary}</p>

      <div className="mini-metrics memo-service-meta">
        <span>{formatDateTime(memo.createdAt)}</span>
        <span>{paymentRail}</span>
        <span>{identityProvider}</span>
      </div>

      {isUnlocked ? (
        <MarkdownContent content={unlockedContent ?? memo.content} className="rich-text" />
      ) : (
        <div className="memo-preview-shell">
          <p className="memo-preview-copy">{preview}</p>
          <div className="memo-preview-fade" />
        </div>
      )}

      {memo.opportunity ? (
        <div className="mini-metrics memo-opportunity-link">
          <span>Linked opportunity</span>
          <span>{memo.opportunity.title}</span>
        </div>
      ) : null}

      {memo.isPremium && !isUnlocked ? (
        <div className="memo-unlock-strip">
          <div>
            <div className="eyebrow">Paid manager service</div>
            <strong>
              Unlock {managerName}
              {"'"}s full memo
            </strong>
            <div className="muted">
              {unlockOffer
                ? `${formatMoney(unlockOffer.amountUsd)} via ${unlockOffer.protocol} on ${unlockOffer.network}`
                : 'Premium unlock'}
            </div>
          </div>
          <button
            type="button"
            className="button-link primary"
            onClick={handleUnlock}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Recording payment intent...' : 'Unlock memo'}
          </button>
        </div>
      ) : null}

      {paymentSummary ? <div className="feedback success">{paymentSummary}</div> : null}
      {message ? <div className={`feedback ${tone}`}>{message}</div> : null}
    </div>
  );
}
