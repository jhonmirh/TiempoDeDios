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
exports.CredentialsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const credential_entity_1 = require("./credential.entity");
let CredentialsService = class CredentialsService {
    constructor(credentialRepository) {
        this.credentialRepository = credentialRepository;
    }
    async create(createCredentialDto) {
        const newCredential = this.credentialRepository.create(createCredentialDto);
        return await this.credentialRepository.save(newCredential);
    }
    async findAll() {
        return await this.credentialRepository.find();
    }
    async findOne(id) {
        const credential = await this.credentialRepository.findOne({ where: { id } });
        if (!credential) {
            throw new common_1.NotFoundException(`Credencial con ID ${id} no encontrada.`);
        }
        return credential;
    }
    async update(id, updateCredentialDto) {
        const credential = await this.credentialRepository.preload({
            id,
            ...updateCredentialDto,
        });
        if (!credential) {
            throw new common_1.NotFoundException(`Credencial con ID ${id} no encontrada.`);
        }
        return await this.credentialRepository.save(credential);
    }
    async remove(id) {
        const credential = await this.findOne(id);
        await this.credentialRepository.remove(credential);
    }
};
exports.CredentialsService = CredentialsService;
exports.CredentialsService = CredentialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(credential_entity_1.Credential)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CredentialsService);
//# sourceMappingURL=credentials.service.js.map