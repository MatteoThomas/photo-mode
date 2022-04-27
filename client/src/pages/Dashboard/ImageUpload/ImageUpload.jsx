import React, { useState } from "react";
import "./file-input-button.css";
import { UploadContainer, ChooseButton, UploadButton, Image, StyledRow, Input } from "./ImageUpload.style";

const ImageUpload = ( props ) => {
  const [image, setImage] = useState([]);
  const [imagePrev, setImagePrev] = useState("");
  const [userImageName, setUserImageName] = useState("");
  const [imageTags, setImageTags] = useState("")

  //DESTRUCTURE PROPS
  const {folderName = ""} = props

  const uploadImage = () => {
    setImage("");
    setImagePrev("");
    const data = new FormData();
    data.append("file", image);
    data.append("folder", folderName);
    data.append("public_id", userImageName);
    data.append("tags", imageTags);
    data.append("upload_preset", "gallery");
    data.append("cloud_name", "proj3");
    fetch("  https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "post",
      body: data,
    })
    .then((result) => {
      result.json()
    })
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
    reader.readAsDataURL(file);
    // setImage(reader.result)
    // console.log(reader.result)
  };

//RENDERS IMAGE PREVIEW IF ONE EXISTS
const previewUrl =  imagePrev.imagePreviewUrl && <Image src={imagePrev.imagePreviewUrl} alt="NEED ALT DATA"/> 

const canSubmit = userImageName.length > 2 && userImageName.length < 11
console.log(canSubmit)

//RENDERS UPLOAD FORM IF imagePrev EXISTS
const uploadElement = imagePrev && 
  <>
  <UploadButton 
    onClick={uploadImage}
    disabled={!canSubmit}
    >Upload
  </UploadButton>      

  <Input
    value={userImageName}
    name="userImageName"
    type="text"
    placeholder="Image name must be 3 - 10 characters"
    onChange={(e) => setUserImageName(e.target.value)}
  />
  <Input
    value={imageTags}
    name="userImageDesc"
    type="text"
    placeholder="Image tags, separate with a comma"
    onChange={(e) => setImageTags(e.target.value)}
  />
  </>

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
      </StyledRow>
          {uploadElement}
      {previewUrl}
    </UploadContainer>
  );
};

export default ImageUpload;
