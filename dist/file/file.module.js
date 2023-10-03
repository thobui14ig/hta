"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("@nestjs/typeorm");
const multer = require("multer");
const file_controller_1 = require("./file.controller");
const file_entity_1 = require("./file.entity");
const file_service_1 = require("./file.service");
const variable_module_1 = require("../variable/variable.module");
const multerOptions = {
    storage: multer.diskStorage({
        destination: './../uploads',
        filename: (req, file, cb) => {
            const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
            return cb(null, file.originalname);
        },
    }),
};
let FileModule = class FileModule {
};
FileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([file_entity_1.FileEntity]),
            platform_express_1.MulterModule.register(multerOptions),
            variable_module_1.VariableModule,
        ],
        controllers: [file_controller_1.FileController],
        providers: [file_service_1.FileService],
    })
], FileModule);
exports.FileModule = FileModule;
//# sourceMappingURL=file.module.js.map