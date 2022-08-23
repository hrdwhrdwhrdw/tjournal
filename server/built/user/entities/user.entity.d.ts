import { CommentEntity } from '../../comment/entities/comment.entity';
import { PostEntity } from '../../post/entities/post.entity';
export declare class UserEntity {
    id: number;
    fullName: string;
    email: string;
    imageUrl: string;
    comments: CommentEntity[];
    posts: PostEntity[];
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}
