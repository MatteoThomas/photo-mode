import { request } from "./requestMethods";

// const API_URL = "https://photo-mode.herokuapp.com/api/auth/";
// const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return request.post("/auth/signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return request
    .post("/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const editBio = (bio, nameData, emailData) => {
  return request
    .post("/auth/editBio", {
      bio: bio,
      username: nameData,
      email: emailData,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

const authService = {
  register,
  login,
  editBio,
  // getUserName,
};

export default authService;
