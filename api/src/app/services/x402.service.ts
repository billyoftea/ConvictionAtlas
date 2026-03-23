import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash, randomBytes, randomInt } from 'crypto';
import { createRequire } from 'module';
import { resolve } from 'path';
import { TronWeb } from 'tronweb';
import { pathToFileURL } from 'url';

const runtimeRequire = createRequire(__filename);
const runtimeImport = new Function(
  'modulePath',
  'return import(modulePath);',
) as (modulePath: string) => Promise<any>;
const {
  HTTPFacilitatorClient,
  x402ResourceServer,
} = runtimeRequire(
  resolve(process.cwd(), 'node_modules/@x402/core/dist/cjs/server/index.js'),
);
const {
  decodePaymentSignatureHeader,
  decodePaymentResponseHeader,
  encodePaymentRequiredHeader,
  encodePaymentResponseHeader,
} = runtimeRequire(
  resolve(process.cwd(), 'node_modules/@x402/core/dist/cjs/http/index.js'),
);

type Network = string;
type AssetAmount = {
  amount: string;
  asset: string;
  extra?: Record<string, unknown>;
};
type Price =
  | string
  | number
  | {
      amount: string;
      asset: string;
      extra?: Record<string, unknown>;
    };
type PaymentRequirements = {
  amount: string;
  asset: string;
  network: Network;
  scheme: string;
  extra?: Record<string, unknown>;
};
type PaymentRequired = {
  accepts: PaymentRequirements[];
  extensions?: Record<string, unknown>;
  [key: string]: unknown;
};
type SchemeSupport = {
  x402Version: number;
  scheme: string;
  network: Network;
  extra?: Record<string, unknown>;
};
interface SchemeNetworkServer {
  scheme: string;
  parsePrice(price: Price, network: Network): Promise<AssetAmount>;
  enhancePaymentRequirements(
    paymentRequirements: PaymentRequirements,
    supportedKind: SchemeSupport,
  ): Promise<PaymentRequirements>;
}

type TokenConfig = {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
};

type MockPaymentRequiredHeader = {
  kind: 'mock-payment-required';
  version: 1;
  paymentId: string;
  seller: string;
  buyer?: string;
  resourceId: string;
  resourceUrl: string;
  description: string;
  mimeType: string;
  customerRef?: string;
  message: string;
  paymentRequirements: PaymentRequirements;
  permitContext: ReturnType<typeof createPaymentPermitContext>;
};

type MockPaymentSignatureHeader = {
  kind: 'mock-payment-signature';
  version: 1;
  paymentId: string;
  resourceId: string;
  resourceUrl: string;
  payer: string;
  network: string;
  scheme: string;
  asset: string;
  amount: string;
  transaction: string;
  submittedAt: string;
};

type MockPaymentResponseHeader = {
  kind: 'mock-payment-response';
  version: 1;
  paymentId: string;
  payer: string;
  transaction: string;
  network: string;
  scheme: string;
  asset: string;
  amount: string;
  settledAt: string;
  facilitator: 'local-mock';
};

type MockHeaderEnvelope =
  | MockPaymentRequiredHeader
  | MockPaymentSignatureHeader
  | MockPaymentResponseHeader;

const TRON_TOKEN_REGISTRY: Record<string, Record<string, TokenConfig>> = {
  'tron:mainnet': {
    USDT: {
      symbol: 'USDT',
      name: 'Tether USD',
      address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
      decimals: 6,
    },
    USDD: {
      symbol: 'USDD',
      name: 'Decentralized USD',
      address: 'TXDk8mbtRbXeYuMNS83CfKPaYYT8XWv9Hz',
      decimals: 18,
    },
  },
  'tron:nile': {
    USDT: {
      symbol: 'USDT',
      name: 'Tether USD',
      address: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
      decimals: 6,
    },
    USDD: {
      symbol: 'USDD',
      name: 'Decentralized USD',
      address: 'TGjgvdTWWrybVLaVeFqSyVqJQWjxqRYbaK',
      decimals: 18,
    },
  },
};

let bankOfAiX402ModulePromise: Promise<any> | null = null;

async function loadBankOfAiX402() {
  if (!bankOfAiX402ModulePromise) {
    const moduleUrl = pathToFileURL(
      resolve(process.cwd(), 'node_modules/@bankofai/x402/dist/index.js'),
    ).href;
    bankOfAiX402ModulePromise = runtimeImport(moduleUrl);
  }

  return bankOfAiX402ModulePromise;
}

type ResourceSettlementSummary = {
  paymentId?: string;
  payer?: string;
  transaction?: string;
  network?: string;
  scheme: string;
  asset: string;
  amountUsd: number;
};

type ProtectedResourceConfig<TBody> = {
  paymentHeader?: string;
  customerRef?: string;
  resourceId: string;
  resourceUrl: string;
  description: string;
  mimeType: string;
  priceUsd: number;
  extra?: Record<string, unknown>;
  onSettled: (context: {
    customerRef?: string;
    paymentRequirements: PaymentRequirements;
    settlement: ResourceSettlementSummary;
  }) => Promise<TBody>;
};

type ProtectedResourceResponse<TBody> = {
  status: number;
  headers: Record<string, string>;
  body: TBody | PaymentRequired | { success: false; error: string };
};

class TronX402SchemeServer implements SchemeNetworkServer {
  readonly scheme: string;

  constructor(
    private readonly assetSymbol: string,
    scheme: string,
  ) {
    this.scheme = scheme;
  }

  async parsePrice(price: Price, network: Network): Promise<AssetAmount> {
    if (typeof price === 'object' && price !== null && 'amount' in price) {
      return {
        amount: price.amount,
        asset: price.asset,
        extra: price.extra ?? {},
      };
    }

    const token = getTokenConfig(network, this.assetSymbol);
    if (!token) {
      throw new Error(
        `No token configuration exists for ${this.assetSymbol} on ${network}.`,
      );
    }

    return {
      amount: convertToTokenAmount(
        parseMoneyToDecimal(price as string | number),
        token.decimals,
      ),
      asset: token.address,
      extra: {
        symbol: token.symbol,
        name: token.name,
        version: '1',
      },
    };
  }

  async enhancePaymentRequirements(
    paymentRequirements: PaymentRequirements,
    supportedKind: SchemeSupport,
  ): Promise<PaymentRequirements> {
    const mergedExtra: Record<string, unknown> = {
      ...(paymentRequirements.extra ?? {}),
    };
    const facilitatorExtra =
      supportedKind.extra && typeof supportedKind.extra === 'object'
        ? (supportedKind.extra as Record<string, unknown>)
        : null;

    if (facilitatorExtra) {
      const normalizedFee =
        normalizeFacilitatorFee(facilitatorExtra) ??
        normalizeFacilitatorFee(
          facilitatorExtra.fee && typeof facilitatorExtra.fee === 'object'
            ? (facilitatorExtra.fee as Record<string, unknown>)
            : null,
        );

      if (normalizedFee) {
        mergedExtra.fee = {
          ...(mergedExtra.fee && typeof mergedExtra.fee === 'object'
            ? (mergedExtra.fee as Record<string, unknown>)
            : {}),
          ...normalizedFee,
        };
      }

      if (typeof facilitatorExtra.caller === 'string') {
        mergedExtra.fee = {
          ...(mergedExtra.fee && typeof mergedExtra.fee === 'object'
            ? (mergedExtra.fee as Record<string, unknown>)
            : {}),
          caller: facilitatorExtra.caller,
        };
      }

      for (const [key, value] of Object.entries(facilitatorExtra)) {
        if (
          key === 'fee' ||
          key === 'feeTo' ||
          key === 'feeAmount' ||
          key === 'caller'
        ) {
          continue;
        }

        if (mergedExtra[key] === undefined) {
          mergedExtra[key] = value;
        }
      }
    }

    return {
      ...paymentRequirements,
      extra: mergedExtra,
    };
  }
}

@Injectable()
export class X402Service {
  private resourceServerPromise: Promise<any> | null = null;
  private buyerClient: any | null = null;

  constructor(private readonly configService: ConfigService) {}

  getMarketplaceRail() {
    return {
      protocol: 'x402',
      network: this.getNetwork(),
      asset: this.getAssetSymbol(),
      identityProvider: this.isMockMode()
        ? 'Local x402 Mock Facilitator'
        : '8004 On-chain Identity',
    };
  }

  isSellerConfigured() {
    if (this.isMockMode()) {
      return Boolean(
        this.getSellerAddress() && this.getNetwork() && this.getScheme(),
      );
    }

    return Boolean(
      this.getFacilitatorUrl() &&
        this.getSellerAddress() &&
        this.getNetwork() &&
        this.getScheme(),
    );
  }

  isBrokerConfigured() {
    try {
      if (this.isMockMode()) {
        return this.isSellerConfigured() && Boolean(this.getEffectiveBuyerAddress());
      }

      return this.isSellerConfigured() && Boolean(this.getBuyerPrivateKey());
    } catch {
      return false;
    }
  }

  async createProtectedResource<TBody>(
    config: ProtectedResourceConfig<TBody>,
  ): Promise<ProtectedResourceResponse<TBody>> {
    if (this.isMockMode()) {
      return this.createMockProtectedResource(config);
    }

    const server = await this.getResourceServer();
    const paymentRequired = await this.createPaymentRequiredResponse({
      resourceId: config.resourceId,
      resourceUrl: config.resourceUrl,
      description: config.description,
      mimeType: config.mimeType,
      priceUsd: config.priceUsd,
      extra: {
        ...config.extra,
        customerRef: config.customerRef ?? 'anonymous',
      },
    });

    if (!config.paymentHeader) {
      return {
        status: 402,
        headers: {
          'PAYMENT-REQUIRED': encodePaymentRequiredHeader(paymentRequired),
        },
        body: paymentRequired,
      };
    }

    const paymentPayload = decodePaymentSignatureHeader(config.paymentHeader);
    const paymentRequirements = server.findMatchingRequirements(
      paymentRequired.accepts,
      paymentPayload,
    );

    if (!paymentRequirements) {
      return {
        status: 400,
        headers: {},
        body: {
          success: false,
          error:
            'No matching payment requirement was found for the submitted signature.',
        },
      };
    }

    const verification = await server.verifyPayment(
      paymentPayload,
      paymentRequirements,
    );

    if (!verification.isValid) {
      return {
        status: 402,
        headers: {
          'PAYMENT-REQUIRED': encodePaymentRequiredHeader(paymentRequired),
        },
        body: {
          success: false,
          error: verification.invalidReason ?? 'Payment verification failed.',
        },
      };
    }

    const settlement = await server.settlePayment(
      paymentPayload,
      paymentRequirements,
      paymentRequired.extensions,
    );

    if (!settlement.success) {
      return {
        status: 402,
        headers: {
          'PAYMENT-REQUIRED': encodePaymentRequiredHeader(paymentRequired),
        },
        body: {
          success: false,
          error: settlement.errorReason ?? 'Payment settlement failed.',
        },
      };
    }

    const amountUsd = roundTokenAmountToUsd(
      paymentRequirements.amount,
      paymentRequirements.network,
      paymentRequirements.asset,
    );
    const settlementSummary: ResourceSettlementSummary = {
      paymentId: extractPaymentId(paymentPayload.payload),
      payer: settlement.payer,
      transaction: settlement.transaction,
      network: settlement.network,
      scheme: paymentRequirements.scheme,
      asset: paymentRequirements.asset,
      amountUsd,
    };
    const body = await config.onSettled({
      customerRef: config.customerRef,
      paymentRequirements,
      settlement: settlementSummary,
    });

    return {
      status: 200,
      headers: {
        'PAYMENT-RESPONSE': encodePaymentResponseHeader(settlement),
      },
      body,
    };
  }

  async payProtectedJson<TBody>(
    url: string,
    init?: RequestInit,
  ): Promise<{
    body: TBody;
    settlement?: { payer?: string; transaction?: string; network?: string };
  }> {
    if (!this.isBrokerConfigured()) {
      throw new Error(
        this.isMockMode()
          ? 'X402 mock broker is not configured. Set X402_SELLER_ADDRESS plus X402_BUYER_ADDRESS or X402_BUYER_PRIVATE_KEY.'
          : 'X402 buyer wallet is not configured. Set X402_BUYER_PRIVATE_KEY and seller-side x402 env vars first.',
      );
    }

    if (this.isMockMode()) {
      return this.payProtectedJsonMock(url, init);
    }

    const client = await this.getBuyerClient();
    const response = await client.request(url, init);
    const body = (await response.json()) as TBody;
    const paymentResponseHeader = response.headers.get('PAYMENT-RESPONSE');

    if (!response.ok) {
      throw new Error(extractErrorMessage(body, response.status));
    }

    if (!paymentResponseHeader) {
      return { body };
    }

    try {
      const settlement = decodePaymentResponseHeader(paymentResponseHeader);
      return {
        body,
        settlement: {
          payer: settlement.payer,
          transaction: settlement.transaction,
          network: settlement.network,
        },
      };
    } catch {
      return { body };
    }
  }

  private async createMockProtectedResource<TBody>({
    paymentHeader,
    customerRef,
    resourceId,
    resourceUrl,
    description,
    mimeType,
    priceUsd,
    extra,
    onSettled,
  }: ProtectedResourceConfig<TBody>): Promise<ProtectedResourceResponse<TBody>> {
    const paymentRequired = this.createMockPaymentRequiredResponse({
      resourceId,
      resourceUrl,
      description,
      mimeType,
      priceUsd,
      extra: {
        ...extra,
        customerRef: customerRef ?? 'anonymous',
      },
    });

    if (!paymentHeader) {
      return {
        status: 402,
        headers: {
          'PAYMENT-REQUIRED': encodeMockHeader(paymentRequired),
        },
        body: this.toMockPaymentRequiredBody(paymentRequired),
      };
    }

    let paymentPayload: MockPaymentSignatureHeader;
    try {
      paymentPayload = decodeMockHeader(
        paymentHeader,
        'mock-payment-signature',
      );
    } catch (error) {
      return {
        status: 400,
        headers: {},
        body: {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : 'Invalid mock payment signature header.',
        },
      };
    }

    const paymentRequirements = paymentRequired.paymentRequirements;
    if (
      paymentPayload.paymentId !== paymentRequired.paymentId ||
      paymentPayload.resourceId !== resourceId ||
      paymentPayload.resourceUrl !== resourceUrl
    ) {
      return {
        status: 400,
        headers: {},
        body: {
          success: false,
          error: 'Mock payment signature does not match the requested resource.',
        },
      };
    }

    if (
      paymentPayload.network !== paymentRequirements.network ||
      paymentPayload.scheme !== paymentRequirements.scheme ||
      paymentPayload.asset !== paymentRequirements.asset ||
      paymentPayload.amount !== paymentRequirements.amount
    ) {
      return {
        status: 400,
        headers: {},
        body: {
          success: false,
          error:
            'Mock payment signature does not match the required payment terms.',
        },
      };
    }

    const settlementSummary: ResourceSettlementSummary = {
      paymentId: paymentPayload.paymentId,
      payer: paymentPayload.payer,
      transaction: paymentPayload.transaction,
      network: paymentPayload.network,
      scheme: paymentRequirements.scheme,
      asset: paymentRequirements.asset,
      amountUsd: roundTokenAmountToUsd(
        paymentRequirements.amount,
        paymentRequirements.network,
        paymentRequirements.asset,
      ),
    };
    const body = await onSettled({
      customerRef,
      paymentRequirements,
      settlement: settlementSummary,
    });
    const paymentResponse = this.createMockPaymentResponse(
      paymentPayload,
      paymentRequirements,
    );

    return {
      status: 200,
      headers: {
        'PAYMENT-RESPONSE': encodeMockHeader(paymentResponse),
      },
      body,
    };
  }

  private async payProtectedJsonMock<TBody>(
    url: string,
    init?: RequestInit,
  ): Promise<{
    body: TBody;
    settlement?: { payer?: string; transaction?: string; network?: string };
  }> {
    const initialResponse = await fetch(url, init);
    const initialBody = await parseJsonResponse(initialResponse);
    const initialSettlement = decodeMockSettlementHeader(
      initialResponse.headers.get('PAYMENT-RESPONSE'),
    );

    if (initialResponse.ok) {
      return {
        body: initialBody as TBody,
        settlement: initialSettlement,
      };
    }

    if (initialResponse.status !== 402) {
      throw new Error(extractErrorMessage(initialBody, initialResponse.status));
    }

    const paymentRequiredHeader =
      initialResponse.headers.get('PAYMENT-REQUIRED');
    if (!paymentRequiredHeader) {
      throw new Error(
        'Mock x402 resource returned 402 without a PAYMENT-REQUIRED header.',
      );
    }

    const paymentRequired = decodeMockHeader(
      paymentRequiredHeader,
      'mock-payment-required',
    );
    const paymentSignature = this.createMockPaymentSignature(paymentRequired);
    const retryHeaders = new Headers(init?.headers ?? {});
    retryHeaders.set('PAYMENT-SIGNATURE', encodeMockHeader(paymentSignature));

    const settledResponse = await fetch(url, {
      ...(init ?? {}),
      headers: retryHeaders,
    });
    const settledBody = await parseJsonResponse(settledResponse);

    if (!settledResponse.ok) {
      throw new Error(extractErrorMessage(settledBody, settledResponse.status));
    }

    return {
      body: settledBody as TBody,
      settlement: decodeMockSettlementHeader(
        settledResponse.headers.get('PAYMENT-RESPONSE'),
      ),
    };
  }

  private createMockPaymentRequiredResponse(params: {
    resourceId: string;
    resourceUrl: string;
    description: string;
    mimeType: string;
    priceUsd: number;
    extra?: Record<string, unknown>;
  }): MockPaymentRequiredHeader {
    const token = getTokenConfig(this.getNetwork(), this.getAssetSymbol());
    if (!token) {
      throw new Error(
        `No token configuration exists for ${this.getAssetSymbol()} on ${this.getNetwork()}.`,
      );
    }

    const paymentId = buildMockPaymentId(
      params.resourceId,
      getStringValue(params.extra, 'customerRef'),
    );

    return {
      kind: 'mock-payment-required',
      version: 1,
      paymentId,
      seller: this.getSellerAddress(),
      buyer: this.safeGetEffectiveBuyerAddress() || undefined,
      resourceId: params.resourceId,
      resourceUrl: params.resourceUrl,
      description: params.description,
      mimeType: params.mimeType,
      customerRef: getStringValue(params.extra, 'customerRef'),
      message: 'Payment required to access this manager service.',
      paymentRequirements: {
        amount: convertToTokenAmount(params.priceUsd, token.decimals),
        asset: token.address,
        network: this.getNetwork(),
        scheme: this.getScheme(),
        extra: {
          symbol: token.symbol,
          name: token.name,
          version: 'mock',
          payTo: this.getSellerAddress(),
          ...params.extra,
        },
      },
      permitContext: createPaymentPermitContext(),
    };
  }

  private toMockPaymentRequiredBody(
    paymentRequired: MockPaymentRequiredHeader,
  ): PaymentRequired {
    return {
      x402Version: 2,
      error: paymentRequired.message,
      payer: paymentRequired.seller,
      resource: {
        url: paymentRequired.resourceUrl,
        description: paymentRequired.description,
        mimeType: paymentRequired.mimeType,
      },
      accepts: [paymentRequired.paymentRequirements],
      extensions: {
        mockMode: true,
        facilitator: 'local-x402-mock',
        paymentId: paymentRequired.paymentId,
        customerRef: paymentRequired.customerRef,
        buyerHint: paymentRequired.buyer,
        paymentPermitContext: {
          meta: paymentRequired.permitContext,
        },
      },
    };
  }

  private createMockPaymentSignature(
    paymentRequired: MockPaymentRequiredHeader,
  ): MockPaymentSignatureHeader {
    return {
      kind: 'mock-payment-signature',
      version: 1,
      paymentId: paymentRequired.paymentId,
      resourceId: paymentRequired.resourceId,
      resourceUrl: paymentRequired.resourceUrl,
      payer: this.getEffectiveBuyerAddress(),
      network: paymentRequired.paymentRequirements.network,
      scheme: paymentRequired.paymentRequirements.scheme,
      asset: paymentRequired.paymentRequirements.asset,
      amount: paymentRequired.paymentRequirements.amount,
      transaction: `mock_tx_${randomBytes(12).toString('hex')}`,
      submittedAt: new Date().toISOString(),
    };
  }

  private createMockPaymentResponse(
    paymentSignature: MockPaymentSignatureHeader,
    paymentRequirements: PaymentRequirements,
  ): MockPaymentResponseHeader {
    return {
      kind: 'mock-payment-response',
      version: 1,
      paymentId: paymentSignature.paymentId,
      payer: paymentSignature.payer,
      transaction: paymentSignature.transaction,
      network: paymentSignature.network,
      scheme: paymentRequirements.scheme,
      asset: paymentRequirements.asset,
      amount: paymentRequirements.amount,
      settledAt: new Date().toISOString(),
      facilitator: 'local-mock',
    };
  }

  private async createPaymentRequiredResponse(params: {
    resourceId: string;
    resourceUrl: string;
    description: string;
    mimeType: string;
    priceUsd: number;
    extra?: Record<string, unknown>;
  }) {
    const server = await this.getResourceServer();
    const requirements = await server.buildPaymentRequirements({
      scheme: this.getScheme(),
      network: this.getNetwork(),
      payTo: this.getSellerAddress(),
      price: `$${params.priceUsd.toFixed(2)}`,
      extra: params.extra,
    });

    return server.createPaymentRequiredResponse(
      requirements,
      {
        url: params.resourceUrl,
        description: params.description,
        mimeType: params.mimeType,
      },
      'Payment required to access this manager service.',
      {
        paymentPermitContext: {
          meta: createPaymentPermitContext(),
        },
      },
    );
  }

  private async getResourceServer() {
    if (!this.resourceServerPromise) {
      this.resourceServerPromise = this.buildResourceServer();
    }

    return this.resourceServerPromise;
  }

  private async buildResourceServer() {
    if (!this.isSellerConfigured()) {
      throw new Error(
        'X402 seller configuration is incomplete. Set X402_FACILITATOR_URL, X402_SELLER_ADDRESS, X402_NETWORK, and X402_SCHEME.',
      );
    }

    const facilitatorApiKey = this.getFacilitatorApiKey();
    const facilitator = new HTTPFacilitatorClient({
      url: this.getFacilitatorUrl(),
      createAuthHeaders: facilitatorApiKey
        ? async () => ({
            verify: { 'X-API-KEY': facilitatorApiKey },
            settle: { 'X-API-KEY': facilitatorApiKey },
            supported: { 'X-API-KEY': facilitatorApiKey },
          })
        : undefined,
    });
    const resourceServer = new x402ResourceServer(facilitator).register(
      this.getNetwork(),
      new TronX402SchemeServer(this.getAssetSymbol(), this.getScheme()),
    );

    try {
      await resourceServer.initialize();
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : 'Unknown facilitator error.';
      throw new ServiceUnavailableException(
        `x402 facilitator initialization failed. ${detail} Check X402_FACILITATOR_URL and, if you have one, set X402_FACILITATOR_API_KEY.`,
      );
    }

    return resourceServer;
  }

  private async getBuyerClient() {
    if (!this.buyerClient) {
      const buyerPrivateKey = this.getBuyerPrivateKey();
      if (!buyerPrivateKey) {
        throw new Error('X402_BUYER_PRIVATE_KEY is not configured.');
      }

      this.getEffectiveBuyerAddress();

      const {
        ExactPermitTronClientMechanism,
        ExactTronClientMechanism,
        TronClientSigner,
        X402Client,
        X402FetchClient,
      } = await loadBankOfAiX402();

      const signer = new TronClientSigner(buyerPrivateKey);
      const client = new X402Client();
      const scheme = this.getScheme();

      if (scheme === 'exact') {
        client.register(this.getNetwork(), new ExactTronClientMechanism(signer));
      } else {
        client.register(
          this.getNetwork(),
          new ExactPermitTronClientMechanism(signer),
        );
      }

      this.buyerClient = new X402FetchClient(client);
    }

    return this.buyerClient;
  }

  private isMockMode() {
    return this.configService.get<string>('X402_MOCK_MODE')?.trim() === 'true';
  }

  private getFacilitatorUrl() {
    return this.configService.get<string>('X402_FACILITATOR_URL')?.trim() ?? '';
  }

  private getFacilitatorApiKey() {
    return (
      this.configService.get<string>('X402_FACILITATOR_API_KEY')?.trim() ?? ''
    );
  }

  private getSellerAddress() {
    return this.configService.get<string>('X402_SELLER_ADDRESS')?.trim() ?? '';
  }

  private getBuyerPrivateKey() {
    return this.configService.get<string>('X402_BUYER_PRIVATE_KEY')?.trim() ?? '';
  }

  private getBuyerAddress() {
    return this.configService.get<string>('X402_BUYER_ADDRESS')?.trim() ?? '';
  }

  private getEffectiveBuyerAddress() {
    const configuredBuyerAddress = this.getBuyerAddress();
    const buyerPrivateKey = this.getBuyerPrivateKey();

    if (!buyerPrivateKey) {
      if (!configuredBuyerAddress) {
        throw new Error(
          'X402_BUYER_ADDRESS or X402_BUYER_PRIVATE_KEY must be configured.',
        );
      }

      return configuredBuyerAddress;
    }

    const derivedBuyerAddress = TronWeb.address.fromPrivateKey(buyerPrivateKey);
    if (typeof derivedBuyerAddress !== 'string' || !derivedBuyerAddress.trim()) {
      throw new Error('X402_BUYER_PRIVATE_KEY is invalid.');
    }

    if (
      configuredBuyerAddress &&
      derivedBuyerAddress !== configuredBuyerAddress
    ) {
      throw new Error(
        `X402_BUYER_ADDRESS does not match the configured X402_BUYER_PRIVATE_KEY. Expected ${derivedBuyerAddress}.`,
      );
    }

    return configuredBuyerAddress || derivedBuyerAddress;
  }

  private safeGetEffectiveBuyerAddress() {
    try {
      return this.getEffectiveBuyerAddress();
    } catch {
      return '';
    }
  }

  private getNetwork(): Network {
    return (
      this.configService.get<string>('X402_NETWORK')?.trim() ?? 'tron:nile'
    ) as Network;
  }

  private getAssetSymbol() {
    return this.configService.get<string>('X402_ASSET_SYMBOL')?.trim() ?? 'USDT';
  }

  private getScheme() {
    return (
      this.configService.get<string>('X402_SCHEME')?.trim() ?? 'exact_permit'
    );
  }
}

function parseMoneyToDecimal(money: string | number) {
  if (typeof money === 'number') {
    return money;
  }

  const cleanMoney = money.replace(/^\$/, '').trim();
  const amount = Number.parseFloat(cleanMoney);
  if (!Number.isFinite(amount)) {
    throw new Error(`Invalid money format: ${money}`);
  }

  return amount;
}

function convertToTokenAmount(decimalAmount: number, decimals: number) {
  const [intPart, decPart = ''] = decimalAmount.toString().split('.');
  const padded = decPart.padEnd(decimals, '0').slice(0, decimals);
  return `${intPart}${padded}`.replace(/^0+/, '') || '0';
}

function normalizeFacilitatorFee(value: Record<string, unknown> | null) {
  if (!value) {
    return null;
  }

  const feeTo =
    typeof value.feeTo === 'string' && value.feeTo.trim()
      ? value.feeTo.trim()
      : null;
  const feeAmount =
    typeof value.feeAmount === 'string' && value.feeAmount.trim()
      ? value.feeAmount.trim()
      : null;
  const caller =
    typeof value.caller === 'string' && value.caller.trim()
      ? value.caller.trim()
      : null;
  const facilitatorId =
    typeof value.facilitatorId === 'string' && value.facilitatorId.trim()
      ? value.facilitatorId.trim()
      : null;

  if (!feeTo && !feeAmount && !caller && !facilitatorId) {
    return null;
  }

  return {
    ...(feeTo ? { feeTo } : {}),
    ...(feeAmount ? { feeAmount } : {}),
    ...(caller ? { caller } : {}),
    ...(facilitatorId ? { facilitatorId } : {}),
  };
}

function createPaymentPermitContext() {
  const now = Math.floor(Date.now() / 1000);

  return {
    kind: 'PAYMENT_ONLY',
    paymentId: `0x${randomBytes(16).toString('hex')}`,
    nonce: randomInt(1_000_000, 9_999_999_999).toString(),
    validAfter: now - 30,
    validBefore: now + 15 * 60,
  };
}

function roundTokenAmountToUsd(
  amount: string,
  network: string,
  assetAddress: string,
) {
  const token = getTokenConfig(network, findTokenSymbol(network, assetAddress) ?? 'USDT');
  const decimals = token?.decimals ?? 6;
  const numeric = Number(amount) / 10 ** decimals;
  return Number.isFinite(numeric) ? Number(numeric.toFixed(2)) : 0;
}

function findTokenSymbol(network: string, assetAddress: string) {
  const tokens = TRON_TOKEN_REGISTRY[network] ?? {};
  for (const [symbol, token] of Object.entries(tokens)) {
    if (token.address.toLowerCase() === assetAddress.toLowerCase()) {
      return symbol;
    }
  }

  return null;
}

function getTokenConfig(network: string, symbol: string) {
  return TRON_TOKEN_REGISTRY[network]?.[symbol] ?? null;
}

function extractPaymentId(payload: Record<string, unknown>) {
  const permit =
    payload.paymentPermit && typeof payload.paymentPermit === 'object'
      ? (payload.paymentPermit as Record<string, unknown>)
      : null;
  const meta =
    permit?.meta && typeof permit.meta === 'object'
      ? (permit.meta as Record<string, unknown>)
      : null;

  return typeof meta?.paymentId === 'string' ? meta.paymentId : undefined;
}

function encodeMockHeader(payload: MockHeaderEnvelope) {
  return Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url');
}

function decodeMockHeader<TKind extends MockHeaderEnvelope['kind']>(
  value: string,
  expectedKind: TKind,
): Extract<MockHeaderEnvelope, { kind: TKind }> {
  let parsed: unknown;

  try {
    parsed = JSON.parse(Buffer.from(value, 'base64url').toString('utf8'));
  } catch {
    throw new Error(`Invalid ${expectedKind} header encoding.`);
  }

  if (!parsed || typeof parsed !== 'object') {
    throw new Error(`Invalid ${expectedKind} header payload.`);
  }

  if ((parsed as { kind?: string }).kind !== expectedKind) {
    throw new Error(`Unexpected mock header kind. Expected ${expectedKind}.`);
  }

  return parsed as Extract<MockHeaderEnvelope, { kind: TKind }>;
}

function decodeMockSettlementHeader(value: string | null) {
  if (!value) {
    return undefined;
  }

  try {
    const header = decodeMockHeader(value, 'mock-payment-response');
    return {
      payer: header.payer,
      transaction: header.transaction,
      network: header.network,
    };
  } catch {
    return undefined;
  }
}

async function parseJsonResponse(response: Response) {
  const text = await response.text();
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return {
      error: text,
    };
  }
}

function extractErrorMessage(body: unknown, status: number) {
  if (body && typeof body === 'object' && 'error' in body) {
    const message = (body as { error?: unknown }).error;
    if (typeof message === 'string' && message.trim()) {
      return message;
    }
  }

  return `Protected x402 request failed with status ${status}.`;
}

function getStringValue(
  record: Record<string, unknown> | undefined,
  key: string,
) {
  const value = record?.[key];
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function buildMockPaymentId(resourceId: string, customerRef?: string) {
  return `mockpay_${createHash('sha256')
    .update(`${resourceId}:${customerRef ?? 'anonymous'}`)
    .digest('hex')
    .slice(0, 24)}`;
}
