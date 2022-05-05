import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://photo-mode.herokuapp.com",
});

// axios.defaults.baseURL = "http://localhost:8080";
// DEVELOPMENT
// const BASE_URL = "http://localhost:8080/api/auth/";

// PRODUCTION

// const baseURL = "http://localhost:8080/api/auth/";
// // const BASE_URL = "https://photo-mode.herokuapp.com/api/auth/";
// const TOKEN = "";

// export const publicRequest = axios.create({
//   baseURL: baseURL,
// });

// export const userRequest = axios.create({
//   baseURL: baseURL,
//   header: { token: `Bearer ${TOKEN}` },
// });
