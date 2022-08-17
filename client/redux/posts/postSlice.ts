import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { fetchAllPosts } from "./asyncThunk";
import { Status, PostItem } from "./types";

interface PostState {
  posts: PostItem[] | null;
  status: Status;
}

const initialState: PostState = {
  posts: [],
  status: Status.LOADING,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsData: (state, action: PayloadAction<PostItem[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllPosts.pending, (state) => {
      state.status = Status.LOADING;
      state.posts = null;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, action: any) => {
      state.status = Status.SUCCESS;
      state.posts = action.payload;
    });
    builder.addCase(fetchAllPosts.rejected, (state) => {
      state.status = Status.ERROR;
      state.posts = null;
    });
    builder.addCase(HYDRATE, (state, action: any) => {
      state.posts = action.payload.posts.posts;
      state.status = Status.SUCCESS;
    });
  },
});

export const { setPostsData } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;

export default postSlice.reducer;
