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
exports.Devotional = void 0;
const pastor_entity_1 = require("../pastor/pastor.entity");
const typeorm_1 = require("typeorm");
let Devotional = class Devotional {
};
exports.Devotional = Devotional;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Devotional.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Devotional.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300 }),
    __metadata("design:type", String)
], Devotional.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Devotional.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Devotional.prototype, "citationText", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pastor_entity_1.Pastor, pastor => pastor.devotionals),
    __metadata("design:type", pastor_entity_1.Pastor)
], Devotional.prototype, "pastor", void 0);
exports.Devotional = Devotional = __decorate([
    (0, typeorm_1.Entity)('devotionals')
], Devotional);
//# sourceMappingURL=devotional.entity.js.map