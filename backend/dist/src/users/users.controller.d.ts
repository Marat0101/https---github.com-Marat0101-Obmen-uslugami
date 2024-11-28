/// <reference types="multer" />
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductService } from 'src/product/product.service';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
export declare class UsersController {
    private readonly usersService;
    private readonly productsService;
    constructor(usersService: UsersService, productsService: ProductService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").Role;
        avatar: string;
        idCompany: number;
    }, unknown> & {})[]>;
    findOneByMail(email: string): Promise<import("@prisma/client/runtime").GetResult<{
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
    setAvatar(file: Express.Multer.File, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
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
    getMyPlans(request: RequestWithUser): Promise<{
        id: number;
        clientId: number;
        datetime: Date;
        product: import("@prisma/client/runtime").GetResult<{
            id: number;
            image: string;
            createdAt: Date;
            updatedAt: Date;
            places: string;
            duration: string;
            title: string;
            cost: string;
            description: string;
            authorId: number;
            isPublished: boolean;
            categoryId: number;
            isOnline: boolean;
        }, unknown> & {};
    }[]>;
    updateProfile(updateData: UpdateUserDto, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
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
    getUserProducts(id: number): Promise<({
        author: {
            name: string;
            avatar: string;
        };
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        image: string;
        createdAt: Date;
        updatedAt: Date;
        places: string;
        duration: string;
        title: string;
        cost: string;
        description: string;
        authorId: number;
        isPublished: boolean;
        categoryId: number;
        isOnline: boolean;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<{
        company: import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            leaderId: number;
            about: string;
        }, unknown> & {};
    } & import("@prisma/client/runtime").GetResult<{
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
    getUsedPlans(request: RequestWithUser): Promise<{
        id: number;
        idProduct: number;
        datetime: Date;
        client: {
            name: string;
            avatar: string;
        };
    }[]>;
}
