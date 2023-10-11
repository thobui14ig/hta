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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_entity_1 = require("./post.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ids = [
    618114715010581, 452769581947089, 533851090781667, 296769157540088,
    382908015245608, 118056438849756, 309364699595518, 283314998828030,
    289369428379939, 270943974674097, 1441789296060907, 1390167227872503,
];
const token = `EAABwzLixnjYBO2Di31VKiRE5nDN6pfkOkj1t6ZBRtuxXmioodkveCy9YyhWkjQWKBBa5VYNwFu8PDbwGtdmKZB3qqpumSkQeLKm3OsCJWO3NJSDyWG4mCZAjfJ0ZAMKjMvk354UEiyxmQNZAlMyBOoK687Y7qZB9xKxqAn6w9ZBA7gq3fNNCGqklwGoLTK9yZBXNhawVznYZD`;
let PostService = class PostService {
    constructor(repo) {
        this.repo = repo;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map