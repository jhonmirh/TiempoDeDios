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
exports.PetitionsController = void 0;
const common_1 = require("@nestjs/common");
const petitions_service_1 = require("./petitions.service");
const create_petition_dto_1 = require("./dto/create-petition.dto");
let PetitionsController = class PetitionsController {
    constructor(petitionsService) {
        this.petitionsService = petitionsService;
    }
    async create(dto) {
        return this.petitionsService.create(dto);
    }
    async findAll() {
        return this.petitionsService.findAll();
    }
    async findOne(id) {
        return this.petitionsService.findOne(id);
    }
    async update(id, dto) {
        return this.petitionsService.update(id, dto);
    }
    async remove(id) {
        return this.petitionsService.remove(id);
    }
};
exports.PetitionsController = PetitionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_petition_dto_1.CreatePetitionDto]),
    __metadata("design:returntype", Promise)
], PetitionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetitionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetitionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_petition_dto_1.CreatePetitionDto]),
    __metadata("design:returntype", Promise)
], PetitionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PetitionsController.prototype, "remove", null);
exports.PetitionsController = PetitionsController = __decorate([
    (0, common_1.Controller)('petitions'),
    __metadata("design:paramtypes", [petitions_service_1.PetitionsService])
], PetitionsController);
//# sourceMappingURL=petitions.controller.js.map