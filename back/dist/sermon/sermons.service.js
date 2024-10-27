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
exports.SermonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sermon_entity_1 = require("./sermon.entity");
let SermonsService = class SermonsService {
    constructor(sermonsRepository) {
        this.sermonsRepository = sermonsRepository;
    }
    async create(dto) {
        const sermon = this.sermonsRepository.create(dto);
        return this.sermonsRepository.save(sermon);
    }
    async findAll() {
        return this.sermonsRepository.find({ relations: ['pastor'] });
    }
    async findOne(id) {
        const sermon = await this.sermonsRepository.findOne({
            where: { id },
            relations: ['pastor'],
        });
        if (!sermon)
            throw new common_1.NotFoundException('Sermón no encontrado');
        return sermon;
    }
    async update(id, dto) {
        const sermon = await this.sermonsRepository.preload({ id, ...dto });
        if (!sermon)
            throw new common_1.NotFoundException('Sermón no encontrado');
        return this.sermonsRepository.save(sermon);
    }
    async remove(id) {
        const sermon = await this.findOne(id);
        await this.sermonsRepository.remove(sermon);
    }
    async findByPastorId(pastorId) {
        return this.sermonsRepository.find({ where: { pastor: { id: pastorId } } });
    }
};
exports.SermonsService = SermonsService;
exports.SermonsService = SermonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sermon_entity_1.Sermon)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SermonsService);
//# sourceMappingURL=sermons.service.js.map