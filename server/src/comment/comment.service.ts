import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private repository: Repository<CommentEntity>
  ) {}

  async create(dto: CreateCommentDto, userId: number) {
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

  async findAll(postId: number) {
    const qb = this.repository.createQueryBuilder('c');
    if (postId) {
      qb.where('c.postId = :postId', { postId });
    }
    const res = await qb
      .leftJoinAndSelect('c.user', 'user')
      .leftJoinAndSelect('c.post', 'post')
      .getMany();
    return res.map((obj) => {
      return {
        ...obj,
        post: { id: obj.post.id, title: obj.post.title },
      };
    });
  }

  async findAllById(id: number) {
    const arr = await this.repository
      .createQueryBuilder('c')
      // .leftJoinAndMapMany(
      //   'p.comments',
      //   CommentEntity,
      //   'comment',
      //   'comment.postId = p.id'
      // )
      .leftJoinAndSelect('c.user', 'user')
      // .loadRelationCountAndMap('p.commentsCount', 'p.comments', 'comments')
      .where('c.user.id = :id', { id })
      .orderBy('c.createdAt', 'DESC')
      .getMany();
    return arr;
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, dto: UpdateCommentDto) {
    const find = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    if (!find) {
      throw new NotFoundException('Произошла ошибка при редактировании');
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

  remove(id: number) {
    return this.repository.delete(id);
  }
}
