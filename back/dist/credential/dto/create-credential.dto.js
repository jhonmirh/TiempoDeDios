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
exports.CreateCredentialDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCredentialDto {
}
exports.CreateCredentialDto = CreateCredentialDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Correo inválido' }),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 10, { message: 'La contraseña debe tener entre 8 y 10 caracteres' }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
        message: 'La contraseña debe contener al menos 2 números, 3 letras minúsculas y 3 letras mayúsculas.',
    }),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCredentialDto.prototype, "pastorId", void 0);
//# sourceMappingURL=create-credential.dto.js.map