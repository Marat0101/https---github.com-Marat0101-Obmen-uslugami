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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const data_hash_service_1 = require("../data_hash/data_hash.service");
const bcrypt = require("bcrypt");
const mail_service_1 = require("../mail/mail.service");
let CompanyService = exports.CompanyService = class CompanyService {
    constructor(prismaService, dataHashService, mailService) {
        this.prismaService = prismaService;
        this.dataHashService = dataHashService;
        this.mailService = mailService;
    }
    async createEmployee(employeeData, id) {
        const oldEmployee = await this.prismaService.user.findUnique({
            where: {
                email: employeeData.email
            }
        });
        if (!oldEmployee) {
            const newEmployee = await this.prismaService.user.create({
                data: {
                    ...employeeData,
                    idCompany: id,
                    role: client_1.Role.Employee
                }
            });
            const hash = `http://localhost:8081/register/employee?hash=${await this.dataHashService.encryptData(newEmployee.id.toString())}.${await this.dataHashService.encryptData(newEmployee.email)}`;
            const email = newEmployee.email;
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
                                                        <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">Здравствуйте, ${email}!</p>
                                                        <p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">Вас пригласили зарегистрироваться в компании на сайте <a href="http://localhost:8081">Recordum</a>. <br>Перейдите по ссылке, чтобы зарегистрироваться в качестве сотрудника.</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td height="20" style="line-height:20px">&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                      <td><a href="${hash}" style="color:#1b74e4;text-decoration:none;display:block;width:370px" target="_blank" data-saferedirecturl="${hash}">
                                                          <table border="0" width="390" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                                                            <tbody>
                                                              <tr>
                                                                <td style="border-collapse:collapse;border-radius:3px;text-align:center;display:block;border:solid 1px #e2ff4a;padding:10px 16px 14px 16px;margin:0 2px 0 auto;min-width:80px;background-color:#e2ff4a"><a href="${hash}" style="color:#e2ff4a;text-decoration:none;display:block" target="_blank" data-saferedirecturl="${hash}">
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
            try {
                await this.mailService.sendMail(newEmployee.email, 'Регистрация в компании', html);
            }
            catch (error) {
                console.log(error);
                throw new common_1.HttpException('Неверный адрес электронной почты', common_1.HttpStatus.BAD_REQUEST);
            }
            return hash;
        }
        else {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async registerEmployee(userData) {
        const split_hash = userData.hash.split('.');
        const idUser = Number(await this.dataHashService.decryptData(split_hash[0]));
        const emailUser = await this.dataHashService.decryptData(split_hash[1]);
        console.log(userData);
        console.log("1" + idUser);
        delete userData.hash;
        const oldUser = await this.prismaService.user.findUnique({
            where: {
                id: idUser
            }
        });
        if (oldUser.name) {
            throw new common_1.HttpException("Этот пользователь уже зарегистрирован", common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.prismaService.user.update({
            where: {
                id: idUser,
            },
            data: {
                ...userData,
                password: await bcrypt.hash(userData.password, 10)
            },
            select: {
                id: true,
                name: true,
                email: true,
                company: true
            }
        });
        return user;
    }
    async getById(id) {
        const company = await this.prismaService.company.findUnique({
            where: {
                id: id,
            },
        });
        if (company) {
            return company;
        }
        throw new common_1.HttpException('User with this id does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async DataForRegisterEmployee(hash) {
        const split_hash = hash.split('.');
        const idUser = Number(await this.dataHashService.decryptData(split_hash[0]));
        const emailUser = await this.dataHashService.decryptData(split_hash[1]);
        console.log('email:' + emailUser);
        console.log('idUser:' + idUser);
        if ((!idUser) || (!emailUser)) {
            throw new common_1.HttpException("Ошибка запроса", common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.prismaService.user.findUnique({
            where: {
                id: idUser
            },
            select: {
                id: true,
                name: true,
                email: true,
                company: true
            }
        });
        if ((!user.name) && (user.email == emailUser)) {
            delete user.name;
            return user;
        }
        else {
            throw new common_1.HttpException("Ошибка запроса", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async fire(idEmployee) {
        const fireUser = await this.prismaService.user.update({
            where: {
                id: idEmployee
            },
            data: {
                idCompany: null,
                role: client_1.Role.User
            }
        });
        fireUser.password = undefined;
        return fireUser;
    }
    async getAllEmployes(idCompany) {
        return await this.prismaService.company.findUnique({
            where: {
                id: idCompany
            },
            select: {
                employee: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                        avatar: true,
                        company: true
                    }
                }
            }
        });
    }
};
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, data_hash_service_1.DataHashService, mail_service_1.MailService])
], CompanyService);
//# sourceMappingURL=company.service.js.map