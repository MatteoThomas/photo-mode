import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import cloudinaryReducer from "../slices/cloudinary";

const reducer = {
  auth: authReducer,
  message: messageReducer,
  cloudinary: cloudinaryReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
