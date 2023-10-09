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
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
let PostEntity = class PostEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'post_id', nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'author_id', nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'author_name', nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "authorName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'content', nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'time', nullable: true }),
    __metadata("design:type", Date)
], PostEntity.prototype, "time", void 0);
PostEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'post' })
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map