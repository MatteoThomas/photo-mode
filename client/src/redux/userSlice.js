import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {},
});

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      let data = await response.json();

      console.log(data);
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return { ...data, email: email, password: password };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const { login, lougout } = userSlice.actions;
export const userSelector = (state) => state.user;
