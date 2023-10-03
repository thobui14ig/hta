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
exports.FileEntity = void 0;
const topic_entity_1 = require("../topic/topic.entity");
const typeorm_1 = require("typeorm");
let FileEntity = class FileEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FileEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileEntity.prototype, "src", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => topic_entity_1.TopicEntity, (topic) => topic.file),
    __metadata("design:type", topic_entity_1.TopicEntity)
], FileEntity.prototype, "topic", void 0);
FileEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'file' })
], FileEntity);
exports.FileEntity = FileEntity;
//# sourceMappingURL=file.entity.js.map