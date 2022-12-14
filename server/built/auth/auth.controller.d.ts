import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        token: string;
        id: number;
        fullName: string;
        email: string;
        imageUrl: string;
        comments: import("../comment/entities/comment.entity").CommentEntity[];
        posts: import("../post/entities/post.entity").PostEntity[];
        password?: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    register(dto: CreateUserDto): Promise<{
        token: string;
        fullName: string;
        email: string;
        password?: string;
        imageUrl: string;
        id: number;
        comments: import("../comment/entities/comment.entity").CommentEntity[];
        posts: import("../post/entities/post.entity").PostEntity[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
