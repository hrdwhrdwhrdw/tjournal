import { ResponseUser } from '../auth/types';
import { OutputData } from '@editorjs/editorjs';
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

export type PostItem = {
  body: OutputData["blocks"];
  description: string;
  createdAt: Date;
  id: number;
  user: ResponseUser;
  tag: string | null;
  title: string;
  updatedAt: Date;
  views: number;
};