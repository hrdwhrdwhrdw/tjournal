import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { ResponseUser } from "../auth/types";

interface ProfileState {
  data: ResponseUser | null;
}

const initialState: ProfileState = {
  data: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (
      state: ProfileState,
      action: PayloadAction<ResponseUser>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { setProfileData } = profileSlice.actions;

export const selectProfileData = (state: RootState) => state.profile.data;

export default profileSlice.reducer;
