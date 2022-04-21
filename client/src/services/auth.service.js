import axios from "axios";

const API = axios.create({
  // baseURL: "https://photo-mode.herokuapp.com/api/",
  baseURL: "http://localhost:8080/api/",
});

// const api = axios.create({
//   baseURL: BASE_URL,
// });

const register = (username, email, password) => {
  return API.post("/auth/signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return API.post("/auth/signin", {
    username,
    password,
  }).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

// const editBio = (bio, nameData, emailData) => {
//   return API.post("http://localhost:8080/api/auth/editBio", {
//     username: nameData,
//     email: emailData,
//     bio: bio,
//   }).then((response) => {
//     console.log(response.data.bio);
//     return response.data.bio;
//   });
// };

const authService = {
  register,
  login,
  // editBio,
};

export default authService;
