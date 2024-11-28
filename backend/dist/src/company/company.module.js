"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CompanyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const company_controller_1 = require("./company.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const users_module_1 = require("../users/users.module");
const data_hash_module_1 = require("../data_hash/data_hash.module");
let CompanyModule = exports.CompanyModule = CompanyModule_1 = class CompanyModule {
};
exports.CompanyModule = CompanyModule = CompanyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [CompanyModule_1, prisma_module_1.PrismaModule, users_module_1.UsersModule, data_hash_module_1.DataHashModule],
        providers: [company_service_1.CompanyService],
        controllers: [company_controller_1.CompanyController],
        exports: [company_service_1.CompanyService],
    })
], CompanyModule);
//# sourceMappingURL=company.module.js.map