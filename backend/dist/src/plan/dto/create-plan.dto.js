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
exports.CreatePlanDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePlanDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { idProduct: { required: true, type: () => Number }, year: { required: true, type: () => String }, month: { required: true, type: () => String }, day: { required: true, type: () => String }, hours: { required: true, type: () => String }, minutes: { required: true, type: () => String } };
    }
}
exports.CreatePlanDto = CreatePlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID продукта, который содержится в базе данных',
        example: '1',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlanDto.prototype, "idProduct", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Год записи на проведение услуги',
        example: '2023',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Месяц записи на проведение услуги',
        example: '12',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'День записи на проведение услуги',
        example: '31',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Час записи на проведение услуги',
        example: '12',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "hours", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Минуты записи на проведение услуги',
        example: '30',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePlanDto.prototype, "minutes", void 0);
exports.default = CreatePlanDto;
//# sourceMappingURL=create-plan.dto.js.map