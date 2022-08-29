import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(dto: CreateCommentDto, userId: number): Promise<import("./entities/comment.entity").CommentEntity>;
    findAll(query: {
        postId: string;
    }): Promise<{
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
    findAllById(id: string): Promise<import("./entities/comment.entity").CommentEntity[]>;
    findOne(id: string): Promise<import("./entities/comment.entity").CommentEntity>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("./entities/comment.entity").CommentEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
