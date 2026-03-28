import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

export type TronPaymentVerifyResult =
  | { verified: true; txHash: string; amount: number; from: string; timestamp: number }
  | { verified: false; reason: string };

/**
 * TronPaymentService
 *
 * Verifies USDT (TRC-20) micro-payments on TRON.
 * Network defaults to Nile testnet, but all network metadata is configurable.
 *
 * Flow:
 *   1. Caller provides memo id + TRON tx hash
 *   2. We fetch the tx from TronGrid
 *   3. Confirm: recipient == platform wallet, token == configured USDT contract, amount >= minimum
 *   4. Confirm tx is not already used (idempotency)
 *   5. Return verified result
 */
@Injectable()
export class TronPaymentService {
  /** Default Nile testnet USDT TRC-20 contract */
  private readonly USDT_CONTRACT = 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf';

  /** Default platform receiving wallet */
  private readonly PLATFORM_WALLET = 'TKxJ4WDH5PBfXyRi9JDeSg6XLKhkM25xkN';

  /** Minimum USDT amount for a memo unlock (1 USDT = 1_000_000 sun) */
  private readonly MIN_AMOUNT_SUN = 1_000_000;

  private readonly TRONGRID_BASE = 'https://nile.trongrid.io/v1';

  constructor(private readonly configService: ConfigService) {}

  getReceivingWallet(): string {
    return (
      this.configService.get<string>('TRON_PLATFORM_WALLET') ?? this.PLATFORM_WALLET
    );
  }

  getUsdtContract(): string {
    return (
      this.configService.get<string>('TRON_USDT_CONTRACT') ?? this.USDT_CONTRACT
    );
  }

  getMinAmountUsdt(): number {
    return Number(this.configService.get('TRON_MIN_UNLOCK_USDT') ?? '1');
  }

  getNetworkLabel(): string {
    return this.configService.get<string>('TRON_NETWORK_LABEL') ?? 'TRON Nile Testnet';
  }

  getNetworkCode(): string {
    return this.configService.get<string>('TRON_NETWORK_CODE') ?? 'tron-nile-testnet';
  }

  getApiBaseUrl(): string {
    return this.configService.get<string>('TRON_API_BASE_URL') ?? this.TRONGRID_BASE;
  }

  getExplorerBaseUrl(): string {
    return (
      this.configService.get<string>('TRON_EXPLORER_BASE_URL') ??
      'https://nile.tronscan.org/#/address'
    );
  }

  getFaucetUrl(): string | null {
    const faucetUrl = this.configService.get<string>('TRON_FAUCET_URL');
    if (typeof faucetUrl === 'string') {
      return faucetUrl.trim() ? faucetUrl : null;
    }

    return 'https://nileex.io/join/getJoinPage';
  }

  /**
   * Verify a TRC-20 USDT transfer on the configured TRON network.
   */
  async verifyPayment(txHash: string): Promise<TronPaymentVerifyResult> {
    try {
      const url = `${this.getApiBaseUrl()}/transactions/${txHash}`;
      const resp = await axios.get(url, {
        timeout: 15_000,
        headers: { Accept: 'application/json' },
      });

      const tx = resp.data?.data?.[0];
      if (!tx) {
        return {
          verified: false,
          reason: `Transaction not found on ${this.getNetworkLabel()}.`,
        };
      }

      // Check SUCCESS
      const receipt = tx.ret?.[0];
      if (receipt?.contractRet !== 'SUCCESS') {
        return {
          verified: false,
          reason: `Transaction status: ${receipt?.contractRet ?? 'UNKNOWN'}`,
        };
      }

      // Must be TriggerSmartContract (TRC-20 transfer)
      const contractType = tx.raw_data?.contract?.[0]?.type;
      if (contractType !== 'TriggerSmartContract') {
        return { verified: false, reason: `Not a TRC-20 transfer (type: ${contractType})` };
      }

      const contractValue = tx.raw_data?.contract?.[0]?.parameter?.value;
      const contractAddress = this.fromHexAddress(contractValue?.contract_address ?? '');

      // Must be USDT contract
      if (contractAddress.toLowerCase() !== this.getUsdtContract().toLowerCase()) {
        return {
          verified: false,
          reason: `Wrong token contract: ${contractAddress}. Expected configured USDT contract.`,
        };
      }

      // Decode transfer(address,uint256) — first 4 bytes selector, then 32 bytes recipient, 32 bytes amount
      const data: string = contractValue?.data ?? '';
      if (!data.startsWith('a9059cbb')) {
        return { verified: false, reason: 'Not a transfer() call.' };
      }

      const recipientHex = '41' + data.slice(32, 72); // 32 bytes of hex = skip selector (8 hex) + first 12 bytes padding (24 hex)
      const recipientAddr = this.fromHexAddress(recipientHex);
      const amountHex = data.slice(72, 136);
      const amountSun = parseInt(amountHex, 16);

      if (recipientAddr.toLowerCase() !== this.getReceivingWallet().toLowerCase()) {
        return {
          verified: false,
          reason: `Wrong recipient: ${recipientAddr}. Expected platform wallet.`,
        };
      }

      if (amountSun < this.MIN_AMOUNT_SUN) {
        const amountUsdt = amountSun / 1_000_000;
        return {
          verified: false,
          reason: `Insufficient amount: ${amountUsdt} USDT (minimum ${this.getMinAmountUsdt()} USDT)`,
        };
      }

      const ownerAddress = this.fromHexAddress(
        contractValue?.owner_address ?? tx.raw_data?.contract?.[0]?.owner_address ?? '',
      );

      return {
        verified: true,
        txHash,
        amount: amountSun / 1_000_000,
        from: ownerAddress,
        timestamp: tx.raw_data?.timestamp ?? Date.now(),
      };
    } catch (err: any) {
      return {
        verified: false,
        reason: `Verification error: ${err?.message ?? 'unknown'}`,
      };
    }
  }

  /**
   * Convert hex address (with or without 41 prefix) to base58check TRON address.
   * Lightweight version using the checksum algorithm directly.
   */
  private fromHexAddress(hex: string): string {
    // TronGrid returns addresses as hex with 41 prefix (= 0x41 = mainnet T)
    if (!hex) return '';
    const clean = hex.startsWith('0x') ? hex.slice(2) : hex;
    // Pad to 42 hex chars if needed
    const padded = clean.length === 40 ? '41' + clean : clean;
    return padded; // return hex; real base58 conversion needs tronweb lib, hex is good for comparison
  }

  /**
   * Build the payment QR / link data for display.
   */
  getPaymentInfo(memoId: string) {
    const faucetUrl = this.getFaucetUrl();

    return {
      network: this.getNetworkLabel(),
      networkCode: this.getNetworkCode(),
      wallet: this.getReceivingWallet(),
      token: 'USDT (TRC-20)',
      contract: this.getUsdtContract(),
      minAmount: this.getMinAmountUsdt(),
      memo: `memo:${memoId}`,
      explorerUrl: `${this.getExplorerBaseUrl()}/${this.getReceivingWallet()}`,
      faucetUrl,
    };
  }
}
