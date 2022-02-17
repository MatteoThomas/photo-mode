import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = ( props ) => {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  //DESTRUCTURE PROPS
  const {folderName = ""} =  props

  const uploadImage = () => {
    setImage("");
    setImagePrev("");
    const data = new FormData();
    data.append("file", image);
    data.append("folder", folderName)
    data.append("upload_preset", "gallery");
    data.append("cloud_name", "proj3");
    fetch("  https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "post",
      body: data,
    })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  };

  const imagePreview = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setImage(file);
    reader.onloadend = () => {
      setImagePrev({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    // console.log(imagePrev.imagePreviewUrl)
    reader.readAsDataURL(file);
    // console.log(file);
  };
  // CONDITIONALLY RENDERS IMAGE PREVIEW
  const previewUrl =  imagePrev.imagePreviewUrl ? <img src={imagePrev.imagePreviewUrl} alt="NEED ALT DATA"/>  : ""
  const uploadButton = imagePrev ? <button className="uploadBtn" onClick={uploadImage}>Upload</button> : <h1></h1>

  return (
    <div>
      <div className="imageUpload">
        <h1>Upload</h1>
        <input type="file" accept="image/png, image/jpeg" onChange={(e) => imagePreview(e)}/>
        {previewUrl}
        {uploadButton}
        </div>
      <div>
      </div>
    </div>
  );
};

export default ImageUpload;
