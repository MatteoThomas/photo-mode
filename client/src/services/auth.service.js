import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";
// const API_URL = "https://photo-mode.herokuapp.com/api/auth/";

const API = axios.create({
  // baseURL: "https://photo-mode.herokuapp.com/api/auth/",
  baseURL: "http://localhost:8080/api/auth/",
});

const register = (username, email, password) => {
  return API.post("signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return API.post("signin", {
    username,
    password,
  }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const editBio = (bio, nameData, emailData) => {
  return API.post("editBio", {
    username: nameData,
    email: emailData,
    bio: bio,
  }).then((response) => {
    console.log(response.data.bio);
    return response.data.bio;
  });
};

const authService = {
  register,
  login,
  editBio,
};

export default authService;
