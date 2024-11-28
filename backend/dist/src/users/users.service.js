"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const product_service_1 = require("../product/product.service");
const client_1 = require("@prisma/client");
let UsersService = exports.UsersService = class UsersService {
    constructor(prismaService, productService) {
        this.prismaService = prismaService;
        this.productService = productService;
    }
    async create(userData, isCompany) {
        let userRole = client_1.Role.User;
        if (isCompany) {
            userRole = client_1.Role.Leader;
        }
        let newUser = await this.prismaService.user.create({
            data: {
                ...userData,
                role: userRole
            }
        });
        console.log(newUser);
        if (isCompany) {
            const company = await this.prismaService.company.create({
                data: {
                    name: newUser.name,
                    leaderId: newUser.id,
                }
            });
            newUser = await this.prismaService.user.update({
                where: {
                    id: newUser.id
                },
                data: {
                    idCompany: company.id
                }
            });
        }
        return newUser;
    }
    async updateProfile(updateData, user) {
        if (user.name == updateData.name) {
            throw new common_1.HttpException('У вас уже это имя', common_1.HttpStatus.BAD_REQUEST);
        }
        user = await this.prismaService.user.update({
            where: {
                id: user.id
            },
            data: updateData
        });
        user.password = undefined;
        return user;
    }
    async updateAvatar(setAvatarDto, user) {
        user = await this.prismaService.user.update({
            where: {
                id: user.id,
            },
            data: {
                avatar: setAvatarDto.avatar,
            }
        });
        user.password = undefined;
        return user;
    }
    async findAll() {
        return await this.prismaService.user.findMany();
    }
    async getByEmail(email) {
        console.log("geter: " + email);
        const user = await this.prismaService.user.findUnique({
            where: {
                email,
            }
        });
        if (user) {
            return user;
        }
        throw new common_1.HttpException('Неправильный адрес электронной почты', common_1.HttpStatus.NOT_FOUND);
    }
    async getProductsByUserId(id) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: id,
            },
        });
        return await this.productService.getProductsByUser(user);
    }
    async getMyPlans(user) {
        const plans = await this.prismaService.plan.findMany({
            select: {
                id: true,
                clientId: true,
                datetime: true,
                product: true,
            },
            where: {
                clientId: user.id
            },
        });
        const currentDate = new Date();
        plans.forEach(async (element) => {
            if (element.datetime < currentDate) {
                const deletePlan = await this.prismaService.plan.delete({ where: { id: element.id } });
                console.log("Удалена запись на время" + deletePlan);
            }
        });
        const check = await this.prismaService.plan.findMany({
            where: {
                clientId: user.id
            }
        });
        console.log(check);
        return await plans;
    }
    async getAllUsedPlans(user) {
        const busyPlans = await this.prismaService.product.findMany({ where: {
                authorId: user.id,
            },
            select: {
                productPlan: {
                    where: {
                        clientId: {
                            not: null
                        },
                    },
                    select: {
                        id: true,
                        idProduct: true,
                        datetime: true,
                        client: {
                            select: {
                                name: true,
                                avatar: true,
                            }
                        }
                    }
                }
            }
        });
        return busyPlans[0].productPlan;
    }
    async getInformation(id) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: id,
            },
            include: {
                company: true,
            }
        });
        user.password = undefined;
        return user;
    }
    async getById(id) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: id,
            },
        });
        console.log("Получили по id юзера: " + user.email);
        if (user) {
            user.password = undefined;
            return user;
        }
        throw new common_1.HttpException('Пользователь с таким идентификатором не существует', common_1.HttpStatus.NOT_FOUND);
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, product_service_1.ProductService])
], UsersService);
//# sourceMappingURL=users.service.js.map