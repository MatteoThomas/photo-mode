import React, { useEffect, useState } from "react";
import AvatarUpload from "./Avatar/AvatarUpload";
import NameAndBio from "./NameAndBio/NameAndBio";
import {  Title, AvatarImg, Tooltiptext } from "./Account.style";
import { StyledContainer } from "../../components/Container/Container.style";
import AnimatedPage from "../../animation/AnimatedPage";
import { AvatarContainer } from "../../components/Container/Container.style";

const Account = () => {
  const [avatar, setAvatar] = useState([]);
  const [showAvatarGallery, setShowAvatarGallery] = useState(false)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userBio, setUserBio] = useState("")
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    
    const getEmail = async() => {
      setLoading(true);
      const localEmail = await JSON.parse(window.localStorage.getItem('user'));
       if (localEmail !== null) {
        setUserEmail(localEmail.email);
      } else {
        alert("userEmail not set");
      }}

    const getName = async() => {
      setLoading(true);
      const localName = await JSON.parse(window.localStorage.getItem('user'));
       if (localName !== null) {
        setUserName(localName.username);
      } else {
        alert("userName not set");
      }}

      const getBio = async() => {
        setLoading(true);
        const localBio = await JSON.parse(window.localStorage.getItem('user'));
         if (localBio !== null) {
          setUserBio(localBio.bio);
        } else {
          alert("userBio not set");
        }}

    const fetchAvatar = async() => {
      //SENDS userName AS A SEARCH PARAMETER
      const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/avatar?folderData=${userName}`)
      // const req = await fetch(`http://localhost:8080/api/cloudinary/avatar?folderData=${userName}`)
      const data = await req.json();
      (data.status === "ok" && data.results.total_count) &&
      await setAvatar(data.results.resources[0].secure_url)
    }
      getBio();
      getEmail();
      getName();
      fetchAvatar();
      setLoading(false);

  return
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
      {!loading ? 
      <>
      <NameAndBio
        nameProp={userName}
        emailProp={userEmail}
        bioProp={userBio}
      />
      <AvatarContainer>
        <Tooltiptext className="tooltip-text">
            Click to Change
        </Tooltiptext>
        {userAvatar}
        {avatarUpload}
      </AvatarContainer>
        </>
        : <h1>Loading...</h1>}
    </StyledContainer>
    </AnimatedPage>
  );
};

export default Account;

