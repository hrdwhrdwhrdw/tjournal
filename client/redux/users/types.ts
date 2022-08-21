export type ResponseUser = {
  fullName: string;
  email: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  token: string;
  commentsCount: number;
  imageUrl?: string
};