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
exports.CredentialsController = void 0;
const common_1 = require("@nestjs/common");
const credentials_service_1 = require("./credentials.service");
const create_credential_dto_1 = require("./dto/create-credential.dto");
const update_credential_dto_1 = require("./dto/update-credential.dto");
const response_credential_dto_1 = require("./dto/response-credential.dto");
const swagger_1 = require("@nestjs/swagger");
let CredentialsController = class CredentialsController {
    constructor(credentialsService) {
        this.credentialsService = credentialsService;
    }
    create(createCredentialDto) {
        return this.credentialsService.create(createCredentialDto);
    }
    update(id, updateCredentialDto) {
        return this.credentialsService.update(id, updateCredentialDto);
    }
    remove(id) {
        return this.credentialsService.remove(id);
    }
    async findOne(id) {
        const credential = await this.credentialsService.findOne(id);
        return new response_credential_dto_1.ResponseCredentialDto(credential);
    }
    async findAll() {
        const credentials = await this.credentialsService.findAll();
        return credentials.map(credential => new response_credential_dto_1.ResponseCredentialDto(credential));
    }
};
exports.CredentialsController = CredentialsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_credential_dto_1.CreateCredentialDto]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_credential_dto_1.UpdateCredentialDto]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CredentialsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "findAll", null);
exports.CredentialsController = CredentialsController = __decorate([
    (0, swagger_1.ApiTags)('credentials'),
    (0, common_1.Controller)('credentials'),
    __metadata("design:paramtypes", [credentials_service_1.CredentialsService])
], CredentialsController);
//# sourceMappingURL=credentials.controller.js.map