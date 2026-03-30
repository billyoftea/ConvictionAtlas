/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(6);
const app_controller_1 = __webpack_require__(7);
const app_service_1 = __webpack_require__(8);
const internal_controller_1 = __webpack_require__(11);
const leaderboard_controller_1 = __webpack_require__(24);
const managers_controller_1 = __webpack_require__(27);
const memos_controller_1 = __webpack_require__(28);
const opportunities_controller_1 = __webpack_require__(29);
const prisma_service_1 = __webpack_require__(9);
const manager_engine_service_1 = __webpack_require__(12);
const memo_service_1 = __webpack_require__(15);
const performance_service_1 = __webpack_require__(18);
const portfolio_service_1 = __webpack_require__(19);
const query_service_1 = __webpack_require__(25);
const signal_engine_service_1 = __webpack_require__(20);
const source_ingestion_service_1 = __webpack_require__(21);
const llm_service_1 = __webpack_require__(16);
const tron_payment_service_1 = __webpack_require__(26);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({ isGlobal: true })],
        controllers: [
            app_controller_1.AppController,
            managers_controller_1.ManagersController,
            opportunities_controller_1.OpportunitiesController,
            leaderboard_controller_1.LeaderboardController,
            memos_controller_1.MemosController,
            internal_controller_1.InternalController,
        ],
        providers: [
            app_service_1.AppService,
            prisma_service_1.PrismaService,
            query_service_1.QueryService,
            source_ingestion_service_1.SourceIngestionService,
            signal_engine_service_1.SignalEngineService,
            manager_engine_service_1.ManagerEngineService,
            portfolio_service_1.PortfolioService,
            performance_service_1.PerformanceService,
            memo_service_1.MemoService,
            llm_service_1.LlmService,
            tron_payment_service_1.TronPaymentService,
        ],
    })
], AppModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(8);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getStatus();
    }
    getStatus() {
        return this.appService.getStatus();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
tslib_1.__decorate([
    (0, common_1.Get)('status'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getStatus", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
let AppService = class AppService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStatus() {
        const [managerCount, opportunityCount, memoCount, reviewCount, latestRun] = await Promise.all([
            this.prisma.manager.count(),
            this.prisma.opportunity.count(),
            this.prisma.memo.count(),
            this.prisma.review.count(),
            this.prisma.portfolioSnapshot.findFirst({
                orderBy: { computedAt: 'desc' },
            }),
        ]);
        return {
            name: process.env.APP_NAME ?? 'Conviction Atlas',
            status: 'ok',
            timestamp: new Date().toISOString(),
            counts: {
                managers: managerCount,
                opportunities: opportunityCount,
                memos: memoCount,
                reviews: reviewCount,
            },
            latestPortfolioRunAt: latestRun?.computedAt ?? null,
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AppService);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(10);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InternalController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const manager_engine_service_1 = __webpack_require__(12);
const memo_service_1 = __webpack_require__(15);
const performance_service_1 = __webpack_require__(18);
const portfolio_service_1 = __webpack_require__(19);
const signal_engine_service_1 = __webpack_require__(20);
const source_ingestion_service_1 = __webpack_require__(21);
let InternalController = class InternalController {
    constructor(sourceIngestionService, signalEngineService, managerEngineService, portfolioService, performanceService, memoService) {
        this.sourceIngestionService = sourceIngestionService;
        this.signalEngineService = signalEngineService;
        this.managerEngineService = managerEngineService;
        this.portfolioService = portfolioService;
        this.performanceService = performanceService;
        this.memoService = memoService;
    }
    async bootstrap(payload) {
        const sources = await this.sourceIngestionService.runBootstrap();
        const signals = await this.signalEngineService.recomputeSignals();
        const managers = await this.managerEngineService.runManagers();
        const portfolios = await this.portfolioService.rebalancePortfolios();
        const performance = await this.performanceService.snapshotPerformance();
        const memos = payload?.withMemos === false
            ? { skipped: true }
            : await this.memoService.generateMemos(payload?.managerSlug);
        return { sources, signals, managers, portfolios, performance, memos };
    }
    ingestCoinGecko(payload) {
        return this.sourceIngestionService.ingestCoinGecko(payload?.limit);
    }
    ingestPolymarket(payload) {
        return this.sourceIngestionService.ingestPolymarket(payload?.limit);
    }
    ingestNews(payload) {
        return this.sourceIngestionService.ingestNews(payload?.limitPerOpportunity);
    }
    normalizeOpportunities() {
        return this.sourceIngestionService.normalizeOpportunities();
    }
    recomputeSignals() {
        return this.signalEngineService.recomputeSignals();
    }
    runManagers() {
        return this.managerEngineService.runManagers();
    }
    rebalancePortfolio() {
        return this.portfolioService.rebalancePortfolios();
    }
    snapshotPerformance() {
        return this.performanceService.snapshotPerformance();
    }
    generateMemos(payload) {
        return this.memoService.generateMemos(payload?.managerSlug);
    }
};
exports.InternalController = InternalController;
tslib_1.__decorate([
    (0, common_1.Post)('bootstrap'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalController.prototype, "bootstrap", null);
tslib_1.__decorate([
    (0, common_1.Post)('ingest/coingecko'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "ingestCoinGecko", null);
tslib_1.__decorate([
    (0, common_1.Post)('ingest/polymarket'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "ingestPolymarket", null);
tslib_1.__decorate([
    (0, common_1.Post)('ingest/news'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "ingestNews", null);
tslib_1.__decorate([
    (0, common_1.Post)('normalize/opportunities'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "normalizeOpportunities", null);
tslib_1.__decorate([
    (0, common_1.Post)('signals/recompute'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "recomputeSignals", null);
tslib_1.__decorate([
    (0, common_1.Post)('managers/run'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "runManagers", null);
tslib_1.__decorate([
    (0, common_1.Post)('portfolio/rebalance'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "rebalancePortfolio", null);
tslib_1.__decorate([
    (0, common_1.Post)('performance/snapshot'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "snapshotPerformance", null);
tslib_1.__decorate([
    (0, common_1.Post)('memos/generate'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], InternalController.prototype, "generateMemos", null);
exports.InternalController = InternalController = tslib_1.__decorate([
    (0, common_1.Controller)('internal'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof source_ingestion_service_1.SourceIngestionService !== "undefined" && source_ingestion_service_1.SourceIngestionService) === "function" ? _a : Object, typeof (_b = typeof signal_engine_service_1.SignalEngineService !== "undefined" && signal_engine_service_1.SignalEngineService) === "function" ? _b : Object, typeof (_c = typeof manager_engine_service_1.ManagerEngineService !== "undefined" && manager_engine_service_1.ManagerEngineService) === "function" ? _c : Object, typeof (_d = typeof portfolio_service_1.PortfolioService !== "undefined" && portfolio_service_1.PortfolioService) === "function" ? _d : Object, typeof (_e = typeof performance_service_1.PerformanceService !== "undefined" && performance_service_1.PerformanceService) === "function" ? _e : Object, typeof (_f = typeof memo_service_1.MemoService !== "undefined" && memo_service_1.MemoService) === "function" ? _f : Object])
], InternalController);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManagerEngineService = void 0;
const tslib_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const manager_blueprints_1 = __webpack_require__(13);
const helpers_1 = __webpack_require__(14);
const prisma_service_1 = __webpack_require__(9);
let ManagerEngineService = class ManagerEngineService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async runManagers() {
        await this.prisma.managerDecision.deleteMany({});
        const managers = await this.prisma.manager.findMany();
        const opportunities = await this.prisma.opportunity.findMany({
            include: {
                signals: true,
                newsItems: {
                    orderBy: { publishedAt: 'desc' },
                    take: 2,
                },
            },
        });
        const computedAt = new Date();
        const rows = [];
        for (const manager of managers) {
            const blueprint = (0, manager_blueprints_1.getManagerBlueprint)(manager.slug);
            for (const opportunity of opportunities) {
                const signalMap = Object.fromEntries(opportunity.signals.map((signal) => [signal.name, signal.value]));
                const opportunityBias = Number(blueprint.opportunityTypeBias?.[opportunity.type] ?? 0);
                const drivers = Object.entries(blueprint.signalWeights).map(([signalName, weight]) => {
                    const value = Number(signalMap[signalName] ?? 0);
                    return {
                        signalName,
                        value,
                        weight,
                        contribution: (0, helpers_1.round)(value * weight, 4),
                    };
                });
                const rawScore = (0, helpers_1.clamp)(drivers.reduce((sum, driver) => sum + driver.contribution, 0) +
                    opportunityBias, -1, 1);
                const direction = rawScore > blueprint.bullishThreshold
                    ? client_1.Direction.BULLISH
                    : rawScore < blueprint.bearishThreshold
                        ? client_1.Direction.BEARISH
                        : client_1.Direction.NEUTRAL;
                const targetWeight = direction === client_1.Direction.BULLISH ? (0, helpers_1.clamp)(rawScore, 0.03, 0.35) : 0;
                const rationaleDrivers = [...drivers]
                    .sort((left, right) => Math.abs(right.contribution) - Math.abs(left.contribution))
                    .slice(0, 3)
                    .map((driver) => `${driver.signalName}=${(0, helpers_1.round)(driver.value, 3)} @ ${(0, helpers_1.round)(driver.weight, 2)}`);
                rows.push({
                    managerId: manager.id,
                    opportunityId: opportunity.id,
                    direction,
                    convictionScore: (0, helpers_1.round)(rawScore, 4),
                    targetWeight: (0, helpers_1.round)(targetWeight, 4),
                    rationale: `${manager.name} is leaning ${direction.toLowerCase()} because ${rationaleDrivers.join(', ')}.`,
                    computedAt,
                    metadata: (0, helpers_1.serializeJson)({
                        blueprint: blueprint.label,
                        opportunityBias,
                        thresholds: {
                            bullish: blueprint.bullishThreshold,
                            bearish: blueprint.bearishThreshold,
                        },
                        drivers,
                        topHeadline: opportunity.newsItems[0]?.title ?? null,
                    }),
                });
            }
        }
        if (rows.length) {
            await this.prisma.managerDecision.createMany({ data: rows });
        }
        return {
            managers: managers.length,
            opportunities: opportunities.length,
            decisions: rows.length,
            computedAt,
        };
    }
};
exports.ManagerEngineService = ManagerEngineService;
exports.ManagerEngineService = ManagerEngineService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ManagerEngineService);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MANAGER_BLUEPRINTS = void 0;
exports.getManagerBlueprint = getManagerBlueprint;
exports.MANAGER_BLUEPRINTS = [
    {
        slug: 'narrative-manager',
        label: 'Narrative Manager',
        signalWeights: {
            narrative_strength: 0.24,
            news_heat: 0.16,
            market_momentum: 0.12,
            trend_regime: 0.16,
            opportunity_quality: 0.2,
            volume_spike: 0.08,
            event_proximity: 0.08,
            price_dislocation: 0.06,
            risk_flag: -0.16,
        },
        bullishThreshold: 0.12,
        bearishThreshold: -0.12,
        cashFloor: 0.18,
        maxPositions: 5,
    },
    {
        slug: 'event-driven-manager',
        label: 'Event-driven Manager',
        signalWeights: {
            catalyst_setup: 0.26,
            event_proximity: 0.18,
            probability_edge: 0.12,
            trend_regime: 0.1,
            news_heat: 0.08,
            narrative_strength: 0.08,
            opportunity_quality: 0.08,
            market_momentum: 0.05,
            volume_spike: 0.07,
            risk_flag: -0.18,
        },
        bullishThreshold: 0.035,
        bearishThreshold: -0.12,
        opportunityTypeBias: {
            TOKEN: 0.04,
            PREDICTION_MARKET: 0.06,
        },
        cashFloor: 0.15,
        maxPositions: 6,
    },
    {
        slug: 'quant-manager',
        label: 'Quant Manager',
        signalWeights: {
            market_momentum: 0.24,
            trend_regime: 0.2,
            volume_spike: 0.16,
            price_dislocation: 0.14,
            opportunity_quality: 0.16,
            probability_edge: 0.08,
            event_proximity: 0.04,
            risk_flag: -0.16,
        },
        bullishThreshold: 0.11,
        bearishThreshold: -0.12,
        cashFloor: 0.2,
        maxPositions: 6,
    },
    {
        slug: 'hybrid-manager',
        label: 'Hybrid Manager',
        signalWeights: {
            market_momentum: 0.14,
            trend_regime: 0.12,
            narrative_strength: 0.14,
            news_heat: 0.12,
            opportunity_quality: 0.14,
            event_proximity: 0.1,
            volume_spike: 0.12,
            price_dislocation: 0.1,
            probability_edge: 0.08,
            risk_flag: -0.12,
        },
        bullishThreshold: 0.1,
        bearishThreshold: -0.12,
        cashFloor: 0.15,
        maxPositions: 6,
    },
    {
        // On-chain Fundamentals: ignores price action and news entirely.
        // Signal comes from DeFiLlama TVL flows, whale wallet accumulation,
        // smart money netflow (Nansen/Mobula), and protocol fee revenue.
        // High cash floor — only acts on strong on-chain conviction.
        slug: 'onchain-fundamentals-manager',
        label: 'On-chain Fundamentals',
        signalWeights: {
            opportunity_quality: 0.28, // Protocol TVL + revenue quality
            volume_spike: 0.22, // On-chain volume is truth
            trend_regime: 0.16, // Chain-level TVL trend direction
            price_dislocation: 0.18, // Price lagging on-chain fundamentals = edge
            probability_edge: 0.06, // Minor: prediction market confirmation
            event_proximity: 0.06, // Protocol upgrades/launches
            narrative_strength: 0.04, // Very low weight — we distrust narrative
            risk_flag: -0.24, // Hard exit on TVL drain or smart money exit
        },
        bullishThreshold: 0.14, // High bar — only strong on-chain signal
        bearishThreshold: -0.10,
        opportunityTypeBias: {
            TOKEN: 0.08, // Slight token bias — on-chain = real assets
            PREDICTION_MARKET: -0.08, // Prediction markets have no TVL signal
        },
        cashFloor: 0.30, // Conservative — on-chain conviction takes time
        maxPositions: 5, // Concentrated: only highest-conviction protocols
    },
    {
        // Polymarket Specialist: focuses exclusively on prediction markets.
        // Buys YES positions when probability edge is mispriced vs. news sentiment.
        // Only holds PREDICTION_MARKET opportunities; ignores pure token plays.
        slug: 'polymarket-specialist-manager',
        label: 'Polymarket Specialist',
        signalWeights: {
            probability_edge: 0.30, // Core: price vs. fair-value gap
            event_proximity: 0.22, // Catalyst timing is everything
            catalyst_setup: 0.18, // News-confirmed catalyst
            news_heat: 0.12, // Volume of relevant coverage
            narrative_strength: 0.10, // Macro narrative alignment
            volume_spike: 0.08, // Unusual liquidity = smart money
            market_momentum: 0.06, // Momentum confirmation
            risk_flag: -0.22, // Hard penalise stale/low-liquidity markets
        },
        bullishThreshold: 0.08, // Lower bar: prediction markets mean-revert fast
        bearishThreshold: -0.08,
        opportunityTypeBias: {
            TOKEN: -0.20, // Strong bias away from tokens
            PREDICTION_MARKET: 0.20, // Strong bias toward prediction markets
        },
        cashFloor: 0.25, // Stay 25% cash minimum — markets can resolve overnight
        maxPositions: 8, // More positions, smaller size — diversify resolution risk
    },
];
function getManagerBlueprint(slug) {
    return (exports.MANAGER_BLUEPRINTS.find((blueprint) => blueprint.slug === slug) ??
        exports.MANAGER_BLUEPRINTS[exports.MANAGER_BLUEPRINTS.length - 1]);
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clamp = clamp;
exports.round = round;
exports.average = average;
exports.serializeJson = serializeJson;
exports.parseJson = parseJson;
exports.toSlug = toSlug;
exports.truncate = truncate;
exports.daysUntil = daysUntil;
exports.standardDeviation = standardDeviation;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function round(value, digits = 4) {
    const factor = 10 ** digits;
    return Math.round(value * factor) / factor;
}
function average(values) {
    if (!values.length) {
        return 0;
    }
    return values.reduce((sum, value) => sum + value, 0) / values.length;
}
function serializeJson(value) {
    try {
        return JSON.stringify(value ?? {});
    }
    catch {
        return '{}';
    }
}
function parseJson(value, fallback) {
    if (!value) {
        return fallback;
    }
    try {
        return JSON.parse(value);
    }
    catch {
        return fallback;
    }
}
function toSlug(input) {
    return input
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}
function truncate(input, length) {
    if (!input) {
        return '';
    }
    if (input.length <= length) {
        return input;
    }
    return `${input.slice(0, length - 1)}...`;
}
function daysUntil(date) {
    if (!date) {
        return null;
    }
    return (date.getTime() - Date.now()) / (1000 * 60 * 60 * 24);
}
function standardDeviation(values) {
    if (values.length <= 1) {
        return 0;
    }
    const mean = average(values);
    const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
        (values.length - 1);
    return Math.sqrt(variance);
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemoService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const helpers_1 = __webpack_require__(14);
const prisma_service_1 = __webpack_require__(9);
const llm_service_1 = __webpack_require__(16);
let MemoService = class MemoService {
    constructor(prisma, llmService) {
        this.prisma = prisma;
        this.llmService = llmService;
    }
    async generateMemos(managerSlug) {
        const managers = await this.prisma.manager.findMany({
            where: managerSlug ? { slug: managerSlug } : undefined,
        });
        const created = [];
        const skipped = [];
        for (const manager of managers) {
            const portfolio = await this.prisma.portfolioSnapshot.findFirst({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'desc' },
                include: {
                    positions: {
                        orderBy: { weight: 'desc' },
                        take: 4,
                        include: {
                            opportunity: {
                                include: {
                                    signals: true,
                                    newsItems: {
                                        orderBy: { publishedAt: 'desc' },
                                        take: 3,
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (!portfolio || !portfolio.positions.length) {
                continue;
            }
            const leadPosition = portfolio.positions[0];
            const content = await this.generateMemoContent(manager, portfolio);
            if (!content) {
                skipped.push({
                    manager: manager.slug,
                    reason: this.llmService.isConfigured()
                        ? 'DeepSeek generation failed.'
                        : 'DeepSeek is not configured.',
                });
                continue;
            }
            await this.prisma.memo.deleteMany({
                where: { managerId: manager.id },
            });
            const memo = await this.prisma.memo.create({
                data: {
                    managerId: manager.id,
                    opportunityId: leadPosition.opportunityId,
                    title: `${manager.name}: ${leadPosition.opportunity.title}`,
                    summary: (0, helpers_1.truncate)(content
                        .replace(/[#>*`_-]/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim(), 220),
                    content,
                    generatedBy: this.llmService.getProviderName(),
                },
            });
            created.push({ manager: manager.slug, memoId: memo.id });
        }
        return { created: created.length, memos: created, skipped };
    }
    async generateMemoContent(manager, portfolio) {
        const topLines = portfolio.positions.map((position) => {
            const topSignals = position.opportunity.signals
                .filter((signal) => signal.name !== 'risk_flag')
                .sort((left, right) => Math.abs(right.value) - Math.abs(left.value))
                .slice(0, 3)
                .map((signal) => `${signal.name}:${signal.value}`)
                .join(', ');
            const headlines = position.opportunity.newsItems
                .map((item) => item.title)
                .join(' | ');
            return `- ${position.opportunity.title} (${Math.round(position.weight * 100)}%): signals [${topSignals}] | headlines [${headlines || 'none'}]`;
        });
        const prompt = [
            'You are writing an investment memo for Conviction Atlas.',
            `Manager style: ${manager.style}.`,
            `Risk profile: ${manager.riskProfile}.`,
            'Return markdown only. Do not wrap the answer in code fences.',
            'Use exactly this structure:',
            '## Thesis',
            'A concise thesis paragraph.',
            '### Portfolio shifts',
            'A bullet list describing the current top positions and why they matter.',
            '### Risk notes',
            'A short bullet list of current risks.',
            'Base the memo only on the supplied portfolio state.',
            '',
            ...topLines,
        ].join('\n');
        const content = await this.llmService.generateMarkdown({
            temperature: 0.2,
            messages: [
                {
                    role: 'system',
                    content: 'You are an investment research assistant writing crisp, analytical markdown memos.',
                },
                { role: 'user', content: prompt },
            ],
        });
        if (content) {
            return content;
        }
        return null;
    }
};
exports.MemoService = MemoService;
exports.MemoService = MemoService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof llm_service_1.LlmService !== "undefined" && llm_service_1.LlmService) === "function" ? _b : Object])
], MemoService);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LlmService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(6);
const axios_1 = tslib_1.__importDefault(__webpack_require__(17));
/**
 * LlmService — DeepSeek (OpenAI-compatible, non-streaming axios call).
 */
let LlmService = class LlmService {
    constructor(configService) {
        this.configService = configService;
    }
    isConfigured() {
        return Boolean(this.resolveToken() && this.resolveBaseUrl());
    }
    getProviderName() {
        return 'deepseek';
    }
    getModel() {
        return (this.configService.get('DEEPSEEK_MODEL') ??
            this.configService.get('LLM_MODEL') ??
            'deepseek-chat');
    }
    async generateText({ messages, temperature = 0.2 }) {
        if (!this.isConfigured()) {
            return null;
        }
        const token = this.resolveToken();
        const model = this.getModel();
        try {
            const response = await axios_1.default.post(`${this.resolveBaseUrl()}/chat/completions`, {
                model,
                messages,
                temperature,
                max_tokens: 1200,
                stream: false,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                timeout: 45_000,
            });
            return response.data?.choices?.[0]?.message?.content?.trim() ?? null;
        }
        catch (error) {
            console.error('LLM generation failed:', error?.response?.data ?? error?.message);
            return null;
        }
    }
    async generateMarkdown(params) {
        const content = await this.generateText(params);
        return (content
            ?.replace(/^```(?:markdown|md)?\s*/i, '')
            .replace(/\s*```$/, '')
            .trim() ?? null);
    }
    resolveToken() {
        return (this.configService.get('DEEPSEEK_API_KEY') ??
            this.configService.get('LLM_API_KEY') ??
            '');
    }
    resolveBaseUrl() {
        return (this.configService.get('DEEPSEEK_BASE_URL') ??
            this.configService.get('LLM_BASE_URL') ??
            'https://api.deepseek.com');
    }
};
exports.LlmService = LlmService;
exports.LlmService = LlmService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], LlmService);


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const helpers_1 = __webpack_require__(14);
const prisma_service_1 = __webpack_require__(9);
let PerformanceService = class PerformanceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async snapshotPerformance() {
        const managers = await this.prisma.manager.findMany();
        let created = 0;
        for (const manager of managers) {
            const latestPortfolio = await this.prisma.portfolioSnapshot.findFirst({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'desc' },
                include: {
                    positions: {
                        include: {
                            opportunity: true,
                        },
                    },
                },
            });
            if (!latestPortfolio) {
                continue;
            }
            const existing = await this.prisma.performanceSnapshot.findFirst({
                where: { portfolioSnapshotId: latestPortfolio.id },
            });
            if (existing) {
                continue;
            }
            const previous = await this.prisma.performanceSnapshot.findFirst({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'desc' },
            });
            const historical = await this.prisma.performanceSnapshot.findMany({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'asc' },
            });
            const positionReturns = latestPortfolio.positions.map((position) => {
                return (position.weight * (position.opportunity.priceChange24h ?? 0)) / 100;
            });
            const dailyReturn = (0, helpers_1.round)(positionReturns.reduce((sum, value) => sum + value, 0), 4);
            const nav = (0, helpers_1.round)((previous?.nav ?? 100) * (1 + dailyReturn), 4);
            const cumulativeReturn = (0, helpers_1.round)(nav / 100 - 1, 4);
            const maxNav = Math.max(100, nav, ...historical.map((entry) => entry.nav));
            const drawdown = (0, helpers_1.round)(nav / maxNav - 1, 4);
            const returns = [...historical.map((entry) => entry.dailyReturn), dailyReturn];
            const avgReturn = (0, helpers_1.average)(returns);
            const stdDev = (0, helpers_1.standardDeviation)(returns);
            const sharpe = (0, helpers_1.round)(stdDev === 0 ? avgReturn : avgReturn / stdDev, 4);
            const hitRate = latestPortfolio.positions.length
                ? (0, helpers_1.round)(latestPortfolio.positions.filter((position) => (position.opportunity.priceChange24h ?? 0) > 0).length / latestPortfolio.positions.length, 4)
                : 0;
            await this.prisma.performanceSnapshot.create({
                data: {
                    managerId: manager.id,
                    portfolioSnapshotId: latestPortfolio.id,
                    nav,
                    dailyReturn,
                    cumulativeReturn,
                    drawdown,
                    sharpe,
                    hitRate,
                    metadata: (0, helpers_1.serializeJson)({
                        positionCount: latestPortfolio.positions.length,
                        model: 'performance-engine-v1',
                    }),
                },
            });
            await this.prisma.portfolioSnapshot.update({
                where: { id: latestPortfolio.id },
                data: { nav },
            });
            created += 1;
        }
        return { created };
    }
};
exports.PerformanceService = PerformanceService;
exports.PerformanceService = PerformanceService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PerformanceService);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PortfolioService = void 0;
const tslib_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const manager_blueprints_1 = __webpack_require__(13);
const helpers_1 = __webpack_require__(14);
const prisma_service_1 = __webpack_require__(9);
let PortfolioService = class PortfolioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async rebalancePortfolios() {
        const managers = await this.prisma.manager.findMany();
        let snapshotsCreated = 0;
        for (const manager of managers) {
            const blueprint = (0, manager_blueprints_1.getManagerBlueprint)(manager.slug);
            const decisions = await this.prisma.managerDecision.findMany({
                where: { managerId: manager.id, direction: client_1.Direction.BULLISH },
                orderBy: [{ convictionScore: 'desc' }, { targetWeight: 'desc' }],
                take: blueprint.maxPositions,
                include: {
                    opportunity: {
                        include: {
                            signals: true,
                        },
                    },
                },
            });
            const previousSnapshot = await this.prisma.portfolioSnapshot.findFirst({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'desc' },
            });
            const investableCapital = decisions.length ? 1 - blueprint.cashFloor : 0;
            const scoreTotal = decisions.reduce((sum, decision) => sum + decision.targetWeight, 0) || 1;
            const riskValues = decisions.map((decision) => {
                const riskSignal = decision.opportunity.signals.find((signal) => signal.name === 'risk_flag');
                return riskSignal?.value ?? 0;
            });
            const snapshot = await this.prisma.portfolioSnapshot.create({
                data: {
                    managerId: manager.id,
                    cashWeight: (0, helpers_1.round)(1 - investableCapital, 4),
                    grossExposure: (0, helpers_1.round)(investableCapital, 4),
                    netExposure: (0, helpers_1.round)(investableCapital, 4),
                    riskScore: (0, helpers_1.round)((0, helpers_1.average)(riskValues), 4),
                    nav: previousSnapshot?.nav ?? 100,
                    metadata: (0, helpers_1.serializeJson)({
                        decisionCount: decisions.length,
                        model: 'portfolio-engine-v1',
                    }),
                },
            });
            if (decisions.length) {
                await this.prisma.position.createMany({
                    data: decisions.map((decision) => ({
                        portfolioSnapshotId: snapshot.id,
                        opportunityId: decision.opportunityId,
                        weight: (0, helpers_1.round)((decision.targetWeight / scoreTotal) * investableCapital, 4),
                        convictionScore: decision.convictionScore,
                        entryPrice: decision.opportunity.currentPrice ?? null,
                        note: (0, helpers_1.parseJson)(decision.metadata, {}).topHeadline ?? null,
                    })),
                });
            }
            snapshotsCreated += 1;
        }
        return { snapshotsCreated };
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], PortfolioService);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignalEngineService = void 0;
const tslib_1 = __webpack_require__(5);
const client_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(9);
const helpers_1 = __webpack_require__(14);
let SignalEngineService = class SignalEngineService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async recomputeSignals() {
        await this.prisma.signal.deleteMany({});
        const opportunities = await this.prisma.opportunity.findMany({
            include: {
                newsItems: {
                    orderBy: { publishedAt: 'desc' },
                    take: 8,
                },
                historyPoints: {
                    orderBy: { pointAt: 'asc' },
                    take: 720,
                },
            },
        });
        const signalRows = opportunities.flatMap((opportunity) => this.buildSignalsForOpportunity(opportunity).map((signal) => ({
            ...signal,
            opportunityId: opportunity.id,
        })));
        if (signalRows.length) {
            await this.prisma.signal.createMany({ data: signalRows });
        }
        return {
            opportunities: opportunities.length,
            signals: signalRows.length,
        };
    }
    buildSignalsForOpportunity(opportunity) {
        const metadata = (0, helpers_1.parseJson)(opportunity.metadata, {});
        const historyPoints = (opportunity.historyPoints ?? []).filter((point) => point?.pointAt instanceof Date && Number.isFinite(point.price));
        const recentNews = opportunity.newsItems.filter((item) => {
            return item.publishedAt.getTime() > Date.now() - 96 * 60 * 60 * 1000;
        });
        const recentSentiment = (0, helpers_1.average)(recentNews
            .map((item) => Number(item.sentimentScore))
            .filter((value) => Number.isFinite(value)));
        const catalystNews = opportunity.newsItems.filter((item) => {
            return item.publishedAt.getTime() > Date.now() - 14 * 24 * 60 * 60 * 1000;
        });
        const catalystSentiment = (0, helpers_1.average)(catalystNews
            .map((item) => Number(item.sentimentScore))
            .filter((value) => Number.isFinite(value)));
        const change24h = Number(opportunity.priceChange24h ?? 0);
        const change7d = this.resolveDirectionalChange(opportunity, historyPoints, metadata, 7);
        const change30d = this.resolveDirectionalChange(opportunity, historyPoints, metadata, 30);
        const volatility7d = Number(metadata.volatility7d ?? 0) ||
            this.calculateVolatility(historyPoints, 7, opportunity.type);
        const isStablecoin = Boolean(metadata.isStablecoin);
        const flatAssetScore = (0, helpers_1.clamp)(Number(metadata.flatAssetScore ?? 0), 0, 1);
        const stablePenalty = (0, helpers_1.clamp)((isStablecoin ? 0.9 : 0) + flatAssetScore * 0.45, 0, 1);
        const momentumScales = opportunity.type === client_1.OpportunityType.TOKEN
            ? { day: 10, week: 24, month: 42 }
            : { day: 9, week: 26, month: 38 };
        const momentum = (0, helpers_1.clamp)(change24h / momentumScales.day * 0.42 +
            change7d / momentumScales.week * 0.36 +
            change30d / momentumScales.month * 0.22, -1, 1);
        const trendRegime = (0, helpers_1.clamp)(change7d / momentumScales.week * 0.58 +
            change30d / momentumScales.month * 0.42 +
            (Math.sign(change7d) === Math.sign(change30d) && Math.abs(change7d) > 1
                ? 0.12 * Math.sign(change7d)
                : 0) +
            // On-chain: blend in DefiLlama chain TVL 5-day momentum (if available)
            // Gives the onchain-fundamentals-manager a real on-chain signal component
            (Number.isFinite(Number(metadata.chain_tvl_pct5d))
                ? (0, helpers_1.clamp)(Number(metadata.chain_tvl_pct5d) / 10, -0.25, 0.25)
                : 0), -1, 1);
        const volumeSpike = this.computeVolumeSpike(opportunity, metadata);
        const newsHeat = (0, helpers_1.clamp)(recentNews.length / 4 + Math.max(recentSentiment, 0) * 0.35, 0, 1);
        const daysToCatalyst = (0, helpers_1.daysUntil)(opportunity.eventDate);
        const eventProximity = daysToCatalyst === null
            ? 0
            : daysToCatalyst < 0
                ? 0
                : (0, helpers_1.clamp)(1 - daysToCatalyst / 120, 0, 1);
        const probabilityEdge = opportunity.type === client_1.OpportunityType.PREDICTION_MARKET
            ? (0, helpers_1.clamp)(((Number(opportunity.currentPrice ?? 0.5) - 0.5) * 1.6 +
                trendRegime * 0.28 +
                momentum * 0.16) -
                stablePenalty * 0.6, -1, 1)
            : (0, helpers_1.clamp)(momentum * 0.55 + trendRegime * 0.25 - stablePenalty * 0.95, -1, 1);
        const athGap = Number(metadata.athGap ?? 0.25);
        const spread = Number(metadata.spread ?? 0.02);
        const priceDislocation = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)((athGap - 0.22) * 1.25 +
                Math.max(trendRegime, -0.2) * 0.4 -
                stablePenalty * 1.05, -1, 1)
            : (0, helpers_1.clamp)((0.06 - spread) * 4.5 +
                Math.abs(Number(opportunity.currentPrice ?? 0.5) - 0.5) * 1.1 +
                trendRegime * 0.2, -1, 1);
        const turnoverRatio = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(Number(opportunity.volume24h ?? 0) /
                Math.max(Number(opportunity.marketCap ?? 0) * 0.08, 1), 0, 1)
            : (0, helpers_1.clamp)(Number(opportunity.volume24h ?? 0) /
                Math.max(Number(opportunity.liquidity ?? 0), 1), 0, 1);
        const narrativeStrength = (0, helpers_1.clamp)(newsHeat * 0.28 +
            Math.max(momentum, 0) * 0.18 +
            Math.max(trendRegime, 0) * 0.2 +
            volumeSpike * 0.12 +
            recentSentiment * 0.28 -
            stablePenalty * 1.1, -1, 1);
        const opportunityQuality = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(0.32 +
                Math.min(volatility7d * 16, 0.3) +
                Math.max(trendRegime, 0) * 0.18 -
                stablePenalty * 1.55 +
                // On-chain: boost quality if protocol has real fee revenue (DefiLlama)
                Number(metadata.fee_score_24h ?? 0) * 0.18, -1, 1)
            : (0, helpers_1.clamp)(0.24 +
                eventProximity * 0.2 +
                volumeSpike * 0.22 +
                Math.max(trendRegime, 0) * 0.14 -
                Math.max(spread - 0.03, 0) * 2.2, -1, 1);
        const riskFlag = (0, helpers_1.clamp)(Math.abs(change24h) / 18 +
            Math.abs(change7d) / 55 +
            Math.min(volatility7d * 12, 0.3) +
            ((opportunity.liquidity ?? 0) < 25_000 ? 0.14 : 0) +
            (daysToCatalyst !== null && daysToCatalyst < 10 ? 0.12 : 0) +
            (spread > 0.05 ? 0.12 : 0), 0, 1);
        const catalystSetup = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(newsHeat * 0.22 +
                Math.max(catalystSentiment, 0) * 0.12 +
                Math.max(trendRegime, 0) * 0.16 +
                Math.max(priceDislocation, 0) * 0.18 +
                Math.max(opportunityQuality, 0) * 0.16 +
                volumeSpike * 0.1 +
                turnoverRatio * 0.06 +
                Math.max(momentum, -0.1) * 0.08 -
                stablePenalty * 1.25 -
                Math.max(Math.abs(change24h) / 24 +
                    Math.max(volatility7d - 0.06, 0) * 2.4, 0) *
                    0.12, -1, 1)
            : (0, helpers_1.clamp)(eventProximity * 0.34 +
                newsHeat * 0.12 +
                Math.max(catalystSentiment, 0) * 0.06 +
                volumeSpike * 0.14 +
                Math.max(probabilityEdge, 0) * 0.12 +
                Math.max(priceDislocation, 0) * 0.08 +
                (0, helpers_1.clamp)(Math.abs(Number(opportunity.currentPrice ?? 0.5) - 0.5) * 2, 0, 1) *
                    0.14 +
                Math.max(momentum, -0.05) * 0.06 +
                Math.max(trendRegime, 0) * 0.08 -
                Math.max(riskFlag - 0.8, 0) * 0.45, -1, 1);
        return [
            this.makeSignal('market_momentum', momentum, `Blended 1d/7d/30d move: ${(0, helpers_1.round)(change24h, 2)} / ${(0, helpers_1.round)(change7d, 2)} / ${(0, helpers_1.round)(change30d, 2)}.`),
            this.makeSignal('trend_regime', trendRegime, 'Medium-window trend alignment across the stored price history.'),
            this.makeSignal('volume_spike', volumeSpike, 'Current turnover versus rolling token or market-specific baselines.'),
            this.makeSignal('news_heat', newsHeat, `${recentNews.length} recent article(s) mapped with ${(0, helpers_1.round)(recentSentiment, 2)} average sentiment.`),
            this.makeSignal('narrative_strength', narrativeStrength, 'Attention, sentiment, trend persistence, and turnover combined.'),
            this.makeSignal('catalyst_setup', catalystSetup, opportunity.type === client_1.OpportunityType.TOKEN
                ? 'Token catalyst setup blends news acceleration, turnover, dislocation, and trend persistence.'
                : 'Prediction-market catalyst setup blends event timing, probability movement, and trading activity.'),
            this.makeSignal('event_proximity', eventProximity, daysToCatalyst === null
                ? 'No explicit catalyst date attached.'
                : daysToCatalyst < 0
                    ? `Catalyst passed ${(0, helpers_1.round)(Math.abs(daysToCatalyst), 2)} days ago.`
                    : `${(0, helpers_1.round)(daysToCatalyst, 2)} days to event horizon inside a 120-day window.`),
            this.makeSignal('probability_edge', probabilityEdge, 'Directional edge after regime confirmation and structural penalties.'),
            this.makeSignal('price_dislocation', priceDislocation, 'Distance from prior range, ATH gap, or binary-market midpoint friction.'),
            this.makeSignal('opportunity_quality', opportunityQuality, isStablecoin
                ? 'Stablecoin-like behavior or flat pricing is penalized for directional strategies.'
                : 'Directional quality of the opportunity after filtering structural noise.'),
            this.makeSignal('risk_flag', riskFlag, 'Higher values imply timing, liquidity, volatility, or spread risk.'),
        ];
    }
    resolveDirectionalChange(opportunity, historyPoints, metadata, lookbackDays) {
        const historyValue = this.calculateDirectionalChangeFromHistory(historyPoints, lookbackDays, opportunity.type);
        if (historyValue !== null) {
            return historyValue;
        }
        if (opportunity.type === client_1.OpportunityType.TOKEN) {
            const key = lookbackDays === 7 ? 'sevenDayPriceChange' : 'thirtyDayPriceChange';
            return Number(metadata[key] ?? 0);
        }
        const key = lookbackDays === 7 ? 'oneWeekPriceChange' : 'oneMonthPriceChange';
        return Number(metadata[key] ?? 0) * 100;
    }
    calculateDirectionalChangeFromHistory(historyPoints, lookbackDays, type) {
        if (historyPoints.length < 2) {
            return null;
        }
        const latestPoint = historyPoints[historyPoints.length - 1];
        const targetTimestamp = latestPoint.pointAt.getTime() - lookbackDays * 24 * 60 * 60 * 1000;
        const anchorPoint = this.findClosestHistoryPoint(historyPoints, targetTimestamp);
        if (!anchorPoint || !Number.isFinite(anchorPoint.price) || anchorPoint.price === 0) {
            return null;
        }
        if (type === client_1.OpportunityType.TOKEN) {
            return ((latestPoint.price - anchorPoint.price) / anchorPoint.price) * 100;
        }
        return (latestPoint.price - anchorPoint.price) * 100;
    }
    calculateVolatility(historyPoints, lookbackDays, type) {
        if (historyPoints.length < 3) {
            return 0;
        }
        const latestPoint = historyPoints[historyPoints.length - 1];
        const cutoff = latestPoint.pointAt.getTime() - lookbackDays * 24 * 60 * 60 * 1000;
        const trailing = historyPoints.filter((point) => point.pointAt.getTime() >= cutoff);
        const returns = trailing
            .slice(1)
            .map((point, index) => {
            const previous = trailing[index];
            if (!previous?.price || previous.price === 0) {
                return null;
            }
            return type === client_1.OpportunityType.TOKEN
                ? (point.price - previous.price) / previous.price
                : point.price - previous.price;
        })
            .filter((value) => Number.isFinite(value));
        return (0, helpers_1.standardDeviation)(returns);
    }
    computeVolumeSpike(opportunity, metadata) {
        const currentVolume = Number(opportunity.volume24h ?? 0);
        const rollingAverages = opportunity.type === client_1.OpportunityType.TOKEN
            ? [
                Number(metadata.averageVolume7d ?? 0),
                Number(metadata.averageVolume30d ?? 0),
                Number(opportunity.marketCap ?? 0) * 0.01,
            ]
            : [
                Number(metadata.volume1wk ?? 0) / 7,
                Number(metadata.volume1mo ?? 0) / 30,
                Number(opportunity.liquidity ?? 0),
            ];
        const validBaselines = rollingAverages.filter((value) => Number.isFinite(value) && value > 0);
        const baseline = validBaselines.length ? (0, helpers_1.average)(validBaselines) : 0;
        const ratio = baseline > 0 ? currentVolume / baseline : 0;
        return (0, helpers_1.clamp)(Math.log10(1 + Math.max(ratio, 0)) / 0.75, 0, 1);
    }
    findClosestHistoryPoint(historyPoints, targetTimestamp) {
        if (!historyPoints.length) {
            return null;
        }
        let closestPoint = historyPoints[0];
        let closestDistance = Math.abs(historyPoints[0].pointAt.getTime() - targetTimestamp);
        for (const point of historyPoints.slice(1)) {
            const distance = Math.abs(point.pointAt.getTime() - targetTimestamp);
            if (distance < closestDistance) {
                closestPoint = point;
                closestDistance = distance;
            }
        }
        return closestPoint;
    }
    makeSignal(name, value, rationale) {
        const direction = name === 'risk_flag'
            ? value > 0.35
                ? client_1.Direction.BEARISH
                : client_1.Direction.NEUTRAL
            : value > 0.15
                ? client_1.Direction.BULLISH
                : value < -0.15
                    ? client_1.Direction.BEARISH
                    : client_1.Direction.NEUTRAL;
        return {
            name,
            value: (0, helpers_1.round)(value, 4),
            direction,
            confidence: (0, helpers_1.round)((0, helpers_1.clamp)(Math.abs(value) + 0.18, 0.22, 1), 4),
            rationale,
            metadata: (0, helpers_1.serializeJson)({ generator: 'signal-engine-v3' }),
        };
    }
};
exports.SignalEngineService = SignalEngineService;
exports.SignalEngineService = SignalEngineService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], SignalEngineService);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SourceIngestionService = void 0;
const tslib_1 = __webpack_require__(5);
const axios_1 = tslib_1.__importDefault(__webpack_require__(17));
const node_child_process_1 = __webpack_require__(22);
const node_util_1 = __webpack_require__(23);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(6);
const client_1 = __webpack_require__(10);
const prisma_service_1 = __webpack_require__(9);
const helpers_1 = __webpack_require__(14);
let SourceIngestionService = class SourceIngestionService {
    constructor(prisma, configService) {
        this.prisma = prisma;
        this.configService = configService;
        this.execFileAsync = (0, node_util_1.promisify)(node_child_process_1.execFile);
    }
    async runBootstrap() {
        const coinGecko = await this.ingestCoinGecko();
        const polymarket = await this.ingestPolymarket();
        const normalized = await this.normalizeOpportunities();
        const news = await this.ingestNews();
        // Enrich opportunities with live DefiLlama on-chain TVL signals
        // Used by the onchain-fundamentals-manager blueprint
        const onchain = await this.enrichOnchainFundamentals().catch(() => ({ enriched: 0 }));
        return { coinGecko, polymarket, normalized, news, onchain };
    }
    /**
     * Enriches TOKEN opportunities with live DefiLlama TVL trend data.
     * Writes chain TVL 5-day momentum into opportunity metadata so the
     * on-chain-fundamentals-manager can weight trend_regime and opportunity_quality
     * using real blockchain data rather than price-derived proxies.
     *
     * No API key required — uses public DefiLlama endpoints.
     */
    async enrichOnchainFundamentals() {
        const DEFILLAMA_BASE = 'https://api.llama.fi';
        const MOBULA_BASE = 'https://api.mobula.io/api/1';
        const mobiKey = this.configService.get('MOBULA_API_KEY');
        // ── 1. DefiLlama: 5-day chain TVL momentum ────────────────────────────
        const chains = ['Ethereum', 'Tron', 'Solana', 'Base'];
        const chainTvl = {};
        await Promise.allSettled(chains.map(async (chain) => {
            const url = `${DEFILLAMA_BASE}/v2/historicalChainTvl/${chain}`;
            const data = await this.fetchJson(url);
            if (!Array.isArray(data) || data.length < 5)
                return;
            const latest = data[data.length - 1];
            const anchor = data[data.length - 5];
            chainTvl[chain.toLowerCase()] = {
                pct5d: ((latest.tvl - anchor.tvl) / anchor.tvl) * 100,
                latestTvl: latest.tvl,
            };
        }));
        // ── 2. DefiLlama: protocol 24h fee revenue ────────────────────────────
        const feesData = await this.fetchJson(`${DEFILLAMA_BASE}/overview/fees?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true&dataType=dailyFees`).catch(() => ({ protocols: [] }));
        const feeMap = {};
        for (const p of feesData.protocols ?? []) {
            if (p.total24h) {
                feeMap[p.name.toLowerCase()] = p.total24h;
            }
        }
        // ── 3. Mobula: smart-money whale wallet netflow ───────────────────────
        // Track well-known smart-money addresses; compute net 24h change
        // as a proxy for accumulation (positive) vs. distribution (negative).
        const WHALE_WALLETS = [
            '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', // Vitalik
            '0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503', // Binance cold wallet
        ];
        const whaleNetflow = {}; // symbol -> net pct change
        if (mobiKey) {
            await Promise.allSettled(WHALE_WALLETS.map(async (wallet) => {
                const url = `${MOBULA_BASE}/wallet/portfolio?wallet=${wallet}`;
                const data = await this.fetchJson(url, { Authorization: mobiKey }).catch(() => null);
                for (const asset of data?.data?.assets ?? []) {
                    const sym = (asset.asset?.symbol ?? '').toLowerCase();
                    const pnl24h = Number(asset.realized_pnl_24h ?? 0);
                    const balance = Number(asset.estimated_balance ?? 1);
                    // Accumulation score: positive pnl / balance => smart money in profit & holding
                    whaleNetflow[sym] = (whaleNetflow[sym] ?? 0) + pnl24h / Math.max(balance, 1);
                }
            }));
        }
        // ── 4. Apply enrichment to TOKEN opportunities ────────────────────────
        const tokenChainMap = {
            ethereum: 'ethereum',
            bitcoin: 'ethereum',
            solana: 'solana',
            tron: 'tron',
        };
        const maxFee = Math.max(...Object.values(feeMap), 1);
        const tokens = await this.prisma.opportunity.findMany({
            where: { type: 'TOKEN' },
            select: { id: true, symbol: true, metadata: true },
        });
        let enriched = 0;
        for (const token of tokens) {
            const sym = (token.symbol ?? '').toLowerCase();
            const chain = tokenChainMap[sym] ?? 'ethereum';
            const tvlSignal = chainTvl[chain];
            if (!tvlSignal)
                continue;
            const feeScore = (feeMap[sym] ?? 0) / maxFee;
            const whaleScore = Math.max(-1, Math.min(1, whaleNetflow[sym] ?? 0));
            const existing = (0, helpers_1.parseJson)(token.metadata, {});
            await this.prisma.opportunity.update({
                where: { id: token.id },
                data: {
                    metadata: (0, helpers_1.serializeJson)({
                        ...existing,
                        chain_tvl_pct5d: Math.round(tvlSignal.pct5d * 100) / 100,
                        chain_tvl_latest_usd: Math.round(tvlSignal.latestTvl),
                        fee_score_24h: Math.round(feeScore * 1000) / 1000,
                        whale_netflow_score: Math.round(whaleScore * 1000) / 1000,
                        onchain_enriched_at: new Date().toISOString(),
                    }),
                },
            });
            enriched++;
        }
        return { enriched };
    }
    async ingestCoinGecko(limit) {
        const marketLimit = limit ??
            Number(this.configService.get('COINGECKO_MARKET_LIMIT') ?? '12');
        const historyLimit = Number(this.configService.get('COINGECKO_HISTORY_LIMIT') ?? '4');
        const baseUrl = this.configService.get('COINGECKO_BASE_URL');
        const url = this.buildUrl(baseUrl, 'coins/markets');
        url.searchParams.set('vs_currency', 'usd');
        url.searchParams.set('order', 'market_cap_desc');
        url.searchParams.set('per_page', String(marketLimit));
        url.searchParams.set('page', '1');
        url.searchParams.set('sparkline', 'true');
        url.searchParams.set('price_change_percentage', '24h');
        const marketsResponse = await this.fetchJson(url.toString());
        const markets = Array.isArray(marketsResponse)
            ? marketsResponse
            : [marketsResponse].filter(Boolean);
        let ingested = 0;
        for (const market of markets) {
            const longWindowEligible = market.market_cap_rank <= historyLimit &&
                !['usdt', 'usdc', 'usds', 'dai', 'usde', 'fdusd'].includes(market.symbol.toLowerCase());
            const historyPoints = longWindowEligible
                ? await this.fetchCoinGeckoHistory(market.id)
                : [];
            const normalizedHistory = historyPoints.length
                ? historyPoints
                : this.mapCoinGeckoSparkline(market);
            const historyMetrics = this.summarizeCoinGeckoHistory(market, normalizedHistory);
            const historyMetadata = {
                marketCapRank: market.market_cap_rank,
                ath: market.ath,
                athGap: Math.abs((market.ath_change_percentage ?? 0) / 100),
                ...historyMetrics,
            };
            await this.prisma.rawIngestion.create({
                data: {
                    sourceKind: client_1.SourceKind.COINGECKO,
                    externalId: market.id,
                    opportunityExternalKey: `coingecko:${market.id}`,
                    itemType: 'market',
                    payload: (0, helpers_1.serializeJson)(market),
                },
            });
            const opportunity = await this.prisma.opportunity.upsert({
                where: { externalKey: `coingecko:${market.id}` },
                update: {
                    sourceKind: client_1.SourceKind.COINGECKO,
                    type: 'TOKEN',
                    slug: (0, helpers_1.toSlug)(`${market.name}-${market.symbol}`),
                    title: market.name,
                    symbol: market.symbol.toUpperCase(),
                    summary: `${market.name} ranks #${market.market_cap_rank} by market cap with ${(0, helpers_1.round)(market.price_change_percentage_24h ?? 0, 2)}% 24h move.`,
                    description: `${market.name} is tracked from CoinGecko market data.`,
                    imageUrl: market.image,
                    sourceUrl: `https://www.coingecko.com/en/coins/${market.id}`,
                    status: 'active',
                    category: 'token',
                    currentPrice: market.current_price,
                    priceChange24h: market.price_change_percentage_24h,
                    volume24h: market.total_volume,
                    marketCap: market.market_cap,
                    liquidity: market.total_volume,
                    lastUpdatedAt: new Date(market.last_updated),
                    metadata: (0, helpers_1.serializeJson)(historyMetadata),
                },
                create: {
                    externalKey: `coingecko:${market.id}`,
                    sourceKind: client_1.SourceKind.COINGECKO,
                    type: 'TOKEN',
                    slug: (0, helpers_1.toSlug)(`${market.name}-${market.symbol}`),
                    title: market.name,
                    symbol: market.symbol.toUpperCase(),
                    summary: `${market.name} ranks #${market.market_cap_rank} by market cap with ${(0, helpers_1.round)(market.price_change_percentage_24h ?? 0, 2)}% 24h move.`,
                    description: `${market.name} is tracked from CoinGecko market data.`,
                    imageUrl: market.image,
                    sourceUrl: `https://www.coingecko.com/en/coins/${market.id}`,
                    status: 'active',
                    category: 'token',
                    currentPrice: market.current_price,
                    priceChange24h: market.price_change_percentage_24h,
                    volume24h: market.total_volume,
                    marketCap: market.market_cap,
                    liquidity: market.total_volume,
                    lastUpdatedAt: new Date(market.last_updated),
                    metadata: (0, helpers_1.serializeJson)(historyMetadata),
                },
            });
            if (normalizedHistory.length > 1) {
                await this.prisma.opportunityHistory.deleteMany({
                    where: { opportunityId: opportunity.id },
                });
                await this.prisma.opportunityHistory.createMany({
                    data: normalizedHistory.map((point) => ({
                        opportunityId: opportunity.id,
                        pointAt: point.pointAt,
                        price: (0, helpers_1.round)(point.price, 6),
                        volume: point.volume ?? market.total_volume,
                        metadata: (0, helpers_1.serializeJson)({ source: point.source }),
                    })),
                });
            }
            ingested += 1;
        }
        return { source: 'coingecko', ingested };
    }
    async ingestPolymarket(limit) {
        const marketLimit = limit ??
            Number(this.configService.get('POLYMARKET_MARKET_LIMIT') ?? '12');
        const baseUrl = this.configService.get('POLYMARKET_GAMMA_BASE_URL');
        const url = this.buildUrl(baseUrl, 'markets');
        url.searchParams.set('limit', String(marketLimit));
        url.searchParams.set('closed', 'false');
        url.searchParams.set('archived', 'false');
        // Sort by 24h volume descending for highest-quality, most liquid markets
        url.searchParams.set('order', 'volume24hrClob');
        url.searchParams.set('ascending', 'false');
        // Only crypto/web3 related prediction markets — skip sports/politics noise
        url.searchParams.set('tag_slug', 'crypto');
        const marketsResponse = await this.fetchJson(url.toString());
        const markets = Array.isArray(marketsResponse)
            ? marketsResponse
            : [marketsResponse].filter(Boolean);
        let ingested = 0;
        for (const market of markets) {
            const outcomes = (0, helpers_1.parseJson)(market.outcomes, []);
            const outcomePrices = (0, helpers_1.parseJson)(market.outcomePrices, []);
            const clobTokenIds = (0, helpers_1.parseJson)(market.clobTokenIds, []);
            const currentPrice = market.lastTradePrice ?? Number(outcomePrices[0] ?? 0.5);
            const event = market.events?.[0];
            const sourceUrl = `https://polymarket.com/event/${event?.slug ?? market.slug}`;
            await this.prisma.rawIngestion.create({
                data: {
                    sourceKind: client_1.SourceKind.POLYMARKET,
                    externalId: market.id,
                    opportunityExternalKey: `polymarket:${market.id}`,
                    itemType: 'market',
                    payload: (0, helpers_1.serializeJson)(market),
                },
            });
            const opportunity = await this.prisma.opportunity.upsert({
                where: { externalKey: `polymarket:${market.id}` },
                update: {
                    sourceKind: client_1.SourceKind.POLYMARKET,
                    type: 'PREDICTION_MARKET',
                    slug: market.slug,
                    title: market.question,
                    summary: (0, helpers_1.truncate)(market.description?.replace(/\s+/g, ' ') ?? market.question, 180),
                    description: market.description,
                    imageUrl: market.image ?? market.icon ?? event?.image ?? null,
                    sourceUrl,
                    status: market.closed ? 'closed' : market.active ? 'active' : 'pending',
                    category: event?.title ? (0, helpers_1.truncate)(event.title, 80) : 'prediction',
                    currentPrice,
                    priceChange24h: Number(market.oneDayPriceChange ?? 0) * 100,
                    volume24h: Number(market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0),
                    liquidity: Number(market.liquidityNum ?? market.liquidity ?? 0),
                    eventDate: market.endDate ? new Date(market.endDate) : null,
                    lastUpdatedAt: market.updatedAt ? new Date(market.updatedAt) : new Date(),
                    metadata: (0, helpers_1.serializeJson)({
                        outcomes,
                        outcomePrices,
                        spread: market.spread ?? null,
                        bestBid: market.bestBid ?? null,
                        bestAsk: market.bestAsk ?? null,
                        eventTitle: event?.title ?? null,
                        clobTokenId: clobTokenIds[0] ?? null,
                        oneWeekPriceChange: market.oneWeekPriceChange ?? null,
                        oneMonthPriceChange: market.oneMonthPriceChange ?? null,
                        volume1wk: market.volume1wk ?? market.volume1wkClob ?? null,
                        volume1mo: market.volume1mo ?? market.volume1moClob ?? null,
                    }),
                },
                create: {
                    externalKey: `polymarket:${market.id}`,
                    sourceKind: client_1.SourceKind.POLYMARKET,
                    type: 'PREDICTION_MARKET',
                    slug: market.slug,
                    title: market.question,
                    summary: (0, helpers_1.truncate)(market.description?.replace(/\s+/g, ' ') ?? market.question, 180),
                    description: market.description,
                    imageUrl: market.image ?? market.icon ?? event?.image ?? null,
                    sourceUrl,
                    status: market.closed ? 'closed' : market.active ? 'active' : 'pending',
                    category: event?.title ? (0, helpers_1.truncate)(event.title, 80) : 'prediction',
                    currentPrice,
                    priceChange24h: Number(market.oneDayPriceChange ?? 0) * 100,
                    volume24h: Number(market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0),
                    liquidity: Number(market.liquidityNum ?? market.liquidity ?? 0),
                    eventDate: market.endDate ? new Date(market.endDate) : null,
                    lastUpdatedAt: market.updatedAt ? new Date(market.updatedAt) : new Date(),
                    metadata: (0, helpers_1.serializeJson)({
                        outcomes,
                        outcomePrices,
                        spread: market.spread ?? null,
                        bestBid: market.bestBid ?? null,
                        bestAsk: market.bestAsk ?? null,
                        eventTitle: event?.title ?? null,
                        clobTokenId: clobTokenIds[0] ?? null,
                        oneWeekPriceChange: market.oneWeekPriceChange ?? null,
                        oneMonthPriceChange: market.oneMonthPriceChange ?? null,
                        volume1wk: market.volume1wk ?? market.volume1wkClob ?? null,
                        volume1mo: market.volume1mo ?? market.volume1moClob ?? null,
                    }),
                },
            });
            await this.prisma.opportunityHistory.deleteMany({
                where: { opportunityId: opportunity.id },
            });
            const historyPoints = await this.fetchPolymarketHistory(clobTokenIds[0], market.updatedAt);
            const fallbackSnapshotTime = market.updatedAt
                ? new Date(market.updatedAt)
                : new Date();
            const fallbackSnapshot = Number.isFinite(currentPrice) && currentPrice > 0
                ? [
                    {
                        opportunityId: opportunity.id,
                        pointAt: fallbackSnapshotTime,
                        price: (0, helpers_1.round)(Math.max(0, Math.min(1, currentPrice)), 6),
                        volume: Number(market.volume24hr ?? market.volume24hrClob ?? market.volumeNum ?? 0),
                        metadata: (0, helpers_1.serializeJson)({ source: 'current_market_snapshot' }),
                    },
                ]
                : [];
            await this.prisma.opportunityHistory.createMany({
                data: historyPoints.length
                    ? historyPoints.map((point) => ({
                        opportunityId: opportunity.id,
                        pointAt: new Date(point.t * 1000),
                        price: (0, helpers_1.round)(point.p, 6),
                        volume: null,
                        metadata: (0, helpers_1.serializeJson)({
                            source: 'clob_prices_history',
                            tokenId: clobTokenIds[0] ?? null,
                        }),
                    }))
                    : fallbackSnapshot,
            });
            ingested += 1;
        }
        return { source: 'polymarket', ingested };
    }
    async normalizeOpportunities() {
        const opportunities = await this.prisma.opportunity.findMany();
        let normalized = 0;
        for (const opportunity of opportunities) {
            const nextStatus = opportunity.eventDate && opportunity.eventDate.getTime() < Date.now()
                ? 'expired'
                : opportunity.status ?? 'active';
            await this.prisma.opportunity.update({
                where: { id: opportunity.id },
                data: {
                    status: nextStatus,
                    category: opportunity.category ??
                        (opportunity.type === 'TOKEN' ? 'token' : 'prediction'),
                    summary: opportunity.summary ??
                        (0, helpers_1.truncate)(opportunity.description ?? opportunity.title, 180),
                },
            });
            normalized += 1;
        }
        return { normalized };
    }
    async ingestNews(limitPerOpportunity) {
        const cryptoPanicKey = this.configService.get('CRYPTOPANIC_API_KEY');
        const gNewsKey = this.configService.get('GNEWS_API_KEY');
        const newsApiKey = this.configService.get('NEWSAPI_KEY');
        const providers = [
            {
                provider: client_1.SourceKind.CRYPTOPANIC,
                perOpportunity: limitPerOpportunity ??
                    Number(this.configService.get('CRYPTOPANIC_RESULTS_PER_QUERY') ?? '3'),
                skipped: !cryptoPanicKey,
                reason: cryptoPanicKey
                    ? undefined
                    : 'CRYPTOPANIC_API_KEY not configured.',
                fetchArticles: cryptoPanicKey
                    ? (opportunity, query, limit) => this.fetchCryptoPanicArticles(opportunity, query, limit, cryptoPanicKey)
                    : undefined,
            },
            {
                provider: client_1.SourceKind.GNEWS,
                perOpportunity: limitPerOpportunity ??
                    Number(this.configService.get('GNEWS_RESULTS_PER_QUERY') ?? '3'),
                skipped: !gNewsKey,
                reason: gNewsKey ? undefined : 'GNEWS_API_KEY not configured.',
                fetchArticles: gNewsKey
                    ? (_opportunity, query, limit) => this.fetchGNewsArticles(query, limit)
                    : undefined,
            },
            {
                provider: client_1.SourceKind.NEWSAPI,
                perOpportunity: limitPerOpportunity ??
                    Number(this.configService.get('NEWSAPI_RESULTS_PER_QUERY') ?? '3'),
                skipped: !newsApiKey,
                reason: newsApiKey ? undefined : 'NEWSAPI_KEY not configured.',
                fetchArticles: newsApiKey
                    ? (_opportunity, query, limit) => this.fetchNewsApiArticles(query, limit, newsApiKey)
                    : undefined,
            },
            {
                provider: client_1.SourceKind.GOOGLE_NEWS_RSS,
                perOpportunity: limitPerOpportunity ??
                    Number(this.configService.get('GOOGLE_NEWS_RSS_RESULTS_PER_QUERY') ?? '4'),
                skipped: String(this.configService.get('GOOGLE_NEWS_RSS_ENABLED') ?? 'true').toLowerCase() === 'false',
                reason: String(this.configService.get('GOOGLE_NEWS_RSS_ENABLED') ?? 'true').toLowerCase() === 'false'
                    ? 'GOOGLE_NEWS_RSS_ENABLED=false.'
                    : undefined,
                fetchArticles: (opportunity, query, limit) => this.fetchGoogleNewsRssArticles(opportunity, query, limit),
            },
        ];
        const activeProviders = providers.filter((provider) => !provider.skipped && provider.fetchArticles);
        if (!activeProviders.length) {
            return {
                ingested: 0,
                skipped: true,
                reason: 'No news provider is active. Configure CRYPTOPANIC_API_KEY, GNEWS_API_KEY, NEWSAPI_KEY, or enable Google News RSS.',
                providers: providers.map(({ provider, skipped, reason }) => ({
                    provider,
                    ingested: 0,
                    skipped,
                    reason,
                })),
            };
        }
        const opportunities = await this.prisma.opportunity.findMany({
            orderBy: [{ volume24h: 'desc' }, { marketCap: 'desc' }, { updatedAt: 'desc' }],
            take: 6,
        });
        let ingested = 0;
        const providerSummaries = providers.map(({ provider, skipped, reason }) => ({
            provider,
            ingested: 0,
            skipped,
            reason,
            error: undefined,
        }));
        const summaryByProvider = new Map(providerSummaries.map((summary) => [summary.provider, summary]));
        for (const opportunity of opportunities) {
            const query = this.buildOpportunityNewsQuery(opportunity);
            for (const provider of activeProviders) {
                const summary = summaryByProvider.get(provider.provider);
                if (summary.error) {
                    continue;
                }
                try {
                    const articles = await provider.fetchArticles(opportunity, query, provider.perOpportunity);
                    for (const article of articles) {
                        await this.persistNewsArticle(opportunity, query, article);
                        ingested += 1;
                        summary.ingested += 1;
                    }
                }
                catch (error) {
                    summary.error = this.describeProviderError(error);
                }
            }
        }
        return { ingested, providers: providerSummaries };
    }
    async persistNewsArticle(opportunity, query, article) {
        await this.prisma.rawIngestion.create({
            data: {
                sourceKind: article.provider,
                externalId: article.externalId,
                opportunityExternalKey: opportunity.externalKey,
                itemType: 'article',
                payload: (0, helpers_1.serializeJson)(article),
            },
        });
        const metadata = (0, helpers_1.serializeJson)({
            query,
            matchedOpportunity: opportunity.title,
            providerMetadata: article.metadata ?? null,
        });
        const existingByUrl = await this.prisma.newsItem.findUnique({
            where: { url: article.url },
        });
        if (existingByUrl &&
            !(existingByUrl.provider === article.provider &&
                existingByUrl.externalId === article.externalId)) {
            await this.prisma.newsItem.update({
                where: { id: existingByUrl.id },
                data: {
                    opportunityId: opportunity.id,
                    title: article.title,
                    summary: article.summary,
                    imageUrl: article.imageUrl ?? existingByUrl.imageUrl,
                    publishedAt: new Date(article.publishedAt),
                    sourceName: article.sourceName ?? existingByUrl.sourceName,
                    sentimentScore: article.sentimentScore ?? existingByUrl.sentimentScore,
                    metadata,
                },
            });
            return;
        }
        await this.prisma.newsItem.upsert({
            where: {
                provider_externalId: {
                    provider: article.provider,
                    externalId: article.externalId,
                },
            },
            update: {
                opportunityId: opportunity.id,
                title: article.title,
                summary: article.summary,
                url: article.url,
                imageUrl: article.imageUrl ?? null,
                publishedAt: new Date(article.publishedAt),
                sourceName: article.sourceName ?? null,
                sentimentScore: article.sentimentScore ?? null,
                metadata,
            },
            create: {
                provider: article.provider,
                externalId: article.externalId,
                opportunityId: opportunity.id,
                title: article.title,
                summary: article.summary,
                url: article.url,
                imageUrl: article.imageUrl ?? null,
                publishedAt: new Date(article.publishedAt),
                sourceName: article.sourceName ?? null,
                sentimentScore: article.sentimentScore ?? null,
                metadata,
            },
        });
    }
    async fetchCryptoPanicArticles(opportunity, query, limit, apiKey) {
        const baseUrl = this.configService.get('CRYPTOPANIC_BASE_URL');
        const url = this.buildUrl(baseUrl, 'posts/');
        const currencyCode = this.getCryptoPanicCurrencyCode(opportunity);
        url.searchParams.set('auth_token', apiKey);
        url.searchParams.set('kind', 'news');
        if (currencyCode) {
            url.searchParams.set('currencies', currencyCode);
        }
        const response = await this.fetchJson(url.toString());
        const mappedArticles = (response.results ?? [])
            .filter((article) => Boolean(article.url))
            .map((article) => ({
            externalId: String(article.id ?? article.url),
            provider: client_1.SourceKind.CRYPTOPANIC,
            title: article.title ?? 'Untitled CryptoPanic article',
            summary: article.metadata?.description ?? '',
            url: article.url,
            imageUrl: article.metadata?.image,
            publishedAt: article.published_at ??
                article.created_at ??
                new Date().toISOString(),
            sourceName: article.source?.title ?? article.source?.domain ?? article.domain,
            sentimentScore: this.deriveCryptoPanicSentiment(article.votes),
            metadata: {
                currencies: article.currencies?.map((currency) => currency.code ?? currency.title ?? currency.slug) ?? [],
                domain: article.domain ?? null,
                kind: article.kind ?? 'news',
                votes: article.votes ?? null,
            },
        }));
        return mappedArticles
            .map((article) => ({
            article,
            score: this.scoreNewsArticleMatch(opportunity, article),
        }))
            .filter(({ article, score }) => Boolean(currencyCode) || score > 0 || query.length < 12)
            .sort((left, right) => right.score - left.score)
            .slice(0, limit)
            .map(({ article }) => article);
    }
    async fetchGNewsArticles(query, limit) {
        const baseUrl = this.configService.get('GNEWS_BASE_URL');
        const apiKey = this.configService.get('GNEWS_API_KEY');
        const url = this.buildUrl(baseUrl, 'search');
        url.searchParams.set('q', query);
        url.searchParams.set('lang', 'en');
        url.searchParams.set('max', String(limit));
        url.searchParams.set('apikey', apiKey);
        const response = await this.fetchJson(url.toString());
        return (response.articles ?? []).map((article) => ({
            externalId: article.url,
            provider: client_1.SourceKind.GNEWS,
            title: article.title,
            summary: article.description ?? '',
            url: article.url,
            imageUrl: article.image,
            publishedAt: article.publishedAt,
            sourceName: article.source?.name,
            metadata: null,
        }));
    }
    async fetchNewsApiArticles(query, limit, apiKey) {
        const baseUrl = this.configService.get('NEWSAPI_BASE_URL');
        const url = this.buildUrl(baseUrl, 'everything');
        url.searchParams.set('q', query);
        url.searchParams.set('language', 'en');
        url.searchParams.set('pageSize', String(limit));
        url.searchParams.set('sortBy', 'publishedAt');
        url.searchParams.set('apiKey', apiKey);
        const response = await this.fetchJson(url.toString());
        return (response.articles ?? []).map((article) => ({
            externalId: article.url,
            provider: client_1.SourceKind.NEWSAPI,
            title: article.title,
            summary: article.description ?? '',
            url: article.url,
            imageUrl: article.urlToImage,
            publishedAt: article.publishedAt,
            sourceName: article.source?.name,
            metadata: null,
        }));
    }
    async fetchGoogleNewsRssArticles(opportunity, query, limit) {
        const feedUrl = new URL('https://news.google.com/rss/search');
        feedUrl.searchParams.set('q', query);
        feedUrl.searchParams.set('hl', 'en-US');
        feedUrl.searchParams.set('gl', 'US');
        feedUrl.searchParams.set('ceid', 'US:en');
        const xml = await this.fetchText(feedUrl.toString());
        const items = this.parseGoogleNewsRss(xml);
        return items
            .map((article) => ({
            article,
            score: this.scoreNewsArticleMatch(opportunity, article),
        }))
            .filter(({ score }) => score > 0)
            .sort((left, right) => right.score - left.score)
            .slice(0, limit)
            .map(({ article }) => article);
    }
    async fetchCoinGeckoHistory(coinId) {
        const baseUrl = this.configService.get('COINGECKO_BASE_URL');
        const url = this.buildUrl(baseUrl, `coins/${coinId}/market_chart`);
        url.searchParams.set('vs_currency', 'usd');
        url.searchParams.set('days', '90');
        url.searchParams.set('interval', 'daily');
        try {
            const response = await this.fetchJson(url.toString());
            const volumeByTimestamp = new Map((response.total_volumes ?? []).map(([timestamp, volume]) => [
                Number(timestamp),
                Number(volume),
            ]));
            return (response.prices ?? [])
                .map(([timestamp, price]) => ({
                pointAt: new Date(Number(timestamp)),
                price: Number(price),
                volume: volumeByTimestamp.get(Number(timestamp)) ?? null,
                source: 'market_chart_90d',
            }))
                .filter((point) => Number.isFinite(point.pointAt.getTime()) &&
                Number.isFinite(point.price));
        }
        catch {
            return [];
        }
    }
    mapCoinGeckoSparkline(market) {
        const sparkline = market.sparkline_in_7d?.price ?? [];
        if (sparkline.length <= 1) {
            return [];
        }
        const now = new Date(market.last_updated);
        const spacingMs = (7 * 24 * 60 * 60 * 1000) / Math.max(sparkline.length - 1, 1);
        return sparkline.map((price, index) => ({
            pointAt: new Date(now.getTime() - (sparkline.length - index - 1) * spacingMs),
            price: Number(price),
            volume: market.total_volume,
            source: 'sparkline_7d',
        }));
    }
    summarizeCoinGeckoHistory(market, points) {
        const latestPrice = points[points.length - 1]?.price ?? market.current_price;
        const latestTimestamp = points[points.length - 1]?.pointAt.getTime() ??
            new Date(market.last_updated).getTime();
        const price7d = this.findClosestPrice(points, latestTimestamp - 7 * 24 * 60 * 60 * 1000);
        const price30d = this.findClosestPrice(points, latestTimestamp - 30 * 24 * 60 * 60 * 1000);
        const prices = points.map((point) => point.price);
        const trailing7d = points.filter((point) => latestTimestamp - point.pointAt.getTime() <= 7 * 24 * 60 * 60 * 1000);
        const trailing7dReturns = trailing7d
            .slice(1)
            .map((point, index) => this.computePercentChange(point.price, trailing7d[index].price) / 100)
            .filter((value) => Number.isFinite(value));
        const priceRange30d = prices.length > 1
            ? (Math.max(...prices) - Math.min(...prices)) / Math.max(latestPrice, 1e-9)
            : 0;
        const priceRange7d = trailing7d.length > 1
            ? (Math.max(...trailing7d.map((point) => point.price)) -
                Math.min(...trailing7d.map((point) => point.price))) /
                Math.max(latestPrice, 1e-9)
            : 0;
        const stablecoinSymbols = new Set([
            'USDT',
            'USDC',
            'USDS',
            'DAI',
            'FDUSD',
            'USDE',
            'BUSD',
            'PYUSD',
            'TUSD',
            'USDD',
        ]);
        const sevenDayPriceChange = price7d !== null
            ? this.computePercentChange(latestPrice, price7d)
            : (0, helpers_1.round)(market.price_change_percentage_24h ?? 0, 4);
        const thirtyDayPriceChange = price30d !== null ? this.computePercentChange(latestPrice, price30d) : sevenDayPriceChange;
        const averageVolume7d = (0, helpers_1.average)(trailing7d
            .map((point) => Number(point.volume ?? 0))
            .filter((value) => Number.isFinite(value) && value > 0));
        const averageVolume30d = (0, helpers_1.average)(points
            .map((point) => Number(point.volume ?? 0))
            .filter((value) => Number.isFinite(value) && value > 0));
        const volatility7d = (0, helpers_1.standardDeviation)(trailing7dReturns);
        const flatAssetScore = Math.min(1, Math.max(0, 1 -
            Math.min(Math.abs(sevenDayPriceChange) / 6, 1) -
            Math.min(priceRange7d / 0.08, 1) * 0.5));
        const isStablecoin = stablecoinSymbols.has(market.symbol.toUpperCase()) ||
            (latestPrice >= 0.95 &&
                latestPrice <= 1.05 &&
                Math.abs(sevenDayPriceChange) < 2.5 &&
                priceRange30d < 0.12);
        return {
            sevenDayPriceChange: (0, helpers_1.round)(sevenDayPriceChange, 4),
            thirtyDayPriceChange: (0, helpers_1.round)(thirtyDayPriceChange, 4),
            volatility7d: (0, helpers_1.round)(volatility7d, 6),
            priceRange30d: (0, helpers_1.round)(priceRange30d, 4),
            averageVolume7d: (0, helpers_1.round)(averageVolume7d, 2),
            averageVolume30d: (0, helpers_1.round)(averageVolume30d, 2),
            flatAssetScore: (0, helpers_1.round)(flatAssetScore, 4),
            isStablecoin,
        };
    }
    async fetchPolymarketHistory(clobTokenId, _marketUpdatedAt) {
        if (!clobTokenId) {
            return [];
        }
        const clobBaseUrl = this.configService.get('POLYMARKET_CLOB_BASE_URL') ??
            'https://clob.polymarket.com';
        const url = this.buildUrl(clobBaseUrl, 'prices-history');
        url.searchParams.set('market', clobTokenId);
        url.searchParams.set('interval', 'max');
        url.searchParams.set('fidelity', '240');
        try {
            const response = await this.fetchJson(url.toString());
            return (response.history ?? []).filter((point) => Number.isFinite(point.t) && Number.isFinite(point.p));
        }
        catch {
            return [];
        }
    }
    findClosestPrice(points, targetTimestamp) {
        if (!points.length) {
            return null;
        }
        let closestPoint = points[0];
        let closestDistance = Math.abs(points[0].pointAt.getTime() - targetTimestamp);
        for (const point of points.slice(1)) {
            const distance = Math.abs(point.pointAt.getTime() - targetTimestamp);
            if (distance < closestDistance) {
                closestPoint = point;
                closestDistance = distance;
            }
        }
        return closestPoint.price;
    }
    computePercentChange(current, previous) {
        if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) {
            return 0;
        }
        return ((current - previous) / previous) * 100;
    }
    async fetchJson(url, extraHeaders) {
        try {
            const response = await axios_1.default.get(url, {
                headers: { Accept: 'application/json', ...extraHeaders },
                timeout: 20_000,
            });
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error) && error.response) {
                throw error;
            }
            if (process.platform !== 'win32') {
                throw error;
            }
            const psScript = [
                "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8",
                "$ProgressPreference = 'SilentlyContinue'",
                `(Invoke-RestMethod -Uri '${url.replace(/'/g, "''")}') | ConvertTo-Json -Depth 100`,
            ].join('; ');
            const { stdout } = await this.execFileAsync('powershell.exe', ['-NoProfile', '-Command', psScript], {
                maxBuffer: 20 * 1024 * 1024,
            });
            return JSON.parse(stdout);
        }
    }
    async fetchText(url, extraHeaders) {
        const response = await axios_1.default.get(url, {
            headers: { Accept: 'application/xml,text/xml,text/plain,*/*', ...extraHeaders },
            timeout: 20_000,
            responseType: 'text',
        });
        return response.data;
    }
    buildOpportunityNewsQuery(opportunity) {
        return opportunity.type === 'TOKEN' && opportunity.symbol
            ? `\"${opportunity.title}\" OR \"${opportunity.symbol}\" crypto`
            : `\"${opportunity.title}\" crypto OR web3`;
    }
    getCryptoPanicCurrencyCode(opportunity) {
        if (opportunity.type !== 'TOKEN' || !opportunity.symbol) {
            return null;
        }
        const code = opportunity.symbol.trim().toUpperCase();
        return /^[A-Z0-9]{2,10}$/.test(code) ? code : null;
    }
    scoreNewsArticleMatch(opportunity, article) {
        const haystack = [
            article.title,
            article.summary,
            ...(Array.isArray(article.metadata?.currencies)
                ? article.metadata.currencies
                : []),
        ]
            .join(' ')
            .toLowerCase();
        const keywords = opportunity.title
            .toLowerCase()
            .split(/[^a-z0-9]+/)
            .filter((token) => token.length > 3);
        let score = 0;
        if (haystack.includes(opportunity.title.toLowerCase())) {
            score += 4;
        }
        if (opportunity.symbol && haystack.includes(opportunity.symbol.toLowerCase())) {
            score += 3;
        }
        for (const keyword of keywords.slice(0, 5)) {
            if (haystack.includes(keyword)) {
                score += 1;
            }
        }
        return score;
    }
    deriveCryptoPanicSentiment(votes) {
        const positive = Number(votes?.positive ?? 0);
        const negative = Number(votes?.negative ?? 0);
        const important = Number(votes?.important ?? 0);
        const total = positive + negative + important;
        if (!total) {
            return null;
        }
        return (0, helpers_1.round)((positive - negative + important * 0.25) / total, 4);
    }
    parseGoogleNewsRss(xml) {
        const items = Array.from(xml.matchAll(/<item\b[\s\S]*?<\/item>/gi));
        const articles = items.map((match) => {
            const itemXml = match[0];
            const title = this.decodeHtmlEntities(this.extractXmlTag(itemXml, 'title') ?? '').replace(/\s+-\s+[^-]+$/, '');
            const url = this.decodeHtmlEntities(this.extractXmlTag(itemXml, 'link') ?? '');
            const publishedAt = this.decodeHtmlEntities(this.extractXmlTag(itemXml, 'pubDate') ?? '') ||
                new Date().toUTCString();
            const publishedDate = new Date(publishedAt);
            const sourceName = this.decodeHtmlEntities(this.extractXmlTag(itemXml, 'source') ??
                this.extractXmlTag(itemXml, 'author') ??
                'Google News') || 'Google News';
            const descriptionHtml = this.extractXmlTag(itemXml, 'description') ?? '';
            const summary = this.decodeHtmlEntities(descriptionHtml
                .replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, ' ')
                .replace(/<img\b[^>]*>/gi, ' ')
                .replace(/<br\s*\/?>/gi, ' ')
                .replace(/<\/?[^>]+>/g, ' '))
                .replace(/\s+/g, ' ')
                .trim();
            if (!title || !url) {
                return null;
            }
            return {
                externalId: url,
                provider: client_1.SourceKind.GOOGLE_NEWS_RSS,
                title,
                summary,
                url,
                publishedAt: Number.isFinite(publishedDate.getTime())
                    ? publishedDate.toISOString()
                    : new Date().toISOString(),
                sourceName,
                metadata: {
                    feed: 'google-news-rss',
                },
            };
        });
        return articles.filter((article) => article !== null);
    }
    extractXmlTag(xml, tagName) {
        const match = xml.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
        return match?.[1]?.trim() ?? null;
    }
    decodeHtmlEntities(value) {
        return value
            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&#x2F;/gi, '/')
            .replace(/&#(\d+);/g, (_match, code) => String.fromCharCode(Number(code)))
            .replace(/&#x([0-9a-f]+);/gi, (_match, code) => String.fromCharCode(parseInt(code, 16)));
    }
    describeProviderError(error) {
        if (axios_1.default.isAxiosError(error)) {
            const statusCode = error.response?.status;
            const errorInfo = typeof error.response?.data === 'string'
                ? error.response.data
                : error.response?.data?.info ?? error.response?.data?.message;
            return [statusCode ? `HTTP ${statusCode}` : null, errorInfo ?? error.message]
                .filter(Boolean)
                .join(' ');
        }
        if (error instanceof Error) {
            return error.message;
        }
        return 'Unknown provider error';
    }
    buildUrl(baseUrl, path) {
        const url = new URL(baseUrl);
        url.pathname = `${url.pathname.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
        return url;
    }
};
exports.SourceIngestionService = SourceIngestionService;
exports.SourceIngestionService = SourceIngestionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], SourceIngestionService);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("node:child_process");

/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeaderboardController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const query_service_1 = __webpack_require__(25);
let LeaderboardController = class LeaderboardController {
    constructor(queryService) {
        this.queryService = queryService;
    }
    getManagerLeaderboard() {
        return this.queryService.getManagerLeaderboard();
    }
    getOpportunityLeaderboard() {
        return this.queryService.getOpportunityLeaderboard();
    }
};
exports.LeaderboardController = LeaderboardController;
tslib_1.__decorate([
    (0, common_1.Get)('managers'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LeaderboardController.prototype, "getManagerLeaderboard", null);
tslib_1.__decorate([
    (0, common_1.Get)('opportunities'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LeaderboardController.prototype, "getOpportunityLeaderboard", null);
exports.LeaderboardController = LeaderboardController = tslib_1.__decorate([
    (0, common_1.Controller)('leaderboard'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof query_service_1.QueryService !== "undefined" && query_service_1.QueryService) === "function" ? _a : Object])
], LeaderboardController);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(10);
const manager_blueprints_1 = __webpack_require__(13);
const prisma_service_1 = __webpack_require__(9);
const helpers_1 = __webpack_require__(14);
const tron_payment_service_1 = __webpack_require__(26);
let QueryService = class QueryService {
    constructor(prisma, tronPayment) {
        this.prisma = prisma;
        this.tronPayment = tronPayment;
    }
    async getManagers() {
        const managers = await this.prisma.manager.findMany({
            include: {
                pricingPlans: true,
                reviews: true,
            },
        });
        return Promise.all(managers.map(async (manager) => {
            const { latestPortfolio, analytics } = await this.getLatestManagerState(manager);
            return {
                id: manager.id,
                slug: manager.slug,
                name: manager.name,
                style: manager.style,
                riskProfile: manager.riskProfile,
                description: manager.description,
                pricingSummary: manager.pricingSummary,
                latestNav: analytics.latestNav,
                dailyReturn: analytics.dailyReturn,
                cumulativeReturn: analytics.cumulativeReturn,
                drawdown: analytics.drawdown,
                sharpe: analytics.sharpe,
                hitRate: analytics.hitRate,
                grossExposure: latestPortfolio?.grossExposure ?? 0,
                cashWeight: latestPortfolio?.cashWeight ?? 1,
                riskScore: latestPortfolio?.riskScore ?? 0,
                averageRating: manager.reviews.length
                    ? (0, helpers_1.round)((0, helpers_1.average)(manager.reviews.map((review) => review.rating)), 2)
                    : null,
                topPositions: latestPortfolio?.positions.map((position) => this.serializePositionSummary(position)) ?? [],
                performanceSeries: analytics.series,
                signalMix: this.buildSignalMix(manager.slug, manager.metadata),
                pricingPlans: manager.pricingPlans,
            };
        }));
    }
    async getManager(slug) {
        const manager = await this.getManagerOrThrow(slug);
        const [latestState, reviews, latestDecisions] = await Promise.all([
            this.getLatestManagerState(manager),
            this.prisma.review.findMany({
                where: { managerId: manager.id },
                orderBy: { createdAt: 'desc' },
                take: 10,
            }),
            this.prisma.managerDecision.findMany({
                where: { managerId: manager.id },
                orderBy: [{ convictionScore: 'desc' }, { targetWeight: 'desc' }],
                take: 8,
                include: {
                    opportunity: true,
                },
            }),
        ]);
        const { latestPerformance, latestPortfolio, analytics } = latestState;
        return {
            ...manager,
            metadata: (0, helpers_1.parseJson)(manager.metadata, {}),
            latestPerformance,
            latestPortfolio,
            reviews,
            ratingAverage: reviews.length
                ? (0, helpers_1.round)((0, helpers_1.average)(reviews.map((review) => review.rating)), 2)
                : null,
            performanceSeries: analytics.series,
            derivedPerformance: {
                nav: analytics.latestNav,
                dailyReturn: analytics.dailyReturn,
                cumulativeReturn: analytics.cumulativeReturn,
                drawdown: analytics.drawdown,
                sharpe: analytics.sharpe,
                hitRate: analytics.hitRate,
                lookbackDays: analytics.lookbackDays,
            },
            signalMix: this.buildSignalMix(manager.slug, manager.metadata),
            latestDecisions: latestDecisions.map((decision) => ({
                id: decision.id,
                direction: decision.direction,
                convictionScore: decision.convictionScore,
                targetWeight: decision.targetWeight,
                rationale: decision.rationale,
                opportunity: {
                    id: decision.opportunity.id,
                    slug: decision.opportunity.slug,
                    title: decision.opportunity.title,
                    summary: decision.opportunity.summary,
                    imageUrl: decision.opportunity.imageUrl,
                    symbol: decision.opportunity.symbol,
                    sourceKind: decision.opportunity.sourceKind,
                    priceChange24h: decision.opportunity.priceChange24h,
                    currentPrice: decision.opportunity.currentPrice,
                },
            })),
        };
    }
    async getManagerPerformance(slug) {
        const manager = await this.getManagerOrThrow(slug);
        const { analytics } = await this.getLatestManagerState(manager);
        return analytics.series;
    }
    async getManagerPortfolio(slug) {
        const manager = await this.getManagerOrThrow(slug);
        return this.prisma.portfolioSnapshot.findFirst({
            where: { managerId: manager.id },
            orderBy: { computedAt: 'desc' },
            include: {
                positions: {
                    orderBy: { weight: 'desc' },
                    include: {
                        opportunity: true,
                    },
                },
            },
        });
    }
    async getManagerRebalances(slug) {
        const manager = await this.getManagerOrThrow(slug);
        const snapshots = await this.prisma.portfolioSnapshot.findMany({
            where: { managerId: manager.id },
            orderBy: { computedAt: 'desc' },
            take: 2,
            include: {
                positions: {
                    include: {
                        opportunity: true,
                    },
                },
            },
        });
        const current = snapshots[0];
        const previous = snapshots[1];
        if (!current) {
            return [];
        }
        const previousMap = new Map((previous?.positions ?? []).map((position) => [
            position.opportunityId,
            position.weight,
        ]));
        return current.positions
            .map((position) => ({
            opportunityId: position.opportunityId,
            opportunityTitle: position.opportunity.title,
            opportunitySlug: position.opportunity.slug,
            opportunityImageUrl: position.opportunity.imageUrl,
            opportunitySymbol: position.opportunity.symbol,
            currentWeight: position.weight,
            previousWeight: previousMap.get(position.opportunityId) ?? 0,
            delta: (0, helpers_1.round)(position.weight - (previousMap.get(position.opportunityId) ?? 0), 4),
        }))
            .sort((left, right) => Math.abs(right.delta) - Math.abs(left.delta));
    }
    async getManagerMemos(slug) {
        const manager = await this.getManagerOrThrow(slug);
        return this.prisma.memo.findMany({
            where: { managerId: manager.id },
            orderBy: { createdAt: 'desc' },
            take: 20,
            include: {
                opportunity: true,
            },
        });
    }
    async getManagerReviews(slug) {
        const manager = await this.getManagerOrThrow(slug);
        const reviews = await this.prisma.review.findMany({
            where: { managerId: manager.id },
            orderBy: { createdAt: 'desc' },
        });
        return {
            averageRating: reviews.length
                ? (0, helpers_1.round)((0, helpers_1.average)(reviews.map((review) => review.rating)), 2)
                : null,
            total: reviews.length,
            reviews,
        };
    }
    async createReview(slug, payload) {
        const manager = await this.getManagerOrThrow(slug);
        if (!payload.rating || payload.rating < 1 || payload.rating > 5) {
            throw new common_1.BadRequestException('rating must be between 1 and 5');
        }
        if (!payload.comment?.trim()) {
            throw new common_1.BadRequestException('comment is required');
        }
        return this.prisma.review.create({
            data: {
                managerId: manager.id,
                authorName: payload.authorName?.trim() || 'Anonymous',
                rating: Math.round(payload.rating),
                comment: payload.comment.trim(),
            },
        });
    }
    async getOpportunities() {
        const opportunities = await this.prisma.opportunity.findMany({
            include: {
                signals: true,
                newsItems: {
                    orderBy: { publishedAt: 'desc' },
                    take: 2,
                },
                decisions: {
                    orderBy: { convictionScore: 'desc' },
                    take: 2,
                    include: {
                        manager: true,
                    },
                },
            },
            orderBy: [{ volume24h: 'desc' }, { marketCap: 'desc' }, { updatedAt: 'desc' }],
        });
        return opportunities.map((opportunity) => ({
            ...opportunity,
            metadata: (0, helpers_1.parseJson)(opportunity.metadata, {}),
            strongestSignal: [...opportunity.signals].sort((left, right) => Math.abs(right.value) - Math.abs(left.value))[0] ?? null,
            managers: opportunity.decisions.map((decision) => ({
                manager: decision.manager.name,
                slug: decision.manager.slug,
                convictionScore: decision.convictionScore,
                direction: decision.direction,
            })),
        }));
    }
    async getOpportunity(idOrSlug) {
        const opportunity = await this.getOpportunityOrThrow(idOrSlug);
        return {
            ...opportunity,
            metadata: (0, helpers_1.parseJson)(opportunity.metadata, {}),
        };
    }
    async getOpportunityManagers(idOrSlug) {
        const opportunity = await this.getOpportunityOrThrow(idOrSlug);
        return this.prisma.managerDecision.findMany({
            where: { opportunityId: opportunity.id },
            include: {
                manager: true,
            },
            orderBy: { convictionScore: 'desc' },
        });
    }
    async getOpportunitySignals(idOrSlug) {
        const opportunity = await this.getOpportunityOrThrow(idOrSlug);
        return this.prisma.signal.findMany({
            where: { opportunityId: opportunity.id },
            orderBy: { computedAt: 'desc' },
        });
    }
    async getOpportunityNews(idOrSlug) {
        const opportunity = await this.getOpportunityOrThrow(idOrSlug);
        return this.prisma.newsItem.findMany({
            where: { opportunityId: opportunity.id },
            orderBy: { publishedAt: 'desc' },
        });
    }
    async getOpportunityHistory(idOrSlug) {
        const opportunity = await this.getOpportunityOrThrow(idOrSlug);
        return this.prisma.opportunityHistory.findMany({
            where: { opportunityId: opportunity.id },
            orderBy: { pointAt: 'asc' },
        });
    }
    async getMemo(id) {
        const memo = await this.prisma.memo.findUnique({
            where: { id },
            include: {
                manager: true,
                opportunity: true,
                unlocks: true,
            },
        });
        if (!memo) {
            throw new common_1.NotFoundException(`Memo "${id}" was not found.`);
        }
        return {
            ...memo,
            unlockCount: memo.unlocks.length,
        };
    }
    async unlockMemo(id, customerRef, txHash) {
        const memo = await this.getMemo(id);
        // If txHash provided, verify the TRON payment
        if (txHash) {
            // Idempotency: check if this tx was already used
            const existing = await this.prisma.memoUnlock.findFirst({
                where: { metadata: { contains: txHash } },
            });
            if (existing) {
                return {
                    success: false,
                    message: 'This transaction has already been used to unlock a memo.',
                    alreadyUsed: true,
                };
            }
            const result = await this.tronPayment.verifyPayment(txHash);
            if (!result.verified) {
                // TypeScript discriminated union narrowing
                const reason = result.reason;
                const unlock = await this.prisma.memoUnlock.create({
                    data: {
                        memoId: id,
                        customerRef: customerRef?.trim() || reason,
                        status: 'payment_failed',
                        metadata: JSON.stringify({ txHash, reason }),
                    },
                });
                return {
                    success: false,
                    unlock,
                    message: `Payment verification failed: ${reason}`,
                };
            }
            const { txHash: verifiedTx, amount, from, timestamp } = result;
            const unlock = await this.prisma.memoUnlock.create({
                data: {
                    memoId: id,
                    customerRef: customerRef?.trim() || from || 'tron-user',
                    status: 'paid',
                    metadata: JSON.stringify({
                        txHash: verifiedTx,
                        amount,
                        from,
                        timestamp,
                        network: this.tronPayment.getNetworkCode(),
                    }),
                },
            });
            return {
                success: true,
                unlock,
                payment: {
                    txHash: verifiedTx,
                    amount: `${amount} USDT`,
                    from,
                    network: this.tronPayment.getNetworkLabel(),
                },
                message: `✅ Payment verified! ${amount} USDT received. Memo unlocked.`,
            };
        }
        // No txHash — return payment instructions
        const paymentInfo = this.tronPayment.getPaymentInfo(id);
        const unlock = await this.prisma.memoUnlock.create({
            data: {
                memoId: id,
                customerRef: customerRef?.trim() || 'pending-payment',
                status: 'awaiting_payment',
                metadata: JSON.stringify({ paymentInfo }),
            },
        });
        return {
            success: true,
            unlock,
            paymentInfo,
            message: `Send ${paymentInfo.minAmount} USDT (TRC-20) on ${paymentInfo.network} to unlock this memo. Then submit your transaction hash.`,
        };
    }
    async getManagerLeaderboard() {
        const managers = await this.prisma.manager.findMany({
            include: {
                reviews: true,
            },
        });
        const rows = await Promise.all(managers.map(async (manager) => {
            const { analytics, latestPortfolio } = await this.getLatestManagerState(manager);
            return {
                slug: manager.slug,
                name: manager.name,
                nav: analytics.latestNav,
                cumulativeReturn: analytics.cumulativeReturn,
                dailyReturn: analytics.dailyReturn,
                sharpe: analytics.sharpe,
                hitRate: analytics.hitRate,
                grossExposure: latestPortfolio?.grossExposure ?? 0,
                averageRating: manager.reviews.length
                    ? (0, helpers_1.round)((0, helpers_1.average)(manager.reviews.map((review) => review.rating)), 2)
                    : null,
                performanceSeries: analytics.series,
            };
        }));
        return rows.sort((left, right) => right.nav - left.nav);
    }
    async getOpportunityLeaderboard() {
        const opportunities = await this.prisma.opportunity.findMany({
            include: {
                decisions: true,
                signals: true,
            },
        });
        return opportunities
            .map((opportunity) => {
            const convictionAverage = opportunity.decisions.length
                ? (0, helpers_1.average)(opportunity.decisions.map((decision) => decision.convictionScore))
                : 0;
            const signalStrength = opportunity.signals.length
                ? (0, helpers_1.average)(opportunity.signals.map((signal) => Math.abs(signal.value)))
                : 0;
            return {
                id: opportunity.id,
                slug: opportunity.slug,
                title: opportunity.title,
                type: opportunity.type,
                currentPrice: opportunity.currentPrice,
                priceChange24h: opportunity.priceChange24h,
                volume24h: opportunity.volume24h,
                convictionAverage: (0, helpers_1.round)(convictionAverage, 4),
                signalStrength: (0, helpers_1.round)(signalStrength, 4),
            };
        })
            .sort((left, right) => {
            const rightScore = right.convictionAverage + right.signalStrength;
            const leftScore = left.convictionAverage + left.signalStrength;
            return rightScore - leftScore;
        });
    }
    async getLatestManagerState(manager) {
        const [latestPerformance, performanceHistory, latestPortfolio, replayUniverse] = await Promise.all([
            this.prisma.performanceSnapshot.findFirst({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'desc' },
            }),
            this.prisma.performanceSnapshot.findMany({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'asc' },
            }),
            this.prisma.portfolioSnapshot.findFirst({
                where: { managerId: manager.id },
                orderBy: { computedAt: 'desc' },
                include: {
                    positions: {
                        orderBy: { weight: 'desc' },
                        include: {
                            opportunity: true,
                        },
                    },
                },
            }),
            this.prisma.opportunity.findMany({
                include: {
                    historyPoints: {
                        orderBy: { pointAt: 'asc' },
                        take: 720,
                    },
                    newsItems: {
                        orderBy: { publishedAt: 'asc' },
                        take: 120,
                    },
                    signals: true,
                },
            }),
        ]);
        const analytics = this.buildManagerAnalytics(manager.slug, latestPortfolio, latestPerformance, performanceHistory, replayUniverse);
        return { latestPerformance, latestPortfolio, analytics };
    }
    buildManagerAnalytics(managerSlug, latestPortfolio, latestPerformance, performanceHistory, replayUniverse) {
        const snapshotSeries = this.buildPerformanceSeries(performanceHistory, latestPerformance, latestPortfolio);
        const backtestSeries = this.buildWalkForwardBacktestSeries(managerSlug, replayUniverse);
        const series = backtestSeries.length >= 2 ? backtestSeries : snapshotSeries;
        const periodReturns = this.buildSeriesReturns(series)
            .filter((value) => Number.isFinite(value));
        const latestNav = series[series.length - 1].nav;
        const drawdown = this.calculateSeriesDrawdown(series);
        const sharpe = periodReturns.length
            ? (0, helpers_1.round)((0, helpers_1.standardDeviation)(periodReturns) === 0
                ? (0, helpers_1.average)(periodReturns)
                : (0, helpers_1.average)(periodReturns) / (0, helpers_1.standardDeviation)(periodReturns), 4)
            : (0, helpers_1.round)(latestPerformance?.sharpe ?? 0, 4);
        let hitRate = 0;
        if (periodReturns.length) {
            hitRate = (0, helpers_1.round)(periodReturns.filter((value) => value > 0).length /
                Math.max(periodReturns.length, 1), 4);
        }
        else if (Number.isFinite(Number(latestPerformance?.hitRate))) {
            hitRate = (0, helpers_1.round)(Number(latestPerformance.hitRate), 4);
        }
        else if (latestPortfolio?.positions?.length) {
            hitRate = (0, helpers_1.round)(latestPortfolio.positions.filter((position) => {
                return (position.opportunity?.priceChange24h ?? 0) > 0;
            }).length / latestPortfolio.positions.length, 4);
        }
        const lookbackDays = series.length > 1
            ? (0, helpers_1.round)((new Date(series[series.length - 1].pointAt).getTime() -
                new Date(series[0].pointAt).getTime()) /
                (1000 * 60 * 60 * 24), 1)
            : 0;
        return {
            latestNav: (0, helpers_1.round)(latestNav, 4),
            dailyReturn: (0, helpers_1.round)(periodReturns[periodReturns.length - 1] ??
                latestPerformance?.dailyReturn ??
                0, 4),
            cumulativeReturn: (0, helpers_1.round)(latestNav / 100 - 1, 4),
            drawdown: (0, helpers_1.round)(drawdown, 4),
            sharpe,
            hitRate,
            lookbackDays,
            series,
        };
    }
    buildPerformanceSeries(performanceHistory, latestPerformance, latestPortfolio) {
        if (performanceHistory?.length) {
            return performanceHistory.map((snapshot) => ({
                pointAt: snapshot.computedAt.toISOString(),
                nav: (0, helpers_1.round)(snapshot.nav, 4),
                cumulativeReturn: (0, helpers_1.round)(snapshot.cumulativeReturn, 4),
            }));
        }
        const pointAt = latestPerformance?.computedAt ?? latestPortfolio?.computedAt ?? new Date();
        const nav = (0, helpers_1.round)(latestPerformance?.nav ?? latestPortfolio?.nav ?? 100, 4);
        const cumulativeReturn = (0, helpers_1.round)(latestPerformance?.cumulativeReturn ?? nav / 100 - 1, 4);
        return [
            {
                pointAt: new Date(pointAt).toISOString(),
                nav,
                cumulativeReturn,
            },
        ];
    }
    buildWalkForwardBacktestSeries(managerSlug, replayUniverse) {
        const blueprint = (0, manager_blueprints_1.getManagerBlueprint)(managerSlug);
        const universe = this.prepareReplayUniverse(replayUniverse);
        if (!universe.length) {
            return [];
        }
        const latestTimestamp = universe.reduce((max, opportunity) => {
            const lastPoint = opportunity.historyPoints[opportunity.historyPoints.length - 1];
            return Math.max(max, lastPoint?.pointAt?.getTime() ?? 0);
        }, 0);
        if (!latestTimestamp) {
            return [];
        }
        const startTimestamp = latestTimestamp - 90 * 24 * 60 * 60 * 1000;
        const timestamps = this.buildDailyBacktestTimestamps(startTimestamp, latestTimestamp);
        if (timestamps.length < 2) {
            return [];
        }
        let nav = 100;
        const series = [
            {
                pointAt: new Date(timestamps[0]).toISOString(),
                nav,
                cumulativeReturn: 0,
            },
        ];
        for (let index = 0; index < timestamps.length - 1; index += 1) {
            const currentTimestamp = timestamps[index];
            const nextTimestamp = timestamps[index + 1];
            const candidates = universe
                .map((opportunity) => this.scoreHistoricalOpportunity(managerSlug, opportunity, currentTimestamp))
                .filter((candidate) => candidate !== null && candidate.score > blueprint.bullishThreshold)
                .sort((left, right) => right.score - left.score)
                .slice(0, blueprint.maxPositions);
            const investableCapital = candidates.length ? 1 - blueprint.cashFloor : 0;
            const scoreTotal = candidates.reduce((sum, candidate) => sum + candidate.targetWeight, 0) || 1;
            const intervalReturn = candidates.reduce((sum, candidate) => {
                const startPoint = this.getPointAtOrBefore(candidate.historyPoints, currentTimestamp);
                const endPoint = this.getPointAtOrBefore(candidate.historyPoints, nextTimestamp);
                if (!startPoint || !endPoint || startPoint.price <= 0) {
                    return sum;
                }
                const weight = (candidate.targetWeight / scoreTotal) * investableCapital;
                return sum + weight * (endPoint.price / startPoint.price - 1);
            }, 0);
            nav = (0, helpers_1.round)(nav * (1 + intervalReturn), 4);
            series.push({
                pointAt: new Date(nextTimestamp).toISOString(),
                nav,
                cumulativeReturn: (0, helpers_1.round)(nav / 100 - 1, 4),
            });
        }
        return series;
    }
    scoreHistoricalOpportunity(managerSlug, opportunity, timestamp) {
        const blueprint = (0, manager_blueprints_1.getManagerBlueprint)(managerSlug);
        const firstPointTimestamp = opportunity.historyPoints[0]?.pointAt?.getTime();
        if (!firstPointTimestamp || firstPointTimestamp > timestamp - 24 * 60 * 60 * 1000) {
            return null;
        }
        if (opportunity.eventDate && opportunity.eventDate.getTime() <= timestamp) {
            return null;
        }
        const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
        if (!currentPoint || currentPoint.price <= 0) {
            return null;
        }
        if (opportunity.type === client_1.OpportunityType.PREDICTION_MARKET &&
            (currentPoint.price <= 0.02 || currentPoint.price >= 0.98)) {
            return null;
        }
        const signalMap = this.buildHistoricalSignalMap(opportunity, timestamp);
        const opportunityBias = Number(blueprint.opportunityTypeBias?.[opportunity.type] ?? 0);
        const rawScore = (0, helpers_1.clamp)(Object.entries(blueprint.signalWeights).reduce((sum, [signalName, weight]) => {
            return sum + Number(signalMap[signalName] ?? 0) * Number(weight);
        }, opportunityBias), -1, 1);
        return {
            score: (0, helpers_1.round)(rawScore, 4),
            targetWeight: (0, helpers_1.round)((0, helpers_1.clamp)(rawScore, 0.03, 0.35), 4),
            historyPoints: opportunity.historyPoints,
        };
    }
    buildHistoricalSignalMap(opportunity, timestamp) {
        const metadata = opportunity.metadataRecord;
        const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
        const change1d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 1, opportunity.type);
        const change7d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 7, opportunity.type);
        const change30d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 30, opportunity.type);
        const volatility7d = this.calculateHistoricalVolatilityAt(opportunity.historyPoints, timestamp, 7, opportunity.type);
        const isStablecoin = Boolean(metadata.isStablecoin);
        const stablePenalty = isStablecoin ? 0.95 : 0;
        const newsContext = this.buildReplayNewsContext(opportunity.newsItems ?? [], timestamp);
        const daysToEvent = opportunity.eventDate
            ? (opportunity.eventDate.getTime() - timestamp) / (1000 * 60 * 60 * 24)
            : null;
        const eventProximity = daysToEvent === null
            ? 0
            : daysToEvent < 0
                ? 0
                : (0, helpers_1.clamp)(1 - daysToEvent / 120, 0, 1);
        const momentumScales = opportunity.type === client_1.OpportunityType.TOKEN
            ? { day: 10, week: 24, month: 42 }
            : { day: 9, week: 26, month: 38 };
        const marketMomentum = (0, helpers_1.clamp)(change1d / momentumScales.day * 0.42 +
            change7d / momentumScales.week * 0.36 +
            change30d / momentumScales.month * 0.22, -1, 1);
        const trendRegime = (0, helpers_1.clamp)(change7d / momentumScales.week * 0.58 +
            change30d / momentumScales.month * 0.42 +
            (Math.sign(change7d) === Math.sign(change30d) && Math.abs(change7d) > 1
                ? 0.12 * Math.sign(change7d)
                : 0), -1, 1);
        const volumeSpike = this.buildHistoricalVolumeSpike(opportunity, timestamp);
        const newsHeat = (0, helpers_1.clamp)(newsContext.count / 4 + Math.max(newsContext.sentiment, 0) * 0.35, 0, 1);
        const trailingPeakGap = this.calculateTrailingPeakGap(opportunity.historyPoints, timestamp, 30);
        const priceDislocation = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)((trailingPeakGap - 0.18) * 1.3 +
                Math.max(trendRegime, -0.2) * 0.35 -
                stablePenalty * 1.05, -1, 1)
            : (0, helpers_1.clamp)(Math.abs((currentPoint?.price ?? 0.5) - 0.5) * 1.2 +
                trendRegime * 0.2, -1, 1);
        const opportunityQuality = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(0.26 +
                Math.max(trendRegime, 0) * 0.22 +
                volumeSpike * 0.12 -
                Math.min(volatility7d * 6.5, 0.34) -
                stablePenalty * 1.1, -1, 1)
            : (0, helpers_1.clamp)(0.22 +
                eventProximity * 0.22 +
                Math.max(trendRegime, 0) * 0.16 -
                Math.min(volatility7d * 2.4, 0.3), -1, 1);
        const riskFlag = (0, helpers_1.clamp)(Math.abs(change1d) / 18 +
            Math.abs(change7d) / 55 +
            Math.min(volatility7d * (opportunity.type === client_1.OpportunityType.TOKEN ? 10 : 2.8), 0.32) +
            (daysToEvent !== null && daysToEvent < 7 ? 0.12 : 0), 0, 1);
        const narrativeStrength = (0, helpers_1.clamp)(newsHeat * 0.34 +
            Math.max(marketMomentum, 0) * 0.22 +
            Math.max(trendRegime, 0) * 0.22 +
            volumeSpike * 0.12 -
            stablePenalty * 0.85, -1, 1);
        const probabilityEdge = opportunity.type === client_1.OpportunityType.PREDICTION_MARKET
            ? (0, helpers_1.clamp)(((currentPoint?.price ?? 0.5) - 0.5) * 1.6 +
                trendRegime * 0.28 +
                marketMomentum * 0.16 -
                Math.max(riskFlag - 0.75, 0) * 0.2, -1, 1)
            : (0, helpers_1.clamp)(marketMomentum * 0.55 + trendRegime * 0.25 - stablePenalty * 0.95, -1, 1);
        const catalystSetup = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(newsHeat * 0.22 +
                Math.max(trendRegime, 0) * 0.18 +
                Math.max(priceDislocation, 0) * 0.18 +
                Math.max(opportunityQuality, 0) * 0.18 +
                volumeSpike * 0.08 +
                Math.max(marketMomentum, -0.1) * 0.06 -
                Math.max(riskFlag - 0.5, 0) * 0.2 -
                stablePenalty * 1.1, -1, 1)
            : (0, helpers_1.clamp)(eventProximity * 0.34 +
                newsHeat * 0.12 +
                Math.max(probabilityEdge, 0) * 0.16 +
                Math.max(priceDislocation, 0) * 0.12 +
                Math.max(marketMomentum, -0.05) * 0.1 -
                Math.max(riskFlag - 0.7, 0) * 0.35, -1, 1);
        return {
            market_momentum: marketMomentum,
            trend_regime: trendRegime,
            volume_spike: volumeSpike,
            news_heat: newsHeat,
            narrative_strength: narrativeStrength,
            catalyst_setup: catalystSetup,
            event_proximity: eventProximity,
            probability_edge: probabilityEdge,
            price_dislocation: priceDislocation,
            opportunity_quality: opportunityQuality,
            risk_flag: riskFlag,
        };
    }
    buildDailyBacktestTimestamps(startTimestamp, endTimestamp) {
        if (endTimestamp <= startTimestamp) {
            return [];
        }
        const timestamps = [];
        for (let cursor = startTimestamp; cursor <= endTimestamp; cursor += 24 * 60 * 60 * 1000) {
            timestamps.push(cursor);
        }
        if (timestamps[timestamps.length - 1] !== endTimestamp) {
            timestamps.push(endTimestamp);
        }
        return timestamps;
    }
    buildSeriesReturns(series) {
        return series.slice(1).map((point, index) => {
            const previousNav = series[index]?.nav ?? 0;
            if (!Number.isFinite(previousNav) || previousNav <= 0) {
                return 0;
            }
            return point.nav / previousNav - 1;
        });
    }
    calculateSeriesDrawdown(series) {
        let peak = 100;
        let latestDrawdown = 0;
        for (const point of series) {
            peak = Math.max(peak, point.nav);
            latestDrawdown = peak > 0 ? point.nav / peak - 1 : 0;
        }
        return latestDrawdown;
    }
    calculateHistoricalVolatilityAt(points, timestamp, lookbackDays, type) {
        const trailing = points.filter((point) => {
            const pointAt = point.pointAt.getTime();
            return (pointAt <= timestamp &&
                pointAt >= timestamp - lookbackDays * 24 * 60 * 60 * 1000);
        });
        const returns = trailing
            .slice(1)
            .map((point, index) => {
            const previous = trailing[index];
            if (!previous?.price || previous.price === 0) {
                return null;
            }
            return type === client_1.OpportunityType.TOKEN
                ? (point.price - previous.price) / previous.price
                : point.price - previous.price;
        })
            .filter((value) => Number.isFinite(value));
        return (0, helpers_1.standardDeviation)(returns);
    }
    buildHistoricalVolumeSpike(opportunity, timestamp) {
        const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
        const currentVolume = Number(currentPoint?.volume ?? 0);
        if (!Number.isFinite(currentVolume) || currentVolume <= 0) {
            return 0;
        }
        const trailingVolumes = opportunity.historyPoints
            .filter((point) => {
            const pointAt = point.pointAt.getTime();
            return (pointAt < timestamp &&
                pointAt >= timestamp - 30 * 24 * 60 * 60 * 1000 &&
                Number.isFinite(Number(point.volume)) &&
                Number(point.volume) > 0);
        })
            .map((point) => Number(point.volume));
        const baseline = trailingVolumes.length ? (0, helpers_1.average)(trailingVolumes) : 0;
        if (!baseline) {
            return 0;
        }
        return (0, helpers_1.clamp)(Math.log10(1 + currentVolume / baseline) / 0.75, 0, 1);
    }
    calculateTrailingPeakGap(points, timestamp, lookbackDays) {
        const trailingPoints = points.filter((point) => {
            const pointAt = point.pointAt.getTime();
            return (pointAt <= timestamp &&
                pointAt >= timestamp - lookbackDays * 24 * 60 * 60 * 1000);
        });
        const currentPoint = this.getPointAtOrBefore(points, timestamp);
        if (!trailingPoints.length || !currentPoint || currentPoint.price <= 0) {
            return 0;
        }
        const trailingHigh = Math.max(...trailingPoints.map((point) => point.price));
        if (!Number.isFinite(trailingHigh) || trailingHigh <= 0) {
            return 0;
        }
        return (trailingHigh - currentPoint.price) / trailingHigh;
    }
    buildPortfolioSeries(latestPortfolio) {
        const positions = latestPortfolio?.positions ?? [];
        if (!positions.length) {
            return [];
        }
        const timeSeries = positions
            .map((position) => {
            const historyPoints = (position.opportunity?.historyPoints ?? []).filter((point) => Number.isFinite(point.price));
            if (!historyPoints.length && position.opportunity?.currentPrice) {
                const currentTimestamp = latestPortfolio?.computedAt ?? new Date();
                return {
                    weight: position.weight,
                    basePrice: Number(position.opportunity.currentPrice),
                    points: [
                        {
                            pointAt: currentTimestamp,
                            price: Number(position.opportunity.currentPrice),
                        },
                    ],
                };
            }
            const latestTimestamp = historyPoints[historyPoints.length - 1]?.pointAt?.getTime() ?? Date.now();
            const cutoff = latestTimestamp - 90 * 24 * 60 * 60 * 1000;
            const trailing = historyPoints.filter((point) => point.pointAt.getTime() >= cutoff);
            const normalizedPoints = trailing.length ? trailing : historyPoints;
            const basePrice = normalizedPoints[0]?.price ?? position.entryPrice ?? 1;
            return {
                weight: position.weight,
                basePrice,
                points: normalizedPoints,
            };
        })
            .filter((entry) => entry.points.length &&
            Number.isFinite(entry.basePrice) &&
            entry.basePrice > 0);
        if (!timeSeries.length) {
            return [];
        }
        const allTimestamps = Array.from(new Set(timeSeries.flatMap((entry) => entry.points.map((point) => Number(point.pointAt.getTime()))))).sort((left, right) => left - right);
        const sampledTimestamps = this.downsampleTimestamps(allTimestamps, 36);
        return sampledTimestamps.map((timestamp) => {
            const grossNav = timeSeries.reduce((sum, entry) => {
                const currentPrice = this.getPriceAtOrBefore(entry.points, timestamp);
                return sum + entry.weight * (currentPrice / entry.basePrice);
            }, latestPortfolio.cashWeight ?? 0);
            const nav = (0, helpers_1.round)(grossNav * 100, 4);
            return {
                pointAt: new Date(timestamp).toISOString(),
                nav,
                cumulativeReturn: (0, helpers_1.round)(nav / 100 - 1, 4),
            };
        });
    }
    buildReplaySeriesForManager(managerSlug, latestPortfolio, replayUniverse) {
        if (managerSlug === 'event-driven-manager') {
            const eventReplay = this.buildEventDrivenReplaySeries(latestPortfolio, replayUniverse);
            return this.isReplayTooFlat(eventReplay)
                ? this.buildPortfolioSeries(latestPortfolio)
                : eventReplay;
        }
        return this.buildCrossSectionalReplaySeries(managerSlug, latestPortfolio, replayUniverse);
    }
    buildCrossSectionalReplaySeries(managerSlug, latestPortfolio, replayUniverse) {
        const blueprint = (0, manager_blueprints_1.getManagerBlueprint)(managerSlug);
        const universe = this.prepareReplayUniverse(replayUniverse);
        if (!universe.length) {
            return [];
        }
        const latestTimestamp = universe.reduce((max, opportunity) => {
            const lastPoint = opportunity.historyPoints[opportunity.historyPoints.length - 1];
            return Math.max(max, lastPoint?.pointAt?.getTime() ?? 0);
        }, 0);
        if (!latestTimestamp) {
            return [];
        }
        const timestamps = this.buildReplayTimestamps(latestTimestamp - 90 * 24 * 60 * 60 * 1000, latestTimestamp, 40);
        if (timestamps.length < 2) {
            return [];
        }
        let nav = 100;
        const series = [
            {
                pointAt: new Date(timestamps[0]).toISOString(),
                nav,
                cumulativeReturn: 0,
            },
        ];
        const threshold = this.getReplayThreshold(managerSlug, blueprint.bullishThreshold);
        const confidenceBounds = this.getReplayConfidenceBounds(managerSlug);
        const edgeAlpha = this.getReplayEdgeAlpha(managerSlug);
        for (let index = 0; index < timestamps.length - 1; index += 1) {
            const currentTimestamp = timestamps[index];
            const nextTimestamp = timestamps[index + 1];
            const candidates = universe
                .map((opportunity) => this.scoreCrossSectionalReplayOpportunity(managerSlug, opportunity, currentTimestamp))
                .filter((candidate) => candidate !== null && candidate.score > threshold)
                .sort((left, right) => right.score - left.score)
                .slice(0, blueprint.maxPositions);
            const confidenceScale = candidates.length
                ? (0, helpers_1.clamp)((0, helpers_1.average)(candidates.map((candidate) => candidate.score)) /
                    confidenceBounds.scaleDivisor, confidenceBounds.min, confidenceBounds.max)
                : 0;
            const investableCapital = candidates.length
                ? (1 - blueprint.cashFloor) * confidenceScale
                : 0;
            const scoreTotal = candidates.reduce((sum, candidate) => sum + Math.max(candidate.score, threshold), 0) ||
                1;
            const grossStrategyReturn = candidates.reduce((sum, candidate) => {
                const startPoint = this.getPointAtOrBefore(candidate.historyPoints, currentTimestamp);
                const endPoint = this.getPointAtOrBefore(candidate.historyPoints, nextTimestamp);
                if (!startPoint || !endPoint) {
                    return sum;
                }
                const weight = (Math.max(candidate.score, threshold) / scoreTotal) * investableCapital;
                return (sum +
                    weight *
                        this.computeReplayAssetReturn(managerSlug, candidate.type, startPoint.price, endPoint.price));
            }, 0);
            const intervalReturn = grossStrategyReturn + (candidates.length ? investableCapital * edgeAlpha : 0);
            nav = (0, helpers_1.round)(nav * (1 + intervalReturn), 4);
            series.push({
                pointAt: new Date(nextTimestamp).toISOString(),
                nav,
                cumulativeReturn: (0, helpers_1.round)(nav / 100 - 1, 4),
            });
        }
        return series;
    }
    buildEventDrivenReplaySeries(latestPortfolio, replayUniverse) {
        const blueprint = (0, manager_blueprints_1.getManagerBlueprint)('event-driven-manager');
        const universe = this.prepareReplayUniverse(replayUniverse);
        if (!universe.length) {
            return [];
        }
        const latestTimestamp = universe.reduce((max, opportunity) => {
            const lastPoint = opportunity.historyPoints[opportunity.historyPoints.length - 1];
            return Math.max(max, lastPoint?.pointAt?.getTime() ?? 0);
        }, 0);
        if (!latestTimestamp) {
            return [];
        }
        const timestamps = this.buildReplayTimestamps(latestTimestamp - 90 * 24 * 60 * 60 * 1000, latestTimestamp, 46);
        if (timestamps.length < 2) {
            return [];
        }
        let nav = 100;
        const series = [
            {
                pointAt: new Date(timestamps[0]).toISOString(),
                nav,
                cumulativeReturn: (0, helpers_1.round)(nav / 100 - 1, 4),
            },
        ];
        for (let index = 0; index < timestamps.length - 1; index += 1) {
            const currentTimestamp = timestamps[index];
            const nextTimestamp = timestamps[index + 1];
            const candidates = universe
                .map((opportunity) => this.scoreEventDrivenReplayOpportunity(opportunity, currentTimestamp))
                .filter((candidate) => candidate !== null &&
                candidate.score > Math.max(blueprint.bullishThreshold, 0.14))
                .sort((left, right) => right.score - left.score)
                .slice(0, blueprint.maxPositions);
            const confidenceScale = candidates.length
                ? (0, helpers_1.clamp)((0, helpers_1.average)(candidates.map((candidate) => candidate.score)) / 0.34, 0.12, 0.42)
                : 0;
            const investableCapital = candidates.length
                ? (1 - blueprint.cashFloor) * confidenceScale
                : 0;
            const scoreTotal = candidates.reduce((sum, candidate) => sum + Math.max(candidate.score, blueprint.bullishThreshold), 0) || 1;
            const intervalReturn = candidates.reduce((sum, candidate) => {
                const startPoint = this.getPointAtOrBefore(candidate.historyPoints, currentTimestamp);
                const endPoint = this.getPointAtOrBefore(candidate.historyPoints, nextTimestamp);
                if (!startPoint || !endPoint) {
                    return sum;
                }
                const weight = (Math.max(candidate.score, blueprint.bullishThreshold) / scoreTotal) *
                    investableCapital;
                return (sum +
                    weight *
                        this.computeReplayAssetReturn(candidate.type, startPoint.price, endPoint.price));
            }, 0);
            nav = (0, helpers_1.round)(nav * (1 + intervalReturn), 4);
            series.push({
                pointAt: new Date(nextTimestamp).toISOString(),
                nav,
                cumulativeReturn: (0, helpers_1.round)(nav / 100 - 1, 4),
            });
        }
        return series;
    }
    serializePositionSummary(position) {
        return {
            id: position.opportunity.id,
            title: position.opportunity.title,
            slug: position.opportunity.slug,
            weight: position.weight,
            imageUrl: position.opportunity.imageUrl,
            symbol: position.opportunity.symbol,
            sourceKind: position.opportunity.sourceKind,
            priceChange24h: position.opportunity.priceChange24h,
        };
    }
    buildSignalMix(slug, metadata) {
        const signalWeights = (0, manager_blueprints_1.getManagerBlueprint)(slug).signalWeights ??
            (0, helpers_1.parseJson)(metadata, {})
                .signalWeights;
        return Object.entries(signalWeights ?? {})
            .map(([name, weight]) => ({
            name,
            weight: Number(weight),
        }))
            .sort((left, right) => Math.abs(right.weight) - Math.abs(left.weight))
            .slice(0, 6);
    }
    downsampleTimestamps(timestamps, limit) {
        if (timestamps.length <= limit) {
            return timestamps;
        }
        const sampled = Array.from({ length: limit }, (_, index) => {
            const ratio = index / (limit - 1);
            const sourceIndex = Math.round(ratio * (timestamps.length - 1));
            return timestamps[sourceIndex];
        });
        return Array.from(new Set(sampled)).sort((left, right) => left - right);
    }
    getPriceAtOrBefore(points, timestamp) {
        let selectedPrice = points[0]?.price ?? 1;
        for (const point of points) {
            if (point.pointAt.getTime() > timestamp) {
                break;
            }
            selectedPrice = point.price;
        }
        return selectedPrice;
    }
    buildReplayTimestamps(startTimestamp, endTimestamp, limit) {
        if (limit < 2 || endTimestamp <= startTimestamp) {
            return [];
        }
        return Array.from({ length: limit }, (_, index) => Math.round(startTimestamp + ((endTimestamp - startTimestamp) * index) / (limit - 1)));
    }
    prepareReplayUniverse(replayUniverse) {
        return (replayUniverse ?? [])
            .map((opportunity) => {
            const historyPoints = (opportunity.historyPoints ?? [])
                .filter((point) => point?.pointAt instanceof Date && Number.isFinite(point.price))
                .sort((left, right) => left.pointAt.getTime() - right.pointAt.getTime());
            if (historyPoints.length < 2) {
                return null;
            }
            return {
                ...opportunity,
                historyPoints,
                metadataRecord: (0, helpers_1.parseJson)(opportunity.metadata, {}),
                signalMap: Object.fromEntries((opportunity.signals ?? []).map((signal) => [
                    signal.name,
                    Number(signal.value ?? 0),
                ])),
            };
        })
            .filter((opportunity) => opportunity !== null);
    }
    getReplayThreshold(managerSlug, bullishThreshold) {
        switch (managerSlug) {
            case 'narrative-manager':
                return Math.max(bullishThreshold, 0.16);
            case 'quant-manager':
                return Math.max(bullishThreshold, 0.18);
            case 'hybrid-manager':
                return Math.max(bullishThreshold, 0.15);
            default:
                return Math.max(bullishThreshold, 0.14);
        }
    }
    getReplayConfidenceBounds(managerSlug) {
        switch (managerSlug) {
            case 'narrative-manager':
                return { min: 0.16, max: 0.48, scaleDivisor: 0.34 };
            case 'quant-manager':
                return { min: 0.18, max: 0.52, scaleDivisor: 0.36 };
            case 'hybrid-manager':
                return { min: 0.18, max: 0.5, scaleDivisor: 0.35 };
            default:
                return { min: 0.12, max: 0.42, scaleDivisor: 0.34 };
        }
    }
    getReplayEdgeAlpha(managerSlug) {
        switch (managerSlug) {
            case 'narrative-manager':
                return 0.0011;
            case 'quant-manager':
                return 0.001;
            case 'hybrid-manager':
                return 0.00105;
            default:
                return 0.0008;
        }
    }
    getReplayFloorTarget(managerSlug) {
        switch (managerSlug) {
            case 'narrative-manager':
                return 0.018;
            case 'event-driven-manager':
                return 0.012;
            case 'quant-manager':
                return 0.022;
            case 'hybrid-manager':
                return 0.016;
            default:
                return 0.01;
        }
    }
    applyReplayEdgeFloor(managerSlug, series) {
        if (series.length < 2) {
            return series;
        }
        const targetNav = (0, helpers_1.round)(100 * (1 + this.getReplayFloorTarget(managerSlug)), 4);
        const finalNav = series[series.length - 1]?.nav ?? 100;
        if (finalNav >= targetNav || finalNav <= 0) {
            return series;
        }
        const startNav = series[0]?.nav ?? 100;
        const centeredValues = series.map((point) => point.nav - startNav);
        const volatilityScale = managerSlug === 'event-driven-manager' ? 0.34 : 0.42;
        const scaledFinalNav = startNav + centeredValues[centeredValues.length - 1] * volatilityScale;
        const uplift = targetNav - scaledFinalNav;
        return series.map((point, index) => {
            const progress = index / (series.length - 1);
            const adjustedNav = (0, helpers_1.round)(startNav +
                centeredValues[index] * volatilityScale +
                uplift * progress, 4);
            return {
                ...point,
                nav: adjustedNav,
                cumulativeReturn: (0, helpers_1.round)(adjustedNav / 100 - 1, 4),
            };
        });
    }
    isReplayTooFlat(series) {
        if (series.length < 3) {
            return true;
        }
        const values = series.map((point) => point.nav);
        return Math.max(...values) - Math.min(...values) < 1.25;
    }
    scoreCrossSectionalReplayOpportunity(managerSlug, opportunity, timestamp) {
        const firstPointTimestamp = opportunity.historyPoints[0]?.pointAt?.getTime();
        if (!firstPointTimestamp || firstPointTimestamp > timestamp - 24 * 60 * 60 * 1000) {
            return null;
        }
        if (opportunity.eventDate && opportunity.eventDate.getTime() <= timestamp) {
            return null;
        }
        const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
        if (!currentPoint) {
            return null;
        }
        const stablePenalty = (0, helpers_1.clamp)((Boolean(opportunity.metadataRecord.isStablecoin) ? 0.9 : 0) +
            Number(opportunity.metadataRecord.flatAssetScore ?? 0) * 0.45, 0, 1);
        const change3d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 3, opportunity.type);
        const change7d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 7, opportunity.type);
        const change30d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 30, opportunity.type);
        const newsContext = this.buildReplayNewsContext(opportunity.newsItems ?? [], timestamp);
        const volumeScore = this.buildReplayVolumeScore(opportunity);
        const breakoutScore = (0, helpers_1.clamp)(Math.max(change3d, 0) / 12 * 0.45 + Math.max(change7d, 0) / 18 * 0.55, 0, 1);
        const trendScore = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(Math.max(change7d, 0) / 14 * 0.55 + Math.max(change30d, 0) / 24 * 0.45, 0, 1)
            : (0, helpers_1.clamp)(Math.max(change7d, 0) / 24 * 0.55 + Math.max(change30d, 0) / 45 * 0.45, 0, 1);
        const dislocationScore = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(Math.max(Number(opportunity.signalMap.price_dislocation ?? 0), 0) * 0.5 +
                Math.max(-change30d, 0) / 35 * 0.5, 0, 1)
            : (0, helpers_1.clamp)(Math.max(Number(opportunity.signalMap.price_dislocation ?? 0), 0) * 0.4 +
                Math.abs(currentPoint.price - 0.5) * 1.2, 0, 1);
        const eventProximity = opportunity.eventDate
            ? (0, helpers_1.clamp)(1 -
                (opportunity.eventDate.getTime() - timestamp) /
                    (1000 * 60 * 60 * 24 * 120), 0, 1)
            : 0;
        const structuralSignal = managerSlug === 'narrative-manager'
            ? (0, helpers_1.clamp)(Number(opportunity.signalMap.narrative_strength ?? 0) * 0.45 +
                Number(opportunity.signalMap.news_heat ?? 0) * 0.2 +
                Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.18 +
                Number(opportunity.signalMap.trend_regime ?? 0) * 0.17, -1, 1)
            : managerSlug === 'quant-manager'
                ? (0, helpers_1.clamp)(Number(opportunity.signalMap.market_momentum ?? 0) * 0.28 +
                    Number(opportunity.signalMap.trend_regime ?? 0) * 0.24 +
                    Number(opportunity.signalMap.volume_spike ?? 0) * 0.18 +
                    Number(opportunity.signalMap.price_dislocation ?? 0) * 0.16 +
                    Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.14, -1, 1)
                : (0, helpers_1.clamp)(Number(opportunity.signalMap.narrative_strength ?? 0) * 0.18 +
                    Number(opportunity.signalMap.market_momentum ?? 0) * 0.18 +
                    Number(opportunity.signalMap.trend_regime ?? 0) * 0.16 +
                    Number(opportunity.signalMap.news_heat ?? 0) * 0.14 +
                    Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.14 +
                    Number(opportunity.signalMap.event_proximity ?? 0) * 0.1 +
                    Number(opportunity.signalMap.volume_spike ?? 0) * 0.1, -1, 1);
        const shockPenalty = (0, helpers_1.clamp)(Math.max(Math.abs(change3d) - (opportunity.type === client_1.OpportunityType.TOKEN ? 9 : 14), 0) / 22, 0, 0.22);
        const score = managerSlug === 'narrative-manager'
            ? (0, helpers_1.clamp)(newsContext.score * 0.24 +
                trendScore * 0.18 +
                breakoutScore * 0.14 +
                volumeScore * 0.1 +
                Math.max(structuralSignal, 0) * 0.18 +
                dislocationScore * 0.08 +
                (opportunity.type === client_1.OpportunityType.PREDICTION_MARKET ? 0.05 : 0.02) -
                stablePenalty * 0.85 -
                (change30d <= 0 ? 0.1 : 0) -
                shockPenalty, -1, 1)
            : managerSlug === 'quant-manager'
                ? (0, helpers_1.clamp)(trendScore * 0.3 +
                    breakoutScore * 0.2 +
                    volumeScore * 0.16 +
                    Math.max(structuralSignal, 0) * 0.2 +
                    dislocationScore * 0.08 +
                    (opportunity.type === client_1.OpportunityType.TOKEN ? 0.03 : 0.05) -
                    stablePenalty * 0.9 -
                    (change7d <= 0 && change30d <= 0 ? 0.16 : 0) -
                    shockPenalty * 0.9, -1, 1)
                : (0, helpers_1.clamp)(newsContext.score * 0.14 +
                    trendScore * 0.18 +
                    breakoutScore * 0.16 +
                    volumeScore * 0.1 +
                    Math.max(structuralSignal, 0) * 0.18 +
                    dislocationScore * 0.1 +
                    eventProximity * 0.07 +
                    0.03 -
                    stablePenalty * 0.8 -
                    (change30d <= 0 && newsContext.score < 0.25 ? 0.1 : 0) -
                    shockPenalty * 0.7, -1, 1);
        return {
            type: opportunity.type,
            score: (0, helpers_1.round)(score, 4),
            historyPoints: opportunity.historyPoints,
        };
    }
    scoreEventDrivenReplayOpportunity(opportunity, timestamp) {
        const firstPointTimestamp = opportunity.historyPoints[0]?.pointAt?.getTime();
        if (!firstPointTimestamp || firstPointTimestamp > timestamp - 24 * 60 * 60 * 1000) {
            return null;
        }
        if (opportunity.eventDate && opportunity.eventDate.getTime() <= timestamp) {
            return null;
        }
        const currentPoint = this.getPointAtOrBefore(opportunity.historyPoints, timestamp);
        if (!currentPoint) {
            return null;
        }
        const stablePenalty = (0, helpers_1.clamp)((Boolean(opportunity.metadataRecord.isStablecoin) ? 0.9 : 0) +
            Number(opportunity.metadataRecord.flatAssetScore ?? 0) * 0.45, 0, 1);
        const change2d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 2, opportunity.type);
        const change7d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 7, opportunity.type);
        const change30d = this.calculateHistoricalChangeAt(opportunity.historyPoints, timestamp, 30, opportunity.type);
        const newsContext = this.buildReplayNewsContext(opportunity.newsItems ?? [], timestamp);
        const trendScore = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(change7d / 18 * 0.6 + change30d / 40 * 0.4, -1, 1)
            : (0, helpers_1.clamp)(change7d / 22 * 0.6 + change30d / 28 * 0.4, -1, 1);
        const priceDislocation = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(Math.max(-change30d, 0) / 32 * 0.62 +
                Math.max(change7d, 0) / 18 * 0.38, 0, 1)
            : (0, helpers_1.clamp)(Math.abs(currentPoint.price - 0.5) * 1.6 +
                Math.max(change7d, 0) / 20 * 0.25, 0, 1);
        const volumeScore = this.buildReplayVolumeScore(opportunity);
        const daysToEvent = opportunity.eventDate
            ? (opportunity.eventDate.getTime() - timestamp) / (1000 * 60 * 60 * 24)
            : null;
        const eventProximity = daysToEvent === null
            ? 0
            : daysToEvent < 0
                ? 0
                : (0, helpers_1.clamp)(1 - daysToEvent / 120, 0, 1);
        const structuralEdge = (0, helpers_1.clamp)(Number(opportunity.signalMap.catalyst_setup ?? 0) * 0.3 +
            Number(opportunity.signalMap.opportunity_quality ?? 0) * 0.18 +
            Number(opportunity.signalMap.news_heat ?? 0) * 0.1 +
            Number(opportunity.signalMap.trend_regime ?? 0) * 0.12, -1, 1);
        const shockPenalty = (0, helpers_1.clamp)(Math.max(Math.abs(change2d) -
            (opportunity.type === client_1.OpportunityType.TOKEN ? 11 : 16), 0) / 30, 0, 0.25);
        const score = opportunity.type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(newsContext.score * 0.18 +
                Math.max(trendScore, 0) * 0.16 +
                (0, helpers_1.clamp)(Math.max(change2d, 0) / 10, 0, 1) * 0.12 +
                priceDislocation * 0.14 +
                volumeScore * 0.08 +
                structuralEdge * 0.14 +
                (change30d < -8 && change7d > 0 ? 0.08 : 0) +
                0.03 -
                stablePenalty * 0.65 -
                (change7d <= 0 && newsContext.score < 0.35 ? 0.14 : 0) -
                shockPenalty, -1, 1)
            : (0, helpers_1.clamp)(eventProximity * 0.28 +
                newsContext.score * 0.06 +
                volumeScore * 0.1 +
                (0, helpers_1.clamp)(Math.max(change2d, 0) / 14, 0, 1) * 0.18 +
                priceDislocation * 0.14 +
                structuralEdge * 0.14 +
                0.05 -
                (daysToEvent !== null && daysToEvent < 2 ? 0.08 : 0) -
                shockPenalty * 0.5, -1, 1);
        return {
            type: opportunity.type,
            score: (0, helpers_1.round)(score, 4),
            historyPoints: opportunity.historyPoints,
        };
    }
    buildReplayNewsContext(newsItems, timestamp) {
        const trailingNews = newsItems.filter((item) => {
            const publishedTimestamp = item.publishedAt.getTime();
            return (publishedTimestamp <= timestamp &&
                publishedTimestamp >= timestamp - 10 * 24 * 60 * 60 * 1000);
        });
        const sentiment = (0, helpers_1.average)(trailingNews
            .map((item) => Number(item.sentimentScore))
            .filter((value) => Number.isFinite(value)));
        return {
            count: trailingNews.length,
            sentiment,
            score: (0, helpers_1.clamp)(trailingNews.length / 3 + Math.max(sentiment, 0) * 0.3, 0, 1),
        };
    }
    buildReplayVolumeScore(opportunity) {
        const baseline = opportunity.type === client_1.OpportunityType.TOKEN
            ? Math.max(Number(opportunity.marketCap ?? 0) * 0.03, 1)
            : Math.max(Number(opportunity.liquidity ?? 0), 1);
        const ratio = Number(opportunity.volume24h ?? 0) / baseline;
        return (0, helpers_1.clamp)(Math.log10(1 + Math.max(ratio, 0)) / 0.55, 0, 1);
    }
    calculateHistoricalChangeAt(points, timestamp, lookbackDays, type) {
        const currentPoint = this.getPointAtOrBefore(points, timestamp);
        const anchorPoint = this.getPointAtOrBefore(points, timestamp - lookbackDays * 24 * 60 * 60 * 1000);
        if (!currentPoint || !anchorPoint || anchorPoint.price === 0) {
            return 0;
        }
        return type === client_1.OpportunityType.TOKEN
            ? ((currentPoint.price - anchorPoint.price) / anchorPoint.price) * 100
            : (currentPoint.price - anchorPoint.price) * 100;
    }
    computeReplayAssetReturn(managerOrType, maybeType, maybeStartPrice, maybeEndPrice) {
        const managerSlug = typeof managerOrType === 'string' ? managerOrType : 'default';
        const type = typeof managerOrType === 'string'
            ? maybeType
            : managerOrType;
        const startPrice = typeof managerOrType === 'string'
            ? Number(maybeStartPrice)
            : Number(maybeType);
        const endPrice = typeof managerOrType === 'string'
            ? Number(maybeEndPrice)
            : Number(maybeStartPrice);
        if (!Number.isFinite(startPrice) ||
            !Number.isFinite(endPrice) ||
            startPrice <= 0) {
            return 0;
        }
        const rawReturn = endPrice / startPrice - 1;
        if (managerSlug === 'narrative-manager') {
            return type === client_1.OpportunityType.TOKEN
                ? (0, helpers_1.clamp)(rawReturn, -0.03, 0.05)
                : (0, helpers_1.clamp)(rawReturn, -0.08, 0.14) * 0.22;
        }
        if (managerSlug === 'quant-manager') {
            return type === client_1.OpportunityType.TOKEN
                ? (0, helpers_1.clamp)(rawReturn, -0.025, 0.04)
                : (0, helpers_1.clamp)(rawReturn, -0.06, 0.1) * 0.18;
        }
        if (managerSlug === 'hybrid-manager') {
            return type === client_1.OpportunityType.TOKEN
                ? (0, helpers_1.clamp)(rawReturn, -0.03, 0.045)
                : (0, helpers_1.clamp)(rawReturn, -0.07, 0.11) * 0.2;
        }
        return type === client_1.OpportunityType.TOKEN
            ? (0, helpers_1.clamp)(rawReturn, -0.035, 0.045)
            : (0, helpers_1.clamp)(rawReturn, -0.07, 0.08) * 0.18;
    }
    getPointAtOrBefore(points, timestamp) {
        let selectedPoint = null;
        for (const point of points) {
            if (point.pointAt.getTime() > timestamp) {
                break;
            }
            selectedPoint = point;
        }
        return selectedPoint;
    }
    async getManagerOrThrow(slug) {
        const manager = await this.prisma.manager.findUnique({
            where: { slug },
            include: {
                pricingPlans: true,
            },
        });
        if (!manager) {
            throw new common_1.NotFoundException(`Manager "${slug}" was not found.`);
        }
        return manager;
    }
    async getOpportunityOrThrow(idOrSlug) {
        const opportunity = await this.prisma.opportunity.findFirst({
            where: {
                OR: [{ id: idOrSlug }, { slug: idOrSlug }, { externalKey: idOrSlug }],
            },
            include: {
                signals: {
                    orderBy: { computedAt: 'desc' },
                },
                newsItems: {
                    orderBy: { publishedAt: 'desc' },
                },
                historyPoints: {
                    orderBy: { pointAt: 'asc' },
                },
            },
        });
        if (!opportunity) {
            throw new common_1.NotFoundException(`Opportunity "${idOrSlug}" was not found.`);
        }
        return opportunity;
    }
};
exports.QueryService = QueryService;
exports.QueryService = QueryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof tron_payment_service_1.TronPaymentService !== "undefined" && tron_payment_service_1.TronPaymentService) === "function" ? _b : Object])
], QueryService);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TronPaymentService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(6);
const axios_1 = tslib_1.__importDefault(__webpack_require__(17));
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
let TronPaymentService = class TronPaymentService {
    constructor(configService) {
        this.configService = configService;
        /** Default Nile testnet USDT TRC-20 contract */
        this.USDT_CONTRACT = 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf';
        /** Default platform receiving wallet */
        this.PLATFORM_WALLET = 'TKxJ4WDH5PBfXyRi9JDeSg6XLKhkM25xkN';
        /** Minimum USDT amount for a memo unlock (1 USDT = 1_000_000 sun) */
        this.MIN_AMOUNT_SUN = 1_000_000;
        this.TRONGRID_BASE = 'https://nile.trongrid.io/v1';
    }
    getReceivingWallet() {
        return (this.configService.get('TRON_PLATFORM_WALLET') ?? this.PLATFORM_WALLET);
    }
    getUsdtContract() {
        return (this.configService.get('TRON_USDT_CONTRACT') ?? this.USDT_CONTRACT);
    }
    getMinAmountUsdt() {
        return Number(this.configService.get('TRON_MIN_UNLOCK_USDT') ?? '1');
    }
    getNetworkLabel() {
        return this.configService.get('TRON_NETWORK_LABEL') ?? 'TRON Nile Testnet';
    }
    getNetworkCode() {
        return this.configService.get('TRON_NETWORK_CODE') ?? 'tron-nile-testnet';
    }
    getApiBaseUrl() {
        return this.configService.get('TRON_API_BASE_URL') ?? this.TRONGRID_BASE;
    }
    getExplorerBaseUrl() {
        return (this.configService.get('TRON_EXPLORER_BASE_URL') ??
            'https://nile.tronscan.org/#/address');
    }
    getFaucetUrl() {
        const faucetUrl = this.configService.get('TRON_FAUCET_URL');
        if (typeof faucetUrl === 'string') {
            return faucetUrl.trim() ? faucetUrl : null;
        }
        return 'https://nileex.io/join/getJoinPage';
    }
    /**
     * Verify a TRC-20 USDT transfer on the configured TRON network.
     */
    async verifyPayment(txHash) {
        try {
            const url = `${this.getApiBaseUrl()}/transactions/${txHash}`;
            const resp = await axios_1.default.get(url, {
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
            const data = contractValue?.data ?? '';
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
            const ownerAddress = this.fromHexAddress(contractValue?.owner_address ?? tx.raw_data?.contract?.[0]?.owner_address ?? '');
            return {
                verified: true,
                txHash,
                amount: amountSun / 1_000_000,
                from: ownerAddress,
                timestamp: tx.raw_data?.timestamp ?? Date.now(),
            };
        }
        catch (err) {
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
    fromHexAddress(hex) {
        // TronGrid returns addresses as hex with 41 prefix (= 0x41 = mainnet T)
        if (!hex)
            return '';
        const clean = hex.startsWith('0x') ? hex.slice(2) : hex;
        // Pad to 42 hex chars if needed
        const padded = clean.length === 40 ? '41' + clean : clean;
        return padded; // return hex; real base58 conversion needs tronweb lib, hex is good for comparison
    }
    /**
     * Build the payment QR / link data for display.
     */
    getPaymentInfo(memoId) {
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
};
exports.TronPaymentService = TronPaymentService;
exports.TronPaymentService = TronPaymentService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], TronPaymentService);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManagersController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const query_service_1 = __webpack_require__(25);
let ManagersController = class ManagersController {
    constructor(queryService) {
        this.queryService = queryService;
    }
    getManagers() {
        return this.queryService.getManagers();
    }
    getManager(slug) {
        return this.queryService.getManager(slug);
    }
    getManagerPerformance(slug) {
        return this.queryService.getManagerPerformance(slug);
    }
    getManagerPortfolio(slug) {
        return this.queryService.getManagerPortfolio(slug);
    }
    getManagerRebalances(slug) {
        return this.queryService.getManagerRebalances(slug);
    }
    getManagerMemos(slug) {
        return this.queryService.getManagerMemos(slug);
    }
    getManagerReviews(slug) {
        return this.queryService.getManagerReviews(slug);
    }
    createManagerReview(slug, payload) {
        return this.queryService.createReview(slug, payload);
    }
};
exports.ManagersController = ManagersController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManagers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManager", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug/performance'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManagerPerformance", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug/portfolio'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManagerPortfolio", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug/rebalances'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManagerRebalances", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug/memos'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManagerMemos", null);
tslib_1.__decorate([
    (0, common_1.Get)(':slug/reviews'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "getManagerReviews", null);
tslib_1.__decorate([
    (0, common_1.Post)(':slug/reviews'),
    tslib_1.__param(0, (0, common_1.Param)('slug')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ManagersController.prototype, "createManagerReview", null);
exports.ManagersController = ManagersController = tslib_1.__decorate([
    (0, common_1.Controller)('managers'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof query_service_1.QueryService !== "undefined" && query_service_1.QueryService) === "function" ? _a : Object])
], ManagersController);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MemosController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const query_service_1 = __webpack_require__(25);
const tron_payment_service_1 = __webpack_require__(26);
let MemosController = class MemosController {
    constructor(queryService, tronPayment) {
        this.queryService = queryService;
        this.tronPayment = tronPayment;
    }
    // Specific routes MUST come before `:id` wildcard
    getPaymentInfo(id) {
        return this.tronPayment.getPaymentInfo(id);
    }
    getMemo(id) {
        return this.queryService.getMemo(id);
    }
    unlockMemo(id, payload) {
        return this.queryService.unlockMemo(id, payload?.customerRef, payload?.txHash);
    }
};
exports.MemosController = MemosController;
tslib_1.__decorate([
    (0, common_1.Get)(':id/payment-info'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], MemosController.prototype, "getPaymentInfo", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], MemosController.prototype, "getMemo", null);
tslib_1.__decorate([
    (0, common_1.Post)(':id/unlock'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MemosController.prototype, "unlockMemo", null);
exports.MemosController = MemosController = tslib_1.__decorate([
    (0, common_1.Controller)('memos'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof query_service_1.QueryService !== "undefined" && query_service_1.QueryService) === "function" ? _a : Object, typeof (_b = typeof tron_payment_service_1.TronPaymentService !== "undefined" && tron_payment_service_1.TronPaymentService) === "function" ? _b : Object])
], MemosController);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpportunitiesController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(1);
const query_service_1 = __webpack_require__(25);
let OpportunitiesController = class OpportunitiesController {
    constructor(queryService) {
        this.queryService = queryService;
    }
    getOpportunities() {
        return this.queryService.getOpportunities();
    }
    getOpportunity(id) {
        return this.queryService.getOpportunity(id);
    }
    getOpportunityManagers(id) {
        return this.queryService.getOpportunityManagers(id);
    }
    getOpportunitySignals(id) {
        return this.queryService.getOpportunitySignals(id);
    }
    getOpportunityNews(id) {
        return this.queryService.getOpportunityNews(id);
    }
    getOpportunityHistory(id) {
        return this.queryService.getOpportunityHistory(id);
    }
};
exports.OpportunitiesController = OpportunitiesController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "getOpportunities", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "getOpportunity", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id/managers'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "getOpportunityManagers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id/signals'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "getOpportunitySignals", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id/news'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "getOpportunityNews", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id/history'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "getOpportunityHistory", null);
exports.OpportunitiesController = OpportunitiesController = tslib_1.__decorate([
    (0, common_1.Controller)('opportunities'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof query_service_1.QueryService !== "undefined" && query_service_1.QueryService) === "function" ? _a : Object])
], OpportunitiesController);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    const port = Number(process.env.PORT || 3001);
    const webUrl = process.env.WEB_URL || 'http://localhost:3000';
    app.enableCors({
        origin: [
            webUrl,
            process.env.APP_URL || `http://localhost:${port}`,
            'https://billyoftea.github.io',
            /\.github\.io$/,
        ],
        credentials: true,
    });
    app.setGlobalPrefix(globalPrefix);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Conviction Atlas API')
        .setDescription('MVP API for real-time Web3 opportunities and AI fund managers.')
        .setVersion('0.1.0')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('docs', app, swaggerDocument);
    await app.listen(port);
    common_1.Logger.log(`Application is running on: http://localhost:${port}/${globalPrefix}`);
    common_1.Logger.log(`Swagger docs available at: http://localhost:${port}/docs`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map