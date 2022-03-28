export default function authHeader() {
  console.log("authheader");
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
