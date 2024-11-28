import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { PlanService } from './plan.service';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlanController {
    private readonly planService;
    constructor(planService: PlanService);
    creat(planData: any, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    singUpPlan(id: number, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    update(updatePlan: UpdatePlanDto, request: RequestWithUser, id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    cancelPlan(id: number, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    getById(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
    delete(id: number, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {}>;
}
