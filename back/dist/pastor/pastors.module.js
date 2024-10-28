"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PastorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pastors_service_1 = require("./pastors.service");
const pastors_controller_1 = require("./pastors.controller");
const pastor_entity_1 = require("./pastor.entity");
const credentials_module_1 = require("../credential/credentials.module");
let PastorsModule = class PastorsModule {
};
exports.PastorsModule = PastorsModule;
exports.PastorsModule = PastorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pastor_entity_1.Pastor]), credentials_module_1.CredentialsModule],
        controllers: [pastors_controller_1.PastorsController],
        providers: [pastors_service_1.PastorsService],
        exports: [pastors_service_1.PastorsService],
    })
], PastorsModule);
//# sourceMappingURL=pastors.module.js.map