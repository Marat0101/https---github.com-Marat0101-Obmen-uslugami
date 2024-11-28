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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const postgresErrorCode_enum_1 = require("../database/postgresErrorCode.enum");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthenticationService = exports.AuthenticationService = class AuthenticationService {
    constructor(prismaService, usersService, jwtService, configService) {
        this.prismaService = prismaService;
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async register(registrationData) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const isCompany = registrationData.isCompany;
            delete registrationData.isCompany;
            const createdUser = await this.usersService.create({
                ...registrationData,
                password: hashedPassword,
            }, isCompany);
            createdUser.password = undefined;
            return createdUser;
        }
        catch (error) {
            if (error?.code === postgresErrorCode_enum_1.default.UniqueViolation) {
                throw new common_1.HttpException('Пользователь с таким адресом электронной почты уже существует', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Что-то пошло не так', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAuthenticatedUser(email, plainTextPassword) {
        try {
            const user = await this.usersService.getByEmail(email);
            await this.verifyPassword(plainTextPassword, user.password);
            return user;
        }
        catch (error) {
            throw new common_1.HttpException('Неверные учетные данные', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async aboutUser(user) {
        user.password = undefined;
        if (user.idCompany) {
            user["company"] = await this.prismaService.company.findUnique({
                where: {
                    id: user.idCompany
                }
            });
        }
        else
            user["company"] = null;
        return user;
    }
    async verifyPassword(plainTextPassword, hashedPassword) {
        const isPasswordMatching = await bcrypt.compare(plainTextPassword, hashedPassword);
        if (!isPasswordMatching) {
            throw new common_1.HttpException('Неверный пароль', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getCookieWithJwtToken(userId) {
        const payload = { userId };
        const token = this.jwtService.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
    }
    async getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
};
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map