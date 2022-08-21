export interface OutputBlockData {
    id?: string;
    type: 'paragraph' | string;
    data: any;
}
export declare class CreatePostDto {
    title: string;
    body: OutputBlockData[];
    tag?: string;
}
