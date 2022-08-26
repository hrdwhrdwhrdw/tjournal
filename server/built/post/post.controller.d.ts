import { CreatePostDto } from './dto/create-post.dto';
import { SearchPostDto } from './dto/search-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(userId: number, dto: CreatePostDto): Promise<{
        title: string;
        body: import("./dto/create-post.dto").OutputBlockData[];
        tags: string;
        description: any;
        user: {
            id: number;
        };
    } & import("./entities/post.entity").PostEntity>;
    update(userId: number, id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(userId: number, id: string): Promise<import("typeorm").DeleteResult>;
    findAll(): Promise<import("./entities/post.entity").PostEntity[]>;
    findAllById(id: string): Promise<import("./entities/post.entity").PostEntity[]>;
    getPopularPosts(): Promise<{
        items: import("./entities/post.entity").PostEntity[];
        total: number;
    }>;
    searchPosts(dto: SearchPostDto): Promise<{
        items: import("./entities/post.entity").PostEntity[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/post.entity").PostEntity>;
}
