import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const [newUser, setNewAuthor] = useState({
    name: "",
    description: "",
    photo: "",
  });

  const handleChange = (e) => {
    setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewAuthor({ ...newUser, photo: e.target.files[0] });
    console.log(newUser.photo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newUser.photo);
    formData.append("description", newUser.description);
    formData.append("name", newUser.name);

    console.log(newUser.photo);

    axios
      .post("http://localhost:8080/api/add", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />
      <input
        type="text"
        placeholder="name"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={newUser.description}
        onChange={handleChange}
      />
      <div className="bg"></div>

      <input type="submit" />
    </form>
  );
};

export default ImageUpload;
