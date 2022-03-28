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
  const headers = {
    "Access-Control-Allow-Headers":
      "x-access-token, Origin, Content-Type: application/json, Accept",
  };
  console.log(username, password);
  return axios
    .post(
      API_URL + "signin",
      {
        username,
        password,
      },
      { headers }
    )
    .then((response) => {
      console.log("response");
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
