"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SermonsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sermon_entity_1 = require("./sermon.entity");
const sermons_controller_1 = require("./sermons.controller");
const sermons_service_1 = require("./sermons.service");
let SermonsModule = class SermonsModule {
};
exports.SermonsModule = SermonsModule;
exports.SermonsModule = SermonsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sermon_entity_1.Sermon])],
        controllers: [sermons_controller_1.SermonsController],
        providers: [sermons_service_1.SermonsService],
    })
], SermonsModule);
//# sourceMappingURL=sermons.module.js.map