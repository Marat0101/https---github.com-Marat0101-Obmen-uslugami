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
exports.PlanController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const jwt_authentication_guard_1 = require("../guard/jwt-authentication.guard");
const plan_service_1 = require("./plan.service");
const create_plan_dto_1 = require("./dto/create-plan.dto");
const swagger_1 = require("@nestjs/swagger");
const plan_guard_1 = require("../guard/plan.guard");
const client_guard_1 = require("../guard/client.guard");
const update_plan_dto_1 = require("./dto/update-plan.dto");
let PlanController = exports.PlanController = class PlanController {
    constructor(planService) {
        this.planService = planService;
    }
    async creat(planData, request) {
        return await this.planService.create(planData);
    }
    async singUpPlan(id, request) {
        return await this.planService.singUpPlan(id, request.user);
    }
    async update(updatePlan, request, id) {
        return await this.planService.update(id, updatePlan);
    }
    async cancelPlan(id, request) {
        return await this.planService.cancelPlan(id);
    }
    async getById(id) {
        return await this.planService.getById(id);
    }
    async delete(id, request) {
        console.log(id);
        return await this.planService.deletePlan(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Создать запись на услугу" }),
    (0, swagger_1.ApiBody)({ type: create_plan_dto_1.default }),
    (0, swagger_1.ApiResponse)({ description: 'Запись на услугу', }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "creat", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Patch)('signup/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Записаться на услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID записи, который существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Запись на услугу', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "singUpPlan", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, plan_guard_1.default),
    (0, common_1.Patch)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Изменить запись на услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID записи, который существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Обновлненная запись', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_plan_dto_1.UpdatePlanDto, Object, Number]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, client_guard_1.default),
    (0, common_1.Patch)('cancel/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Отменить запись на услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID записи, который существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Запись отменена', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "cancelPlan", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Получить запись по id" }),
    (0, swagger_1.ApiResponse)({ description: 'Одна запись', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "getById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, plan_guard_1.default),
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Удалить запись на услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID записи, который существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Удаление записи на услугу', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PlanController.prototype, "delete", null);
exports.PlanController = PlanController = __decorate([
    (0, swagger_1.ApiTags)('Plan'),
    (0, common_1.Controller)('plan'),
    __metadata("design:paramtypes", [plan_service_1.PlanService])
], PlanController);
//# sourceMappingURL=plan.controller.js.map