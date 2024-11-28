import { PrismaService } from 'src/prisma/prisma.service';
import CreatePlanDto from './dto/create-plan.dto';
import { User } from '@prisma/client';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlanService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(planData: CreatePlanDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    singUpPlan(idPlan: number, user: User): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    cancelPlan(idPlan: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    update(idPlan: number, updateData: UpdatePlanDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    deletePlan(idPlan: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    getById(idPlan: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
}
