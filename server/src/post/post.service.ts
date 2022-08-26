import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { CommentEntity } from '../comment/entities/comment.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>
  ) {}

  async create(dto: CreatePostDto, userId: number) {
    const firstParagraph = dto.body.find((obj) => obj.type === 'paragraph')
      ?.data.text;

    return this.repository.save({
      title: dto.title,
      body: dto.body,
      tags: dto.tag,
      description: firstParagraph || '',
      user: { id: userId },
    });
  }

  async findAll() {
    const arr = await this.repository
      .createQueryBuilder('p')
      .leftJoinAndMapMany(
        'p.comments',
        CommentEntity,
        'comment',
        'comment.postId = p.id'
      )
      .leftJoinAndSelect('p.user', 'user')
      .loadRelationCountAndMap('p.commentsCount', 'p.comments', 'comments')
      .orderBy('p.createdAt', 'DESC')
      .getMany();
    arr.map((post) => {
      delete post.comments;
      return post;
    });
    return arr;
  }

  async findAllById(id: number) {
    const arr = await this.repository
      .createQueryBuilder('p')
      .leftJoinAndMapMany(
        'p.comments',
        CommentEntity,
        'comment',
        'comment.postId = p.id'
      )
      .leftJoinAndSelect('p.user', 'user')
      .loadRelationCountAndMap('p.commentsCount', 'p.comments', 'comments')
      .where('p.user.id = :id', { id })
      .orderBy('p.createdAt', 'DESC')
      .getMany();
    arr.map((post) => {
      delete post.comments;
      return post;
    });
    return arr;
  }

  async popular() {
    const qb = this.repository.createQueryBuilder();
    qb.orderBy('views', 'DESC');
    qb.limit(2);
    const [items, total] = await qb.getManyAndCount();
    return {
      items,
      total,
    };
  }

  async search(dto: SearchPostDto) {
    const qb = this.repository.createQueryBuilder('p');
    qb.leftJoinAndSelect('p.user', 'user');
    qb.limit(dto.limit || 0);
    qb.take(dto.take || 10);
    if (dto.views) {
      qb.orderBy('views', dto.views);
    }
    if (dto.body) {
      qb.andWhere(`p.body ILIKE :body`);
    }
    if (dto.title) {
      qb.andWhere(`p.title ILIKE :title`);
    }
    if (dto.tag) {
      qb.andWhere(`p.tag ILIKE :tag`);
    }

    qb.setParameters({
      title: `%${dto.title}%`,
      body: `%${dto.body}%`,
      tag: `%${dto.tag}%`,
      views: dto.views || '',
    });

    const [items, total] = await qb.getManyAndCount();
    return { items, total };
  }

  async findOne(id: number) {
    await this.repository
      .createQueryBuilder('posts')
      .whereInIds(id)
      .leftJoinAndSelect('posts.user', 'user')
      .update()
      .set({ views: () => 'views + 1' })
      .execute();
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, dto: UpdatePostDto, userId: number) {
    const find = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    const firstParagraph = dto.body.find((obj) => obj.type === 'paragraph')
      ?.data.text;
    return this.repository.update(id, {
      title: dto.title,
      body: dto.body,
      tag: dto.tag,
      description: firstParagraph || '',
      user: { id: userId },
    });
  }

  async remove(id: number, userId: number) {
    const find = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    if (!find) {
      throw new NotFoundException('Статья не найдена');
    }
    if (find.user.id !== userId) {
      throw new ForbiddenException('У вас нет доступа к статье');
    }
    return this.repository.delete(id);
  }
}
