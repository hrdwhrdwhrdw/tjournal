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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CommentService = class CommentService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto, userId) {
        const comment = await this.repository.save({
            text: dto.text,
            post: { id: dto.postId },
            user: { id: userId },
        });
        return this.repository.findOne({
            where: {
                id: comment.id,
            },
            relations: ['user'],
        });
    }
    async findAll(postId) {
        const qb = this.repository.createQueryBuilder('c');
        if (postId) {
            qb.where('c.postId = :postId', { postId });
        }
        const res = await qb
            .leftJoinAndSelect('c.user', 'user')
            .leftJoinAndSelect('c.post', 'post')
            .getMany();
        return res.map((obj) => {
            return Object.assign(Object.assign({}, obj), { post: { id: obj.post.id, title: obj.post.title } });
        });
    }
    async findAllById(id) {
        const arr = await this.repository
            .createQueryBuilder('c')
            .leftJoinAndSelect('c.user', 'user')
            .where('c.user.id = :id', { id })
            .orderBy('c.createdAt', 'DESC')
            .getMany();
        return arr;
    }
    findOne(id) {
        return this.repository.findOne({
            where: {
                id: id,
            },
        });
    }
    async update(id, dto) {
        const find = await this.repository.findOne({
            where: {
                id: id,
            },
        });
        if (!find) {
            throw new common_1.NotFoundException('Произошла ошибка при редактировании');
        }
        await this.repository.update(id, {
            text: dto.text,
            post: { id: dto.postId },
        });
        return this.repository.findOne({
            where: {
                id: id,
            },
            relations: ['user'],
        });
    }
    remove(id) {
        return this.repository.delete(id);
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map