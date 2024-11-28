import CreateEmployeeDto from './dto/create-employee.dto';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { DataHashService } from 'src/data_hash/data_hash.service';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { MailService } from 'src/mail/mail.service';
export declare class CompanyService {
    private readonly prismaService;
    private readonly dataHashService;
    private readonly mailService;
    constructor(prismaService: PrismaService, dataHashService: DataHashService, mailService: MailService);
    createEmployee(employeeData: CreateEmployeeDto, id: number): Promise<string>;
    registerEmployee(userData: UpdateEmployeeDto): Promise<{
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
    getById(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        leaderId: number;
        about: string;
    }, unknown> & {}>;
    DataForRegisterEmployee(hash: string): Promise<{
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
    fire(idEmployee: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        avatar: string;
        idCompany: number;
    }, unknown> & {}>;
    getAllEmployes(idCompany: number): Promise<{
        employee: {
            id: number;
            name: string;
            email: string;
            role: Role;
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
