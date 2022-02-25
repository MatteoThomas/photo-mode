//SEARCHES THE AVATARS FOLDER IN CLOUDINARY TO GET ALL PROVIDED AVATARS
export async function fetchAvatars() {
  const req = await fetch(`http://localhost:8080/api/avatarList`);
  const data = await req.json();
  if (data.status === "ok" && data.results.total_count) {
    const resources = data.results.resources;
    const images = resources.map((resource) => {
      return {
        image: resource.secure_url,
      };
    });
    console.log(images);
    return images;
  } else {
    console.log("No avatar selected");
  }
}

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
