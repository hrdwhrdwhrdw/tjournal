import { string } from "yup"

export interface ResponseProfile {
  id: number,
  fullName: string,
  email: string,
  createdAt: string,
  imageUrl: string,
  password: string,
  updatedAt: string,
  postCounts: number,
  commentsCount: number
}