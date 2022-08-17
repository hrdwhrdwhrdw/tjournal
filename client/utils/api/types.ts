import { OutputData } from "@editorjs/editorjs";
import { ResponseUser } from '../../redux/users/types';
import { PostItem } from '../../redux/posts/types';
export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type CommentItem = {
  userData: any;
  text: string;
  post: PostItem;
  id: number;
  user: ResponseUser;
  createdAt: string;
};

export type SearchPostDto = {
  title?: string;
  body?: string;
  limit?: number;
  take?: number;
}
