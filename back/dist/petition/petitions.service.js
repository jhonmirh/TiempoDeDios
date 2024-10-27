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
exports.PetitionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const petition_entity_1 = require("./petition.entity");
let PetitionsService = class PetitionsService {
    constructor(petitionsRepository) {
        this.petitionsRepository = petitionsRepository;
    }
    async create(dto) {
        const petition = this.petitionsRepository.create(dto);
        return this.petitionsRepository.save(petition);
    }
    async findAll() {
        return this.petitionsRepository.find({ relations: ['user'] });
    }
    async findOne(id) {
        const petition = await this.petitionsRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!petition)
            throw new common_1.NotFoundException('Petición no encontrada');
        return petition;
    }
    async update(id, dto) {
        const petition = await this.petitionsRepository.preload({ id, ...dto });
        if (!petition)
            throw new common_1.NotFoundException('Petición no encontrada');
        return this.petitionsRepository.save(petition);
    }
    async remove(id) {
        const petition = await this.findOne(id);
        await this.petitionsRepository.remove(petition);
    }
};
exports.PetitionsService = PetitionsService;
exports.PetitionsService = PetitionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(petition_entity_1.Petition)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PetitionsService);
//# sourceMappingURL=petitions.service.js.map