import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UserEntity } from '../user/entities/user.entity';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(user: UserEntity, dto: CreatePostDto): Promise<{
        title: string;
        body: import("./dto/create-post.dto").OutputBlockData[];
        tags: string;
        description: any;
    } & import("./entities/post.entity").PostEntity>;
    findAll(): Promise<import("./entities/post.entity").PostEntity[]>;
    getPopularPosts(): Promise<{
        items: import("./entities/post.entity").PostEntity[];
        total: number;
    }>;
    searchPosts(dto: SearchPostDto): Promise<{
        items: import("./entities/post.entity").PostEntity[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/post.entity").PostEntity>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
