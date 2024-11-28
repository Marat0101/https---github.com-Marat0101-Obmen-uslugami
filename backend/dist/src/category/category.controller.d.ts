import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): string;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        label: string;
        description: string;
    }, unknown> & {})[]>;
    getProducts(id: number): Promise<{
        id: number;
        title: string;
        cost: string;
        description: string;
        author: {
            name: string;
            avatar: string;
        };
    }[]>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): string;
    remove(id: string): string;
}
