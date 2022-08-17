import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { fetchUserData } from "./asyncThunk";
import { ResponseUser } from "./types";

interface UserState {
  data: ResponseUser | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      state.data = action.payload.user;
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.data = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.data = null;
    });
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;

export default userSlice.reducer;
