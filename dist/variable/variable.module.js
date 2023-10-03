"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableModule = void 0;
const common_1 = require("@nestjs/common");
const variable_service_1 = require("./variable.service");
const variable_controller_1 = require("./variable.controller");
const typeorm_1 = require("@nestjs/typeorm");
const variable_entity_1 = require("./variable.entity");
let VariableModule = class VariableModule {
};
VariableModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([variable_entity_1.VariableEntity])],
        controllers: [variable_controller_1.VariableController],
        providers: [variable_service_1.VariableService],
        exports: [variable_service_1.VariableService],
    })
], VariableModule);
exports.VariableModule = VariableModule;
//# sourceMappingURL=variable.module.js.map