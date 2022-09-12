import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";
import postReducer from "./posts/postSlice";
import profileReducer from "./profile/profileSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      posts: postReducer,
      profile: profileReducer,
    },
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
