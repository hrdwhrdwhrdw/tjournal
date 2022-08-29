import { AxiosInstance } from "axios";
import { CommentItemType } from "./types";
import { UpdateCommentDto } from "../../../server/src/comment/dto/update-comment.dto";

type CreateCommentDto = {
  postId: number;
  text: string;
};

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId?: number) {
    const { data } = await instance.get<CommentItemType[]>("/comments", {
      params: {
        postId,
      },
    });
    return data;
  },

  async getAllById(id: number) {
    const { data } = await instance.get<CommentItemType[]>(`/comments/user/${id}`);
    return data;
  },

  async create(dto: CreateCommentDto) {
    const { data } = await instance.post<
      CreateCommentDto,
      { data: CommentItemType }
    >("comments", dto);
    return data;
  },

  async remove(id: number) {
    return instance.delete<CommentItemType>("/comments/" + id);
  },

  async update(id: number, dto: CreateCommentDto) {
    const { data } = await instance.patch<
      CreateCommentDto,
      { data: CommentItemType }
    >(`comments/${id}`, dto);
    return data;
  },
});
