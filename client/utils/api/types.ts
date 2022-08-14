import { OutputData } from "@editorjs/editorjs";
export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  fullName: string;
  email: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  token: string;
};

export type PostItem = {
  body: OutputData["blocks"];
  description: string;
  createdAt: string;
  id: number;
  user: ResponseUser;
  tag: string | null;
  title: string;
  updatedAt: string;
  views: number;
};
