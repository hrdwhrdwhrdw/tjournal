import { OutputBlockData } from '../../../dist/post/dto/create-post.dto';
export declare class PostEntity {
    id: number;
    title: string;
    body: OutputBlockData[];
    description: string;
    views: number;
    tag?: string;
    createdAt: Date;
    updatedAt: Date;
}
