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
const common_1 = require("@nestjs/common");
const company_service_1 = require("../company/company.service");
const users_service_1 = require("../users/users.service");
let CompanyLeaderGuard = class CompanyLeaderGuard {
    constructor(usersService, companyService) {
        this.usersService = usersService;
        this.companyService = companyService;
    }
    async canActivate(context) {
        const { user, params } = context.switchToHttp().getRequest();
        try {
            await this.companyService.getById(Number(params.id));
        }
        catch (error) {
            return false;
        }
        if (!user || !params) {
            return false;
        }
        const userId = user.id;
        const companyId = Number(params.id);
        const checkedUser = await this.usersService.getById(userId);
        const checkedCompany = await this.companyService.getById(companyId);
        return (checkedUser.id === checkedCompany.leaderId);
    }
};
CompanyLeaderGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, company_service_1.CompanyService])
], CompanyLeaderGuard);
exports.default = CompanyLeaderGuard;
//# sourceMappingURL=company-leader.guard.js.map