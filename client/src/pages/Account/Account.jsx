import React, { useEffect, useState } from "react";
import AvatarUpload from "./Avatar/AvatarUpload";
import NameAndBio from "./NameAndBio/NameAndBio";
import {  Title, AvatarImg, AvatarContainer, Tooltiptext } from "./Account.style";
import { StyledContainer } from "../../components/Container/Container.style";
import AnimatedPage from "../../animation/AnimatedPage";

const Account = () => {
  const [avatar, setAvatar] = useState([]);
  const [showAvatarGallery, setShowAvatarGallery] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    let isSubscribed = true;

    const fetchName = async () => {
      const req = await fetch("http://localhost:8080/api/user/login", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await req.json();
      if (data.status === "ok") {
        //SETS userName
        setUserName(data.name);
      } else {
        alert(data.error);
      }
    };

    const fetchAvatar = async() => {
      //SENDS userName AS A SEARCH PARAMETER
      const req = await fetch(`http://localhost:8080/api/cloudinary/avatar?folderData=${userName}`)
      const data = await req.json();
      (data.status === "ok" && data.results.total_count) ?
      setAvatar(data.results.resources[0].secure_url)
      :
      console.log("No avatar selected");
    }
    if  (isSubscribed) {
      // fetchName();
      fetchAvatar();
} else {
  alert("Error");
}
  return() => isSubscribed = false
}, [userName]);

  function handleAvatarClick() {
      if (!showAvatarGallery) {
      setShowAvatarGallery(true)
      } else {
      setShowAvatarGallery(false)
      }
    }

  //VARIABLE THAT CHECKS CONDITION OF showAvatarGallery THEN RENDERS AvatarUpload COMPONENT or DIV
  const userAvatar = avatar.length > 0  ? 
    <>
    {/* <div>Click to change</div>  */}
      <AvatarImg src={avatar} alt="avatar" onClick={() => handleAvatarClick()} />
    </> 
    : <div onClick={() => handleAvatarClick()}>
        No avatar selected, click here to add
      </div> 

  const avatarUpload = showAvatarGallery && 
    <AvatarUpload folderName={userName}/> 
  


  return (
    <AnimatedPage>
    <StyledContainer>
 
      <Title>
        <h1>Account</h1>
      </Title>
      <NameAndBio/>

      <AvatarContainer>

        <Tooltiptext className="tooltip-text">
            Click to Change
        </Tooltiptext>

        {userAvatar}
        {avatarUpload}
        
      </AvatarContainer>
    </StyledContainer>
    </AnimatedPage>
  );
};

export default Account;

