import CreateProductDto from './dto/create-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import UpdateProductDto from './dto/update-product.dto';
import { User } from '@prisma/client';
export declare class ProductService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(productData: CreateProductDto, user: User): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    updateProduct(updateProductDto: UpdateProductDto, user: User, idProduct: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    deleteProduct(idProduct: number, user: User): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
    getAllProducts(): Promise<({
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
    getOneProduct(id: number): Promise<{
        author: {
            name: string;
            avatar: string;
            email: string;
        };
        category: import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            label: string;
            description: string;
        }, unknown> & {};
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
    }, unknown> & {}>;
    getProductsByUser(user: User): Promise<({
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
    getAllPlansProductForUsers(productId: any): Promise<{
        id: number;
        datetime: Date;
    }[]>;
    getAllPlansProductForAdmin(productId: any): Promise<({
        client: {
            name: string;
            avatar: string;
        };
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        clientId: number;
        datetime: Date;
        idProduct: number;
    }, unknown> & {})[]>;
    getById(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {}>;
}
