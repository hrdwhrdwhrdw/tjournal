import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../utils/api";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {

    const posts = await Api().post.getAll();
    return posts;
  }
);
