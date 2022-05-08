import React, { useState } from "react";
import { AvatarContainer, StyledRow, UploadButton, Input, Image } from "./AvatarUpload.style";

const AvatarUpload = ( props ) => {
  const [avatar, setAvatar] = useState([]);
  const [avatarPrev, setAvatarPrev] = useState("");
  
  //DESTRUCTURE PROPS
  const {folderName = ""} = props

  const uploadAvatar = () => {
    setAvatar("");
    setAvatarPrev("")

  const formData = new FormData();
    formData.append("file", avatar);
    formData.append("tags", "avatar" )
    formData.append("folder", folderName)
    formData.append("upload_preset", "gallery");
    formData.append("cloud_name", "proj3");
    
    fetch("https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "POST",
      body: formData
    })
    .then((response) => {

      alert("Avatar Uploaded")
      return response.text()
    })
    .catch((err) => console.log(err));
  };

  const avatarPreview = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setAvatar(file);
     setAvatarPrev(reader.result)
    };
    reader.readAsDataURL(file);
  };

  // RENDERS AVATAR PREVIEW IF ONE EXISTS
  const previewUrl =  avatarPrev && 
    <Image 
      src={avatarPrev} 
      alt="profile pic preview"
    /> 
    
  //RENDERS UPLOAD BUTTON IF imagePrev EXISTS
  const uploadButton = avatarPrev && 
    <UploadButton onClick={uploadAvatar}>
        Upload
    </UploadButton>

  return (
    <AvatarContainer>
      <StyledRow>
        <Input>
          <input 
            type="file" 
            accept="image/png, image/jpeg, image/svg, image/gif" 
            onChange={(e) => avatarPreview(e)}
            />
            {previewUrl}
            {uploadButton}
        </Input>
      </StyledRow>
    </AvatarContainer>
  );
};

export default AvatarUpload;
