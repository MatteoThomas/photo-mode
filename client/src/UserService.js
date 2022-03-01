export async function fetchName() {
  const req = await fetch("http://localhost:8080/api/login", {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  });
  const data = await req.json();
  if (data.status === "ok") {
    return data;
  } else {
    alert(data.error);
  }
}
