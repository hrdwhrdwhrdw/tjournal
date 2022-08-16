import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, dto: UpdateCommentDto) {
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
