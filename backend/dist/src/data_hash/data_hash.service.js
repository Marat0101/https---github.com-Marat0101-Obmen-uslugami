"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataHashService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto-js");
const secretKey = 'httpholigans';
let DataHashService = exports.DataHashService = class DataHashService {
    async encryptData(data) {
        let ciphertext = await crypto.AES.encrypt(data, secretKey).toString();
        ciphertext = await ciphertext.replaceAll('+', '$');
        return ciphertext;
    }
    async decryptData(encryptedData) {
        try {
            encryptedData = await encryptedData.replaceAll('$', '+');
            const bytes = await crypto.AES.decrypt(encryptedData, secretKey);
            const originalData = await bytes.toString(crypto.enc.Utf8);
            return originalData;
        }
        catch {
            throw new common_1.HttpException("Ошибка запроса", common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.DataHashService = DataHashService = __decorate([
    (0, common_1.Injectable)()
], DataHashService);
//# sourceMappingURL=data_hash.service.js.map