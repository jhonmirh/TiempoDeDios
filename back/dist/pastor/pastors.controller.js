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
exports.PastorsController = void 0;
const common_1 = require("@nestjs/common");
const pastors_service_1 = require("./pastors.service");
const create_pastor_dto_1 = require("./dto/create-pastor.dto");
const swagger_1 = require("@nestjs/swagger");
let PastorsController = class PastorsController {
    constructor(pastorsService) {
        this.pastorsService = pastorsService;
    }
    create(dto) {
        return this.pastorsService.create(dto);
    }
    findAll() {
        return this.pastorsService.findAll();
    }
    findOne(id) {
        return this.pastorsService.findOne(id);
    }
    update(id, dto) {
        return this.pastorsService.update(id, dto);
    }
    remove(id) {
        return this.pastorsService.remove(id);
    }
};
exports.PastorsController = PastorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pastor_dto_1.CreatePastorDto]),
    __metadata("design:returntype", void 0)
], PastorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PastorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PastorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_pastor_dto_1.CreatePastorDto]),
    __metadata("design:returntype", void 0)
], PastorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PastorsController.prototype, "remove", null);
exports.PastorsController = PastorsController = __decorate([
    (0, swagger_1.ApiTags)('Pastor'),
    (0, common_1.Controller)('pastors'),
    __metadata("design:paramtypes", [pastors_service_1.PastorsService])
], PastorsController);
//# sourceMappingURL=pastors.controller.js.map