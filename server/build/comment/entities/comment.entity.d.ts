import { UserEntity } from '../../user/entities/user.entity';
export declare class CommentEntity {
    id: number;
    text: string;
    user: UserEntity;
    post: UserEntity;
    createdAt: Date;
    updatedAt: Date;
}
