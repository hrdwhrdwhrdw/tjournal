import { OutputBlockData } from '../../../dist/post/dto/create-post.dto';
import { UserEntity } from '../../user/entities/user.entity';
import { CommentEntity } from '../../comment/entities/comment.entity';
export declare class PostEntity {
    id: number;
    title: string;
    body: OutputBlockData[];
    description: string;
    user: UserEntity;
    comments: CommentEntity[];
    views: number;
    tag?: string;
    createdAt: Date;
    updatedAt: Date;
}
