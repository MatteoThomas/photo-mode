import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const bioSlice = createSlice({
  name: "bio",
  initialState,
  reducers: {
    getBio: (state) => {
      state.bio = bio;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getBio } = bioSlice.actions;

export default bioSlice.reducer;
