import { OutputData } from "@editorjs/editorjs";
import { AxiosInstance } from "axios";
import { PostItem } from "../../redux/posts/types";
import { SearchPostDto } from "./types";

type CreatePostDto = {
  title: string;
  body: OutputData["blocks"];
};

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostItem[]>("/posts");
    return data;
  },

  async getAllById(id: number) {
    const { data } = await instance.get<PostItem[]>(`/posts/user/${id}`);
    return data;
  },

  async getOne(id: number) {
    const { data } = await instance.get<PostItem>(`/posts/${id}`);
    return data;
  },

  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostItem }>(
      "posts",
      dto
    );
    return data;
  },

  async update(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: PostItem }>(
      `posts/${id}`,
      dto
    );
    return data;
  },

  async search(query: SearchPostDto) {
    const { data } = await instance.get<{ items: PostItem[]; total: number }>(
      `/posts/search/`,
      {
        params: query,
      }
    );
    return data;
  },
});
