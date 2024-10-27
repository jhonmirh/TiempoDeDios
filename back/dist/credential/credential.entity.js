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
exports.Credential = void 0;
const typeorm_1 = require("typeorm");
const pastor_entity_1 = require("../pastor/pastor.entity");
const users_entity_1 = require("../users/users.entity");
let Credential = class Credential {
};
exports.Credential = Credential;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Credential.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Credential.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Credential.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.User, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", users_entity_1.User)
], Credential.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pastor_entity_1.Pastor, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", pastor_entity_1.Pastor)
], Credential.prototype, "pastor", void 0);
exports.Credential = Credential = __decorate([
    (0, typeorm_1.Entity)('credentials')
], Credential);
//# sourceMappingURL=credential.entity.js.map