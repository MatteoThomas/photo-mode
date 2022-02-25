import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchName } from "../../UserService";


const AvatarUpload = () => {
  const [avatar, setAvatar] = useState("");
  const [avatarPrev, setAvatarPrev] = useState("");
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    //GETS FETCH FUNCTION FROM UserService.js
      const fetchFolderName = () => {
        fetchName().then(response => {
        setFolderName(response.name)
        })
      }
      fetchFolderName()
    },[]);

  const uploadAvatar = () => {
    setAvatar("");
    setAvatarPrev("");
    const data = new FormData();
    data.append("file", avatar);

    data.append("tags", "avatar" )
    data.append("folder", folderName)
    data.append("upload_preset", "gallery");
    data.append("cloud_name", "proj3");
  
    fetch("https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "post",
      body: data,
    })
    .then((resp) => resp.json())
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

//RENDERS IMAGE PREVIEW IF ONE EXISTS
const previewUrl =  avatarPrev.avatarPreviewUrl && <Image src={avatarPrev.avatarPreviewUrl} alt="avatar preview"/> 
//RENDERS UPLOAD BUTTON IF imagePrev EXISTS
const uploadButton = avatarPrev && <UploadButton onClick={uploadAvatar}>Upload</UploadButton>


  return (
    <UploadContainer>
      <StyledRow>
       
        <Input>
          <input type="file" accept="image/png, image/jpeg, image/svg, image/gif" onChange={(e) => avatarPreview(e)}/>
        </Input>
      {previewUrl}
      {uploadButton}
      </StyledRow>
    </UploadContainer>
  );
};

export default AvatarUpload;

const UploadContainer = styled.div`
  font-size: 1rem;
  color: aliceblue;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  /* background-color: #af8282; */
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: .5rem auto 0;
  /* background-color: antiquewhite; */
  width: 100%;
`

const UploadButton = styled.button`
  background-color: aquamarine;
  color: black;
  border: 1px transparent solid;
  border-radius: 4px;
  /* width: 100%; */
  border: 1px transparent solid;
  &:hover {
    background-color: transparent;
    border: 1px aquamarine solid;
  }
`
const Input = styled.div`

`

const Image = styled.img`
    margin: 1rem auto 0;
    width: 200px;
`