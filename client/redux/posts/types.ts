import { ResponseUser } from '../users/types';
import { OutputData } from '@editorjs/editorjs';
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

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