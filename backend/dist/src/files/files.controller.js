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
exports.FilesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const files_configure_1 = require("./files.configure");
const swagger_1 = require("@nestjs/swagger");
const set_avatar_dto_1 = require("../users/dto/set-avatar.dto");
let FilesController = exports.FilesController = class FilesController {
    getImage(image, res) {
        const response = res.sendFile(image, { root: './images' });
        return {
            data: response,
        };
    }
    uploadfile(file) {
        return file.destination + file.filename;
    }
};
__decorate([
    (0, common_1.Get)(':imagename'),
    (0, swagger_1.ApiOperation)({ summary: "Получить картинку по названию" }),
    (0, swagger_1.ApiParam)({
        name: 'imagename',
        required: true,
        description: 'Должно быть название картинки, которая существует в репозитории',
        type: String
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Картинка',
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('imagename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "getImage", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, swagger_1.ApiOperation)({ summary: "Получить картинку по названию" }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ description: 'Картинка', }),
    (0, swagger_1.ApiResponse)({
        description: "Путь к картинке",
        type: set_avatar_dto_1.default,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('picture', {
        storage: (0, multer_1.diskStorage)({
            destination: files_configure_1.Customization.destinationPath,
            filename: files_configure_1.Customization.customFileName,
        }),
    })),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FilesController.prototype, "uploadfile", null);
exports.FilesController = FilesController = __decorate([
    (0, swagger_1.ApiTags)('Images'),
    (0, common_1.Controller)('images')
], FilesController);
//# sourceMappingURL=files.controller.js.map