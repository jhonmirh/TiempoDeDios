"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevotionalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const devotional_entity_1 = require("./devotional.entity");
const devotionals_service_1 = require("./devotionals.service");
const devotionals_controller_1 = require("./devotionals.controller");
const pastor_entity_1 = require("../pastor/pastor.entity");
const pastors_service_1 = require("../pastor/pastors.service");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let DevotionalModule = class DevotionalModule {
};
exports.DevotionalModule = DevotionalModule;
exports.DevotionalModule = DevotionalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([devotional_entity_1.Devotional, pastor_entity_1.Pastor]),
            config_1.ConfigModule,
            jwt_1.JwtModule,
        ],
        controllers: [devotionals_controller_1.DevotionalsController],
        providers: [devotionals_service_1.DevotionalsService, pastors_service_1.PastorsService],
    })
], DevotionalModule);
//# sourceMappingURL=devotionals.module.js.map