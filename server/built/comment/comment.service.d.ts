import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentService {
    private repository;
    constructor(repository: Repository<CommentEntity>);
    create(dto: CreateCommentDto, userId: number): Promise<CommentEntity>;
    findAll(postId: number): Promise<{
        post: {
            id: number;
            title: string;
        };
        id: number;
        text: string;
        user: import("../user/entities/user.entity").UserEntity;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findAllById(id: number): Promise<CommentEntity[]>;
    findOne(id: number): Promise<CommentEntity>;
    update(id: number, dto: UpdateCommentDto): Promise<CommentEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
