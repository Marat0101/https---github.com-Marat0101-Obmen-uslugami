import { ProductService } from './product.service';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';
import RequestWithUser from 'src/authentication/requestWithUser.interface';
import { MailService } from 'src/mail/mail.service';
export declare class ProductController {
    private readonly productService;
    private readonly mailService;
    constructor(productService: ProductService, mailService: MailService);
    sendEmail(): Promise<void>;
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
    getOneProducts(id: number): Promise<{
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
    updateProduct(id: number, updateProductDto: UpdateProductDto, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
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
    deleteProduct(request: RequestWithUser, id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    getAllPlansProductForUser(id: number): Promise<{
        id: number;
        datetime: Date;
    }[]>;
    getAllPlansProductForAdmin(request: RequestWithUser, id: number): Promise<({
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
    create(CreateProductData: CreateProductDto, request: RequestWithUser): Promise<import("@prisma/client/runtime").GetResult<{
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
