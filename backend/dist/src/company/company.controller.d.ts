import { CompanyService } from './company.service';
import CreateEmployeeDto from './dto/create-employee.dto';
import { User } from '@prisma/client';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createEmployee(employeeData: CreateEmployeeDto, user: User, id: number): Promise<string>;
    registerEmployee(employeeData: UpdateEmployeeDto): Promise<{
        id: number;
        name: string;
        email: string;
        company: import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            leaderId: number;
            about: string;
        }, unknown> & {};
    }>;
    getInfoEmployee(data: any): Promise<{
        id: number;
        name: string;
        email: string;
        company: import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            leaderId: number;
            about: string;
        }, unknown> & {};
    }>;
    fire(id: number, req: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").Role;
        avatar: string;
        idCompany: number;
    }, unknown> & {}>;
    getAllEmployes(id: number): Promise<{
        employee: {
            id: number;
            name: string;
            email: string;
            role: import(".prisma/client").Role;
            avatar: string;
            company: import("@prisma/client/runtime").GetResult<{
                id: number;
                name: string;
                leaderId: number;
                about: string;
            }, unknown> & {};
        }[];
    }>;
}
