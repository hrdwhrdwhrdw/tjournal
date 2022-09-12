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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const comment_entity_1 = require("../comment/entities/comment.entity");
const post_entity_1 = require("../post/entities/post.entity");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return this.repository.save(dto);
    }
    async findAll() {
        const arr = await this.repository
            .createQueryBuilder('u')
            .leftJoinAndMapMany('u.comments', comment_entity_1.CommentEntity, 'comment', 'comment.userId = u.id')
            .loadRelationCountAndMap('u.commentsCount', 'u.comments', 'comments')
            .getMany();
        return arr.map((obj) => {
            delete obj.comments;
            return obj;
        });
    }
    async findById(id) {
        const profile = await this.repository
            .createQueryBuilder('u')
            .leftJoinAndMapMany('u.comments', comment_entity_1.CommentEntity, 'comment', `comment.userId = u.id`)
            .loadRelationCountAndMap('u.commentsCount', 'u.comments', 'comments')
            .leftJoinAndMapMany('u.posts', post_entity_1.PostEntity, 'post', `post.userId = u.id`)
            .loadRelationCountAndMap('u.postsCount', 'u.posts', 'posts')
            .where('post.userId = :id', { id })
            .where('comment.userId = :id', { id })
            .getOne();
        delete profile.comments;
        delete profile.posts;
        return profile;
    }
    findByCond(cond) {
        return this.repository.findOne({
            where: {
                email: cond.email,
                password: cond.password,
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
            throw new common_1.NotFoundException('Произошла ошибка при редактировании профиля');
        }
        await this.repository.update(id, {
            fullName: dto.fullName,
            email: dto.email,
            password: dto.password,
        });
        return this.repository.findOne({
            where: {
                id: id,
            },
        });
    }
    async upload(id, dto, file) {
        await this.repository.update(id, {
            fullName: dto.fullName,
            email: dto.email,
            password: dto.password,
            imageUrl: file.filename,
        });
        return this.repository.findOne({
            where: {
                id: id,
            },
        });
    }
    async search(dto) {
        const qb = this.repository.createQueryBuilder('u');
        qb.limit(dto.limit || 0);
        qb.take(dto.take || 10);
        if (dto.email) {
            qb.andWhere(`u.email ILIKE :email`);
        }
        if (dto.fullName) {
            qb.andWhere(`u.fullName ILIKE :fullName`);
        }
        qb.setParameters({
            email: `%${dto.email}%`,
            fullName: `%${dto.fullName}%`,
        });
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map