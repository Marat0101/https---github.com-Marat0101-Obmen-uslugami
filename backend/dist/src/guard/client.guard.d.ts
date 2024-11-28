import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PlanService } from 'src/plan/plan.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from "src/product/product.service";
import { UsersService } from "src/users/users.service";
export default class ClientGuard implements CanActivate {
    private readonly usersService;
    readonly planService: PlanService;
    private readonly productService;
    private readonly prismaService;
    constructor(usersService: UsersService, planService: PlanService, productService: ProductService, prismaService: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
