"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHashModule = void 0;
const common_1 = require("@nestjs/common");
const data_hash_service_1 = require("./data_hash.service");
const data_hash_controller_1 = require("./data_hash.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_service_1 = require("../prisma/prisma.service");
let DataHashModule = exports.DataHashModule = class DataHashModule {
};
exports.DataHashModule = DataHashModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [data_hash_service_1.DataHashService, prisma_service_1.PrismaService],
        controllers: [data_hash_controller_1.DataHashController],
        exports: [data_hash_service_1.DataHashService],
    })
], DataHashModule);
//# sourceMappingURL=data_hash.module.js.map