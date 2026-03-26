'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchApi, formatDateTime, formatMoney, postApi } from '../lib/api';
import type {
  ManagerShareOffering,
  ManagerShareOrder,
  ManagerShareOrdersResponse,
} from '../lib/types';

type ManagerSharePurchaseProps = {
  managerSlug: string;
  managerName: string;
  offer: ManagerShareOffering;
  initialFeed: ManagerShareOrdersResponse | null;
};

declare global {
  interface Window {
    tronLink?: {
      ready?: boolean;
      request?: (payload: {
        method: string;
        params?: unknown[];
      }) => Promise<unknown>;
    };
    tronWeb?: {
      ready?: boolean;
      defaultAddress?: {
        base58?: string;
      };
      contract?: () => Promise<{
        at: (address: string) => Promise<{
          transfer: (
            to: string,
            amount: string,
          ) => {
            send: () => Promise<unknown>;
          };
        }>;
      }>;
    };
  }
}

export function ManagerSharePurchase({
  managerSlug,
  managerName,
  offer,
  initialFeed,
}: ManagerSharePurchaseProps) {
  const [feed, setFeed] = useState<ManagerShareOrdersResponse | null>(
    initialFeed,
  );
  const [sharesInput, setSharesInput] = useState(String(offer.minShares));
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletStatus, setWalletStatus] = useState<
    'checking' | 'ready' | 'missing'
  >('checking');
  const [latestOrder, setLatestOrder] = useState<ManagerShareOrder | null>(
    null,
  );
  const [isConnecting, setIsConnecting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<'success' | 'error'>('success');

  const shareCount = useMemo(() => {
    const parsed = Number.parseInt(sharesInput, 10);
    if (!Number.isInteger(parsed)) {
      return offer.minShares;
    }

    return Math.min(Math.max(parsed, offer.minShares), offer.maxShares);
  }, [offer.maxShares, offer.minShares, sharesInput]);

  const totalUsd = useMemo(
    () => shareCount * offer.priceUsd,
    [offer.priceUsd, shareCount],
  );

  useEffect(() => {
    syncWallet();

    const handleFocus = () => {
      syncWallet();
    };

    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  async function syncWallet() {
    const address = getInjectedWalletAddress();
    if (address) {
      setWalletAddress(address);
      setWalletStatus('ready');
      return;
    }

    setWalletAddress(null);
    setWalletStatus(hasTronProvider() ? 'missing' : 'missing');
  }

  async function connectWallet() {
    setIsConnecting(true);
    setMessage(null);

    try {
      if (window.tronLink?.request) {
        await window.tronLink.request({
          method: 'tron_requestAccounts',
        });
      }

      const address = getInjectedWalletAddress();
      if (!address) {
        throw new Error(
          'TronLink is not ready. Unlock the wallet and switch to Nile.',
        );
      }

      setWalletAddress(address);
      setWalletStatus('ready');
      return address;
    } catch (error) {
      setTone('error');
      setMessage(
        error instanceof Error ? error.message : 'Failed to connect TronLink.',
      );
      throw error;
    } finally {
      setIsConnecting(false);
    }
  }

  async function handleBuyShares() {
    setIsProcessing(true);
    setMessage(null);

    try {
      const buyerAddress = walletAddress ?? (await connectWallet());
      const order = await postApi<ManagerShareOrder>(
        `/managers/${managerSlug}/share-orders`,
        {
          shares: shareCount,
          buyerAddress,
        },
      );
      setLatestOrder(order);

      const tronWeb = window.tronWeb;
      if (!tronWeb?.contract) {
        throw new Error(
          'TronLink provider is missing. Open this page inside a TronLink-enabled browser.',
        );
      }

      const contractFactory = await tronWeb.contract();
      const tokenContract = await contractFactory.at(order.tokenAddress);
      const transferResult = await tokenContract
        .transfer(order.treasuryAddress, order.amountAtomic)
        .send();
      const transactionHash = extractTransactionHash(transferResult);

      const confirmed = await postApi<ManagerShareOrder>(
        `/managers/${managerSlug}/share-orders/${order.id}/confirm`,
        {
          buyerAddress,
          transactionHash,
        },
      );

      setLatestOrder(confirmed);
      await refreshFeed();
      setTone('success');
      setMessage(
        `Nile transfer submitted for ${confirmed.shares} ${confirmed.shareSymbol}. The purchase is now recorded under ${managerName}.`,
      );
    } catch (error) {
      setTone('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Failed to buy manager shares.',
      );
    } finally {
      setIsProcessing(false);
    }
  }

  async function refreshFeed() {
    try {
      const nextFeed = await fetchApi<ManagerShareOrdersResponse>(
        `/managers/${managerSlug}/share-orders`,
      );
      setFeed(nextFeed);
    } catch {
      // Leave the existing feed in place if the refresh fails.
    }
  }

  const shareStats = feed?.stats;
  const orderRows = feed?.orders ?? [];

  return (
    <div className="panel panel-nested atlas-content-card share-purchase-panel">
      <div className="tag-row">
        <span className="pill">Manager shares</span>
        <span className="chip">
          {formatMoney(offer.priceUsd)} {offer.asset} / share
        </span>
        <span className="chip">{offer.network}</span>
      </div>

      <div className="atlas-section-heading">
        <span className="atlas-kicker">Desk equity rail</span>
        <h3 className="share-purchase-title">
          Buy {managerName}
          {"'"}s manager shares directly on Nile.
        </h3>
      </div>

      <div className="atlas-stat-band atlas-stat-band-compact share-purchase-stats">
        <div className="atlas-stat-tile">
          <span className="atlas-stat-label">Share price</span>
          <strong className="atlas-stat-value">
            {formatMoney(offer.priceUsd)}
          </strong>
        </div>
        <div className="atlas-stat-tile">
          <span className="atlas-stat-label">Ticket size</span>
          <strong className="atlas-stat-value">
            {offer.minShares}-{offer.maxShares}
          </strong>
        </div>
        <div className="atlas-stat-tile">
          <span className="atlas-stat-label">Issued</span>
          <strong className="atlas-stat-value">{offer.issuedShares}</strong>
        </div>
        <div className="atlas-stat-tile">
          <span className="atlas-stat-label">Recorded buys</span>
          <strong className="atlas-stat-value">
            {shareStats?.recordedTransfers ?? '--'}
          </strong>
        </div>
      </div>

      <div className="share-purchase-layout">
        <div className="share-purchase-column">
          <div className="share-input-panel">
            <label className="stack-tight">
              <span className="atlas-inline-label">How many shares</span>
              <input
                className="input"
                type="number"
                min={offer.minShares}
                max={offer.maxShares}
                step={1}
                value={sharesInput}
                onChange={(event) => setSharesInput(event.target.value)}
              />
            </label>

            <div className="atlas-inline-stats atlas-inline-stats-wrap">
              <span>{shareCount} share(s)</span>
              <span>{formatMoney(totalUsd)} total</span>
              <span>{offer.purchaseRail}</span>
            </div>

            <div className="cta-row">
              <button
                type="button"
                className="button-link"
                onClick={connectWallet}
                disabled={isConnecting || isProcessing}
              >
                {isConnecting
                  ? 'Connecting...'
                  : walletStatus === 'ready'
                    ? 'Reconnect TronLink'
                    : 'Connect TronLink'}
              </button>
              <button
                type="button"
                className="button-link primary"
                onClick={handleBuyShares}
                disabled={isProcessing || !offer.enabled}
              >
                {isProcessing ? 'Submitting transfer...' : 'Buy shares on Nile'}
              </button>
            </div>

            <div className="atlas-subpanel">
              <div className="atlas-inline-row">
                <span className="atlas-inline-label">Wallet</span>
                <span className={walletStatus === 'ready' ? 'pill' : 'chip'}>
                  {walletStatus === 'ready' ? 'Connected' : 'Not connected'}
                </span>
              </div>
              <div className="share-code-list">
                <div className="share-code-row">
                  <span>Buyer</span>
                  <code>
                    {walletAddress ??
                      'Connect TronLink to auto-fill the sender address.'}
                  </code>
                </div>
                <div className="share-code-row">
                  <span>Treasury</span>
                  <code>{offer.treasuryAddress}</code>
                </div>
                <div className="share-code-row">
                  <span>Token</span>
                  <code>{offer.tokenAddress}</code>
                </div>
              </div>
            </div>

            <p className="muted">{offer.note}</p>
          </div>

          {latestOrder ? (
            <div className="atlas-subpanel">
              <div className="atlas-inline-row">
                <span className="atlas-inline-label">Latest order</span>
                <span className="pill">{latestOrder.status}</span>
              </div>
              <div className="share-code-list">
                <div className="share-code-row">
                  <span>Amount</span>
                  <code>
                    {formatMoney(latestOrder.amountUsd)}{' '}
                    {latestOrder.paymentAsset}
                  </code>
                </div>
                <div className="share-code-row">
                  <span>Atomic</span>
                  <code>{latestOrder.amountAtomic}</code>
                </div>
                <div className="share-code-row">
                  <span>Created</span>
                  <code>{formatDateTime(latestOrder.createdAt)}</code>
                </div>
                <div className="share-code-row">
                  <span>Explorer</span>
                  <code>
                    {latestOrder.explorerUrl ?? 'Waiting for transaction hash'}
                  </code>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="share-purchase-column">
          <div className="atlas-subpanel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">What holders get</span>
              <span className="chip">{offer.shareSymbol}</span>
            </div>
            <div className="standard-list">
              {offer.perks.map((perk) => (
                <div key={perk} className="standard-list__item">
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="atlas-subpanel">
            <div className="atlas-inline-row">
              <span className="atlas-inline-label">Desk sale ledger</span>
              <span className="chip">
                {shareStats?.totalShares ?? 0} shares recorded
              </span>
            </div>

            <div className="share-mini-stats">
              <span>{formatMoney(shareStats?.volumeUsd ?? 0)} volume</span>
              <span>{shareStats?.totalOrders ?? 0} total orders</span>
              <span>
                {shareStats?.lastOrderAt
                  ? formatDateTime(shareStats.lastOrderAt)
                  : 'No submitted transfer yet'}
              </span>
            </div>

            {orderRows.length ? (
              <div className="share-order-list">
                {orderRows.map((order) => (
                  <div key={order.id} className="share-order-card">
                    <div className="atlas-inline-row">
                      <strong>
                        {order.shares} x {order.shareSymbol}
                      </strong>
                      <span className="chip">{order.status}</span>
                    </div>
                    <div className="atlas-inline-stats atlas-inline-stats-wrap">
                      <span>{formatMoney(order.amountUsd)}</span>
                      <span>{formatDateTime(order.createdAt)}</span>
                    </div>
                    <div className="muted share-order-address">
                      {order.buyerAddress ?? 'Buyer pending'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="muted">
                No desk share transfer has been recorded yet for this manager.
              </div>
            )}
          </div>
        </div>
      </div>

      {message ? <div className={`feedback ${tone}`}>{message}</div> : null}
    </div>
  );
}

function hasTronProvider() {
  if (typeof window === 'undefined') {
    return false;
  }

  return Boolean(window.tronLink || window.tronWeb);
}

function getInjectedWalletAddress() {
  if (typeof window === 'undefined') {
    return null;
  }

  const address = window.tronWeb?.defaultAddress?.base58;
  return typeof address === 'string' && address.trim() ? address.trim() : null;
}

function extractTransactionHash(value: unknown) {
  if (typeof value === 'string' && value.trim()) {
    return value.trim();
  }

  if (value && typeof value === 'object') {
    const txid = (value as { txid?: unknown }).txid;
    if (typeof txid === 'string' && txid.trim()) {
      return txid.trim();
    }

    const txID = (value as { transaction?: { txID?: unknown } }).transaction
      ?.txID;
    if (typeof txID === 'string' && txID.trim()) {
      return txID.trim();
    }
  }

  throw new Error('TronLink did not return a transaction hash.');
}
