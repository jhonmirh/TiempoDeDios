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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sermon = void 0;
const typeorm_1 = require("typeorm");
const pastor_entity_1 = require("../pastor/pastor.entity");
let Sermon = class Sermon {
};
exports.Sermon = Sermon;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Sermon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Sermon.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1000 }),
    __metadata("design:type", String)
], Sermon.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Sermon.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Sermon.prototype, "citationText", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Sermon.prototype, "quote", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pastor_entity_1.Pastor, (pastor) => pastor.sermons),
    __metadata("design:type", pastor_entity_1.Pastor)
], Sermon.prototype, "pastor", void 0);
exports.Sermon = Sermon = __decorate([
    (0, typeorm_1.Entity)('sermons')
], Sermon);
//# sourceMappingURL=sermon.entity.js.map