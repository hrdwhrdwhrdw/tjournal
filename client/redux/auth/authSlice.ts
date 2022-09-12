import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { ResponseUser } from "./types";

interface AuthState {
  data: ResponseUser | null;
}

const initialState: AuthState = {
  data: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state: AuthState, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});

export const { setAuthData } = authSlice.actions;

export const selectAuthData = (state: RootState) => state.user.data;

export default authSlice.reducer;
