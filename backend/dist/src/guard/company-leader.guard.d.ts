import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CompanyService } from "src/company/company.service";
import { UsersService } from "src/users/users.service";
export default class CompanyLeaderGuard implements CanActivate {
    private readonly usersService;
    private readonly companyService;
    constructor(usersService: UsersService, companyService: CompanyService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
