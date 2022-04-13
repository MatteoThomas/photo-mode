import axios from "axios";

// DEVELOPMENT
// const BASE_URL = "http://localhost:5000/api/";

// PRODUCTION
const BASE_URL = "https://photo-mode.herokuapp.com/api/";

export const request = axios.create({
  baseURL: BASE_URL,
});
