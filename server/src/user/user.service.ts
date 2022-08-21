import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { SearchUserDto } from './dto/search-user.dto';
import { CommentEntity } from '../comment/entities/comment.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ) {}

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  async findAll() {
    const arr = await this.repository
      .createQueryBuilder('u')
      .leftJoinAndMapMany(
        'u.comments',
        CommentEntity,
        'comment',
        'comment.userId = u.id'
      )
      .loadRelationCountAndMap('u.commentsCount', 'u.comments', 'comments')
      .getMany();
    return arr.map((obj) => {
      delete obj.comments;
      return obj;
    });
  }

  findById(id: number) {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  findByCond(cond: LoginUserDto) {
    return this.repository.findOne({
      where: {
        email: cond.email,
        password: cond.password,
      },
    });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

  async upload(id: number, dto: UpdateUserDto, file: Express.Multer.File) {
    console.log(file.filename);

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

  async search(dto: SearchUserDto) {
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
}
