import React, { useState } from "react";
import { UploadContainer, StyledRow, UploadButton, Input, Image } from "./AvatarUpload.style";


const AvatarUpload = ( props ) => {
  const [avatar, setAvatar] = useState([]);
  const [avatarPrev, setAvatarPrev] = useState("");
  //DESTRUCTURE PROPS
  const {folderName = ""} = props

  
  const uploadAvatar = () => {
    setAvatar("");
    setAvatarPrev("");

    const formData = new FormData();
      formData.append("file", avatar);
      formData.append("tags", "avatar" )
      formData.append("folder", folderName)
      formData.append("upload_preset", "gallery");
      formData.append("cloud_name", "proj3");
  console.log(formData)
    fetch("https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "POST",
      body: formData
    })
    .then((response) => {
      console.log(response)
      return response.text()
    })
    .catch((err) => console.log(err));
  };

  const avatarPreview = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setAvatar(file);
    reader.onloadend = () => {
      setAvatarPrev({
        file: file,
        avatarPreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  //RENDERS AVATAR PREVIEW IF ONE EXISTS
  const previewUrl =  avatarPrev.avatarPreviewUrl && 
    <Image 
      src={avatarPrev.avatarPreviewUrl} 
      alt="avatar preview"
    /> 
    
  //RENDERS UPLOAD BUTTON IF imagePrev EXISTS
  const uploadButton = avatarPrev && 
    <UploadButton onClick={uploadAvatar}>
        Upload
    </UploadButton>

  return (
    <UploadContainer>
      <StyledRow>
        <Input>
          <input 
            type="file" 
            accept="image/png, image/jpeg, image/svg, image/gif" 
            onChange={(e) => avatarPreview(e)}
          /> Choose Avatar
        </Input>
        {uploadButton}
      </StyledRow>
      <StyledRow>
        {previewUrl} 
        </StyledRow>
    </UploadContainer>
  );
};

export default AvatarUpload;
