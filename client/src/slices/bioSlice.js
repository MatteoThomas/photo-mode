import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";

export const editBio = createAsyncThunk(
  "auth/editBio",
  async ({ bio, nameData, emailData }, thunkAPI) => {
    try {
      const response = await AuthService.editBio(bio, nameData, emailData);
      thunkAPI.dispatch(setMessage(response.data.message));
      // console.log(response);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {};

const bioSlice = createSlice({
  name: "bio",
  initialState,
  reducers: {
    setEditBio: (state, action) => {
      return { editBio: action.payload };
    },
    // clearMessage: () => {
    //   return { message: "" };
    // },
  },
});

const { reducer, actions } = bioSlice;

export const { setEditBio } = actions;

export default reducer;
