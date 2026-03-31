'use client';

import { useState } from 'react';
import { fetchApi, postApi } from '../lib/api';

type PaymentInfo = {
  network: string;
  networkCode?: string;
  wallet: string;
  token: string;
  contract: string;
  minAmount: number;
  memo: string;
  explorerUrl: string;
  faucetUrl?: string | null;
};

type PurchaseStep = 'idle' | 'showing-payment' | 'submitting-tx' | 'done' | 'error';

export function BuySharesButton({
  managerSlug,
  managerName,
}: {
  managerSlug: string;
  managerName: string;
}) {
  const [step, setStep] = useState<PurchaseStep>('idle');
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [txHash, setTxHash] = useState('');
  const [shares, setShares] = useState('10');
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleGetPaymentInfo() {
    setStep('showing-payment');
    setMessage(null);
    try {
      const info = await fetchApi<PaymentInfo>(
        `/managers/${managerSlug}/shares/payment-info?shares=${shares}`,
      );
      setPaymentInfo(info);
    } catch {
      setMessage('Failed to load payment info. Is the API running?');
      setStep('error');
    }
  }

  async function handleSubmitTx() {
    if (!txHash.trim()) {
      setMessage('Please enter your transaction hash.');
      return;
    }
    setStep('submitting-tx');
    setMessage(null);

    try {
      const response = await postApi<{ success: boolean; message: string; shares?: number }>(
        `/managers/${managerSlug}/shares/purchase`,
        {
          txHash: txHash.trim(),
          shares: Number(shares),
        },
      );
      setIsSuccess(response.success ?? false);
      setMessage(response.message ?? 'Done.');
      if (response.success) setStep('done');
      else setStep('error');
    } catch (error) {
      setIsSuccess(false);
      setMessage(error instanceof Error ? error.message : 'Verification failed.');
      setStep('error');
    }
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).catch(() => {});
  }

  if (step === 'done') {
    return (
      <div className="unlock-success">
        <span className="unlock-check">✅</span>
        <span>{message}</span>
      </div>
    );
  }

  return (
    <div className="buy-shares-shell">
      {step === 'idle' && (
        <div className="buy-shares-form">
          <div className="buy-shares-input-row">
            <label className="buy-shares-label">Shares to purchase</label>
            <input
              type="number"
              className="buy-shares-input"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              min="1"
              max="10000"
              step="1"
            />
          </div>
          <div className="buy-shares-summary">
            <span className="muted">Cost: {Number(shares) || 0} USDT (Nile Testnet)</span>
            <span className="muted">1 share = 1 USDT</span>
          </div>
          <button
            type="button"
            className="button-link primary buy-shares-cta"
            onClick={handleGetPaymentInfo}
            disabled={!shares || Number(shares) <= 0}
          >
            🔗 Buy {shares} shares via TRON USDT
          </button>
        </div>
      )}

      {(step === 'showing-payment' || step === 'submitting-tx' || step === 'error') &&
        paymentInfo && (
          <div className="unlock-panel">
            <div className="unlock-header">
              <span className="buy-shares-badge">{paymentInfo.network}</span>
              <span className="unlock-amount">{Number(shares)} USDT → {shares} shares</span>
            </div>

            <div className="buy-shares-info-text">
              <strong>Purchase {shares} shares of {managerName}</strong>
              <p className="muted">
                Send exactly {Number(shares)} USDT (TRC-20) to the wallet below.
                After sending, paste the transaction hash to verify and claim your shares.
              </p>
            </div>

            <div className="unlock-wallet-row">
              <span className="unlock-label">Send to:</span>
              <code className="unlock-address">{paymentInfo.wallet}</code>
              <button
                type="button"
                className="unlock-copy"
                onClick={() => copyToClipboard(paymentInfo.wallet)}
                title="Copy address"
              >
                📋
              </button>
            </div>

            <div className="unlock-wallet-row">
              <span className="unlock-label">Token:</span>
              <span className="unlock-value">{paymentInfo.token}</span>
            </div>

            <div className="unlock-wallet-row">
              <span className="unlock-label">Amount:</span>
              <span className="unlock-value">{Number(shares)} USDT</span>
            </div>

            <div className="unlock-wallet-row">
              <span className="unlock-label">Memo ref:</span>
              <code className="unlock-address">{paymentInfo.memo}</code>
            </div>

            <div className="unlock-links">
              <a
                href={paymentInfo.explorerUrl}
                target="_blank"
                rel="noreferrer"
                className="unlock-link"
              >
                View on Explorer ↗
              </a>
              {paymentInfo.faucetUrl ? (
                <a
                  href={paymentInfo.faucetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="unlock-link"
                >
                  Get testnet funds ↗
                </a>
              ) : null}
            </div>

            <div className="unlock-divider" />

            <div className="unlock-tx-row">
              <input
                type="text"
                className="unlock-tx-input"
                placeholder="Paste your tx hash after sending…"
                value={txHash}
                onChange={(e) => setTxHash(e.target.value)}
                disabled={step === 'submitting-tx'}
              />
              <button
                type="button"
                className="unlock-verify-btn"
                onClick={handleSubmitTx}
                disabled={step === 'submitting-tx' || !txHash.trim()}
              >
                {step === 'submitting-tx' ? 'Verifying…' : 'Verify & Claim Shares'}
              </button>
            </div>

            {message && (
              <div className={`unlock-feedback ${isSuccess ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </div>
        )}

      {step === 'showing-payment' && !paymentInfo && (
        <div className="muted">Loading payment info…</div>
      )}
    </div>
  );
}
