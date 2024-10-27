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
exports.Pastor = void 0;
const typeorm_1 = require("typeorm");
const devotional_entity_1 = require("../devotional/devotional.entity");
const sermon_entity_1 = require("../sermon/sermon.entity");
let Pastor = class Pastor {
};
exports.Pastor = Pastor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Pastor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pastor.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pastor.prototype, "nid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pastor.prototype, "federation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => devotional_entity_1.Devotional, (devotional) => devotional.pastor),
    __metadata("design:type", Array)
], Pastor.prototype, "devotionals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sermon_entity_1.Sermon, (sermon) => sermon.pastor),
    __metadata("design:type", Array)
], Pastor.prototype, "sermons", void 0);
exports.Pastor = Pastor = __decorate([
    (0, typeorm_1.Entity)('pastors')
], Pastor);
//# sourceMappingURL=pastor.entity.js.map