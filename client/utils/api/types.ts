import { PostItem } from "../../redux/posts/types";
import { ResponseUser } from "../../redux/auth/types";
export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type CommentItemType = {
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
};
