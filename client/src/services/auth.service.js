import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
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
  return axios
    .post(API_URL + "editBio", {
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
