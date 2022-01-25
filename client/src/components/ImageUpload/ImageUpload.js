import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../App.css";

const ImageUpload = () => {
  const [newImg, setNewImg] = useState();

  // const handleChange = (e) => {
  //   setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  // };

  // const handlePhoto = (e) => {
  //   setNewAuthor({ ...newUser, photo: e.target.files[0] });
  //   console.log(newUser.photo);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("photo", newUser.photo);
  //   formData.append("description", newUser.description);
  //   formData.append("name", newUser.name);

  //   console.log(newUser.photo);

  //   axios
  //     .post("http://localhost:8080/api/add", formData)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const Post = (e) => {
    e.preventDefault();
    const file = document.getElementById("imgInput").files;
    const formData = new FormData();
    formData.append("img", file[0]);
    fetch("http://localhost:8080/api/images", {
      method: "POST",
      body: formData,
    }).then((r) => {
      console.log(r);
    });
    document
      .getElementById("img")
      .setAttribute("src", `http://localhost:8080/api/images/${file[0].name}`);

    console.log(file[0]);
  };

  return (
    <div>
      <div className="container">
        <input
          type="file"
          id="imgInput"
          aria-describedby="inputGroupFileAddon01"
        />
        <button type="button" className="btn btn-primary" onClick={Post}>
          Upload
        </button>
        <img
          id="img"
          style={{
            height: "5rem",
            width: "5rem",
            display: "block",
          }}
        ></img>
      </div>
      <div></div>
    </div>
  );
};

export default ImageUpload;
