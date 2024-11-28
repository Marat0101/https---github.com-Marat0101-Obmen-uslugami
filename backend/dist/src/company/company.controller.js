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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const create_employee_dto_1 = require("./dto/create-employee.dto");
const jwt_authentication_guard_1 = require("../guard/jwt-authentication.guard");
const company_leader_guard_1 = require("../guard/company-leader.guard");
const update_employee_dto_1 = require("./dto/update-employee.dto");
let CompanyController = exports.CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async createEmployee(employeeData, user, id) {
        console.log(employeeData);
        return await this.companyService.createEmployee(employeeData, id);
    }
    async registerEmployee(employeeData) {
        return await this.companyService.registerEmployee(employeeData);
    }
    async getInfoEmployee(data) {
        return await this.companyService.DataForRegisterEmployee(data.hash);
    }
    async fire(id, req) {
        return await this.companyService.fire(req.employeeId);
    }
    async getAllEmployes(id) {
        return await this.companyService.getAllEmployes(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, company_leader_guard_1.default),
    (0, common_1.Post)('create_employee/:id'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.default, Object, Number]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Patch)('registerEmployee'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_employee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "registerEmployee", null);
__decorate([
    (0, common_1.Post)('infoEmployee'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getInfoEmployee", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, company_leader_guard_1.default),
    (0, common_1.Patch)('fire_employee/:id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "fire", null);
__decorate([
    (0, common_1.Get)('allEmployee/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getAllEmployes", null);
exports.CompanyController = CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map