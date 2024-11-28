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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const pipes_1 = require("@nestjs/common/pipes");
const update_product_dto_1 = require("./dto/update-product.dto");
const jwt_authentication_guard_1 = require("../guard/jwt-authentication.guard");
const author_guard_1 = require("../guard/author.guard");
const swagger_1 = require("@nestjs/swagger");
const mail_service_1 = require("../mail/mail.service");
const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff">
<table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-7626415423304311386email_table" style="border-collapse:collapse">
  <tbody>
    <tr>
      <td id="m_-7626415423304311386email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#ffffff">
        <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
          <tbody>
            <tr>
              <td>
                <table border="0" width="430" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto">
                  <tbody>
                    <tr>
                      <td>
                        <table border="0" width="430px" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:430px">
                          <tbody>
                            <tr>
                              <td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                            <tr>
                              <td>
                                <table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                                          <tbody>
                                            <tr>
                                              <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                                              <td>
                                                <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                                                  <tbody>
                                                    <tr>
                                                      <td>
                                                        <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">Здравствуйте, 	!</p>
                                                        <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">Вас пригласили зарегистрироваться в компании на сайте <a href="http://localhost:8081">Recordum</a>. <br>Перейдите по ссылке, чтобы зарегистрироваться в качестве сотрудника.</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td height="20" style="line-height:20px">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                      <td><a href="{{link}}" style="color:#1b74e4;text-decoration:none;display:block;width:370px" target="_blank" data-saferedirecturl="{{link}}">
                                                          <table border="0" width="390" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                                                            <tbody>
                                                              <tr>
                                                                <td style="border-collapse:collapse;border-radius:3px;text-align:center;display:block;border:solid 1px #e2ff4a;padding:10px 16px 14px 16px;margin:0 2px 0 auto;min-width:80px;background-color:#e2ff4a"><a href="{{link}}" style="color:#e2ff4a;text-decoration:none;display:block" target="_blank" data-saferedirecturl="{{link}}">
                                                                    <center>
                                                                      <font size="3"><span style="font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#010101;font-size:16px;line-height:16px"><span class="il">Зарегистрироваться</span></font>
                                                                    </center>
                                                                  </a></td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </a></td>
                                                    </tr>
                                                    <tr>
                                                      <td height="20" style="line-height:20px">&nbsp;</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td height="10" style="line-height:10px" colspan="1">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px">
                  <tbody>
                    <tr>
                      <td height="4" style="line-height:4px" colspan="3">&nbsp;</td>
                    </tr>
                    <tr>
                      <td width="15px" style="width:15px"></td>
                      <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                      <td style="text-align:center">
            <div style="color:#abadae;font-size:12px;margin:0 auto 5px auto">Если вы не запрашивали это электронное письмо, <br>вы можете спокойно проигнорировать его.</div>
                        <div style="color:#abadae;font-size:11px;margin:0 auto 5px auto"><br>© 2023 HTTPS Hooligans. All rights almost reserved.</div>
                      </td>
                      <td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td>
                      <td width="15px" style="width:15px"></td>
                    </tr>
                    <tr>
                      <td height="32" style="line-height:32px" colspan="3">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</body>
    </html>
    `;
let ProductController = exports.ProductController = class ProductController {
    constructor(productService, mailService) {
        this.productService = productService;
        this.mailService = mailService;
    }
    async sendEmail() {
        const link = 'http://localhost:8081/';
        const name = 'Kirill';
        await this.mailService.sendMail('slimeboy871@gmail.com', 'Тест', html);
    }
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }
    async getOneProducts(id) {
        return await this.productService.getOneProduct(id);
    }
    async updateProduct(id, updateProductDto, request) {
        console.log(id);
        const user = request.user;
        return this.productService.updateProduct(updateProductDto, user, id);
    }
    async deleteProduct(request, id) {
        const user = request.user;
        return this.productService.deleteProduct(id, user);
    }
    async getAllPlansProductForUser(id) {
        return await this.productService.getAllPlansProductForUsers(id);
    }
    async getAllPlansProductForAdmin(request, id) {
        return await this.productService.getAllPlansProductForAdmin(id);
    }
    async create(CreateProductData, request) {
        const user = request.user;
        return this.productService.create(CreateProductData, user);
    }
};
__decorate([
    (0, common_1.Post)('mail/test'),
    openapi.ApiResponse({ status: 201 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Получить все услуги" }),
    (0, swagger_1.ApiResponse)({
        description: 'Список всех созданных услуг',
        type: (Array)
    }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "Получить услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID услуги, которая существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Услуга', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOneProducts", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, author_guard_1.default),
    (0, common_1.Patch)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Изменить услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID услуги, которая существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiBody)({ type: update_product_dto_1.default }),
    (0, swagger_1.ApiResponse)({
        description: 'Обновленная услуга',
        type: update_product_dto_1.default
    }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, author_guard_1.default),
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Удалить услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID услуги, которая существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Услуга удалена', }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)('plans/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Получить все доступные записи на услугу" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID услуги, которая существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({ description: 'Все доступные записи', }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllPlansProductForUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default, author_guard_1.default),
    (0, common_1.Get)('plans/information/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Получение заполненных записей для владельца услуги или админа" }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Должен быть ID услуги, которая существует в базе данных',
        type: Number
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Список занятых записей',
        type: (Array),
    }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllPlansProductForAdmin", null);
__decorate([
    (0, common_1.UseGuards)(jwt_authentication_guard_1.default),
    (0, common_1.Post)('add'),
    (0, swagger_1.ApiOperation)({ summary: "Создание новой услуги" }),
    (0, swagger_1.ApiBody)({ type: create_product_dto_1.default, }),
    (0, swagger_1.ApiResponse)({
        description: 'Созданная услуга',
        type: create_product_dto_1.default,
    }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService, mail_service_1.MailService])
], ProductController);
//# sourceMappingURL=product.controller.js.map