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
exports.SermonsController = void 0;
const common_1 = require("@nestjs/common");
const sermons_service_1 = require("./sermons.service");
const create_sermon_dto_1 = require("./dto/create-sermon.dto");
const update_sermon_dto_1 = require("./dto/update-sermon.dto");
const response_sermon_dto_1 = require("./dto/response-sermon.dto");
let SermonsController = class SermonsController {
    constructor(sermonsService) {
        this.sermonsService = sermonsService;
    }
    async create(dto) {
        const sermon = await this.sermonsService.create(dto);
        return new response_sermon_dto_1.ResponseSermonDto(sermon);
    }
    async findAll() {
        const sermons = await this.sermonsService.findAll();
        return sermons.map(sermon => new response_sermon_dto_1.ResponseSermonDto(sermon));
    }
    async findOne(id) {
        const sermon = await this.sermonsService.findOne(id);
        return new response_sermon_dto_1.ResponseSermonDto(sermon);
    }
    async update(id, dto) {
        const sermon = await this.sermonsService.update(id, dto);
        return new response_sermon_dto_1.ResponseSermonDto(sermon);
    }
    async remove(id) {
        return this.sermonsService.remove(id);
    }
    async findByPastorId(pastorId) {
        const sermons = await this.sermonsService.findByPastorId(pastorId);
        return sermons.map(sermon => new response_sermon_dto_1.ResponseSermonDto(sermon));
    }
};
exports.SermonsController = SermonsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sermon_dto_1.CreateSermonDto]),
    __metadata("design:returntype", Promise)
], SermonsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SermonsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SermonsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sermon_dto_1.UpdateSermonDto]),
    __metadata("design:returntype", Promise)
], SermonsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SermonsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('pastor/:pastorId'),
    __param(0, (0, common_1.Param)('pastorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SermonsController.prototype, "findByPastorId", null);
exports.SermonsController = SermonsController = __decorate([
    (0, common_1.Controller)('sermons'),
    __metadata("design:paramtypes", [sermons_service_1.SermonsService])
], SermonsController);
//# sourceMappingURL=sermons.controller.js.map