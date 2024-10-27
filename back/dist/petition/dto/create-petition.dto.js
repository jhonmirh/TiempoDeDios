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
exports.CreatePetitionDto = exports.PetitionType = void 0;
const class_validator_1 = require("class-validator");
var PetitionType;
(function (PetitionType) {
    PetitionType["HEALTH"] = "Sanidad";
    PetitionType["FAMILY"] = "Familiar";
    PetitionType["SPIRITUAL"] = "Espiritual";
    PetitionType["LOSS"] = "Perdida";
    PetitionType["FORGIVENESS"] = "Perd\u00F3n";
})(PetitionType || (exports.PetitionType = PetitionType = {}));
class CreatePetitionDto {
}
exports.CreatePetitionDto = CreatePetitionDto;
__decorate([
    (0, class_validator_1.IsEnum)(PetitionType),
    __metadata("design:type", String)
], CreatePetitionDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreatePetitionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePetitionDto.prototype, "userId", void 0);
//# sourceMappingURL=create-petition.dto.js.map