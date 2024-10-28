"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevotionalsController = void 0;
const common_1 = require("@nestjs/common");
const devotionals_service_1 = require("./devotionals.service");
const create_devotional_dto_1 = require("./dto/create-devotional.dto");
const response_devotional_dto_1 = require("./dto/response-devotional.dto");
const pastors_service_1 = require("../pastor/pastors.service");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../guard/auth.guard");
const roles_guard_1 = require("../guard/roles.guard");
const swagger_2 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const roles_decorator_1 = require("../decorators/roles.decorator");
let DevotionalsController = class DevotionalsController {
    constructor(devotionalsService, pastorsService) {
        this.devotionalsService = devotionalsService;
        this.pastorsService = pastorsService;
    }
    async create(createDto, pastorId) {
        const pastor = await this.findPastorById(pastorId);
        const devotional = await this.devotionalsService.create(createDto, pastor);
        return new response_devotional_dto_1.ResponseDevotionalDto(devotional);
    }
    async findAll() {
        const devotionals = await this.devotionalsService.findAll();
        return devotionals.map((devotional) => new response_devotional_dto_1.ResponseDevotionalDto(devotional));
    }
    async findPastorById(pastorId) {
        return this.pastorsService.findById(pastorId);
    }
    async findByPastor(pastorId) {
        return this.devotionalsService.findByPastorId(pastorId);
    }
};
exports.DevotionalsController = DevotionalsController;
__decorate([
    (0, common_1.Post)('devotional'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_2.ApiSecurity)('bearer'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('pastorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_devotional_dto_1.CreateDevotionalDto, String]),
    __metadata("design:returntype", Promise)
], DevotionalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_2.ApiSecurity)('bearer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevotionalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('pastor/:pastorId'),
    (0, common_2.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_2.ApiSecurity)('bearer'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('pastorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DevotionalsController.prototype, "findByPastor", null);
exports.DevotionalsController = DevotionalsController = __decorate([
    (0, swagger_1.ApiTags)('devotionals'),
    (0, common_1.Controller)('devotionals'),
    __metadata("design:paramtypes", [devotionals_service_1.DevotionalsService,
        pastors_service_1.PastorsService])
], DevotionalsController);
//# sourceMappingURL=devotionals.controller.js.map