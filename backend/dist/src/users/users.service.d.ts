import { PrismaService } from '../prisma/prisma.service';
import CreateUserDto from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductService } from 'src/product/product.service';
import SetAvatarDto from './dto/set-avatar.dto';
import { Role, User } from '@prisma/client';
export declare class UsersService {
    private readonly prismaService;
    private readonly productService;
    constructor(prismaService: PrismaService, productService: ProductService);
    create(userData: CreateUserDto, isCompany: Boolean): Promise<import("@prisma/client/runtime").GetResult<{
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
    updateProfile(updateData: UpdateUserDto, user: User): Promise<import("@prisma/client/runtime").GetResult<{
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
    updateAvatar(setAvatarDto: SetAvatarDto, user: User): Promise<import("@prisma/client/runtime").GetResult<{
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
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        avatar: string;
        idCompany: number;
    }, unknown> & {})[]>;
    getByEmail(email: string): Promise<import("@prisma/client/runtime").GetResult<{
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
    getProductsByUserId(id: number): Promise<({
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
    getMyPlans(user: User): Promise<{
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
    getAllUsedPlans(user: User): Promise<{
        id: number;
        idProduct: number;
        datetime: Date;
        client: {
            name: string;
            avatar: string;
        };
    }[]>;
    getInformation(id: number): Promise<{
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
        role: Role;
        avatar: string;
        idCompany: number;
    }, unknown> & {}>;
    getById(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
}
