import { createAsyncThunk } from "@reduxjs/toolkit";
import { NextPageContext } from 'next/types';
import { Api } from "../../utils/api";

export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async (ctx: NextPageContext<any>) => {
    const userData = await Api(ctx).user.getMe();
    return userData;
  }
);
