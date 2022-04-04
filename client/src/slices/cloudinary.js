import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import { createSelector } from "@reduxjs/toolkit";
import CloudinaryService from "../services/cloudinary.service";

const initialState = {};

export const getUserGallery = createAsyncThunk(
  "cloudinary/getUserGallery",
  async ({ userName }, thunkAPI) => {
    try {
      const response = await CloudinaryService.getUserGallery(userName);
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

export const selectUserGallery = createSelector(
  (state) => ({
    userGallery: state.userGallery,
  }),
  (state) => state
);

export const getExploreGallery = createAsyncThunk(
  "cloudinary/getExploreGallery",
  async ({ userName }, thunkAPI) => {
    try {
      const response = await CloudinaryService.getExploreGallery(userName);
      thunkAPI.dispatch(setMessage(response.data.message));
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

const getExploreGallerySlice = createSlice({
  name: "getExploreGallery",
  initialState,
  reducers: {
    setExploreGallery: (state, action) => {
      return { getExploreGallery: action.payload };
    },
  },
});

export const selectExploreGallery = createSelector(
  (state) => ({
    exploreGallery: state.exploreGallery,
  }),
  (state) => state
);

export const getLandingGallery = createAsyncThunk(
  "cloudinary/getLandingGallery",
  async ({}, thunkAPI) => {
    try {
      const response = await CloudinaryService.getLandingGallery();
      thunkAPI.dispatch(setMessage(response.data.message));
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

// const { reducer, actions } = getUserGallerySlice;
const { reducer, actions } = getExploreGallerySlice;
export const { setUserGallery, setExploreGallery, setLandingGallery } = actions;

export default reducer;
