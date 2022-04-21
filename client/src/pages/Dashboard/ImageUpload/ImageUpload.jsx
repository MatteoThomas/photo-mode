import React, { useState } from "react";
import "./file-input-button.css";
import { UploadContainer, ChooseButton, UploadButton, Image, StyledRow } from "./ImageUpload.style";

const ImageUpload = ( props ) => {
  console.log(props)
  const [image, setImage] = useState([]);
  const [imagePrev, setImagePrev] = useState("");
  const [imageName, setImageName] = useState("");
  //DESTRUCTURE PROPS
  const {folderName = ""} = props
  const {uploadProp = props.uploadedProp} = props

  const uploadImage = () => {
    setImage("");
    setImagePrev("");
    const data = new FormData();
    data.append("file", image);
    data.append("folder", folderName);
    data.append("public_id", imageName);
    data.append("upload_preset", "gallery");
    data.append("cloud_name", "proj3");
    fetch("  https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "post",
      body: data,
    })
    .then((resp) => {
      resp.json()
      //RELOADS PARENT COMPONENT WHEN UPLOAD BUTTON CLICKED
      console.log(uploadProp)
    })
    .catch((err) => console.log(err));
  };

  const imagePreview = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setImage(file);
    reader.onloadend = () => {
      setImageName(file.name)
      setImagePrev({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

//RENDERS IMAGE PREVIEW IF ONE EXISTS
const previewUrl =  imagePrev.imagePreviewUrl && <Image src={imagePrev.imagePreviewUrl} alt="NEED ALT DATA"/> 
//RENDERS UPLOAD BUTTON IF imagePrev EXISTS
const uploadButton = imagePrev && <UploadButton onClick={uploadImage}>Upload</UploadButton>

  return (
    <UploadContainer>
      <StyledRow>
        <h2>Upload</h2>
        <ChooseButton
          buttonLabel="Choose File"
        >
          <input 
          type="file" 
          accept="image/png, image/jpeg, image/svg, image/gif" 
          onChange={(e) => imagePreview(e)}
          />
        </ChooseButton>
        
          {uploadButton}
      </StyledRow>
      {previewUrl}
    </UploadContainer>
  );
};

export default ImageUpload;
