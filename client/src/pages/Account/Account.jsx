import React, { useEffect, useState } from "react";
import AvatarUpload from "./Avatar/AvatarUpload";
import NameAndBio from "./NameAndBio/NameAndBio";
import {  Title, Tooltiptext } from "./Account.style";
import { StyledContainer } from "../../components/Container/Container.style";
import AnimatedPage from "../../animation/AnimatedPage";
import { AvatarContainer } from "../../components/Container/Container.style";

const Account = () => {
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userBio, setUserBio] = useState("")
  const [loading, setLoading] = useState(false);
  const [showAvatarGallery, setShowAvatarGallery] = useState(false)

  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    
    const getEmail = async() => {
      const localEmail = await JSON.parse(window.localStorage.getItem('user'));
       if (localEmail !== null) {
        setUserEmail(localEmail.data.email);
        console.log(localEmail)
      } else {
        alert("userEmail not set");
      }}

    const getName = async() => {
      setLoading(true);
      const localName = await JSON.parse(window.localStorage.getItem('user'));
       if (localName !== null) {
         console.log("good")
        setUserName(localName.data.username);
      } else {
        console.log("bad")
      }}

      const getBio = async() => {
        setLoading(true);
        const localBio = await JSON.parse(window.localStorage.getItem('user'));
         if (localBio !== null) {
          setUserBio(localBio.data.bio);
        
        } else {
          alert("userBio not set");
        }}

    async function fetchAvatar() {
      //SENDS userName AS A SEARCH PARAMETER
      // const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/avatar?folderData=${userName}`)
      const req = await fetch(`http://localhost:8080/api/cloudinary/avatar?folderData=${userName}`)
   
      const data = await req.json();

      if (data.status === "ok" && data.results.total_count && isSubscribed) {
        await setAvatar(data.results.resources[0].url)
        await setShowAvatarGallery(false)
    
  } else {
    console.log("no avatar")
    setShowAvatarGallery(true)
  }
  }
      fetchAvatar()
      getBio();
      getEmail();
      getName();
      setLoading(false)
  return() => isSubscribed = false
}, [userName, userEmail, userBio]);



  const avatarUpload = showAvatarGallery && 
    <AvatarUpload folderName={userName}/> 

  return (
    <AnimatedPage>
    <StyledContainer>
 
      <Title>
        <h1>Account</h1>
      </Title>
      {!loading ? 
    
      <NameAndBio
        nameProp={userName}
        emailProp={userEmail}
        bioProp={userBio}
        avatarProp={avatar}
      />
  
        : <h1>Loading...</h1>}
    </StyledContainer>
    </AnimatedPage>
  );
};

export default Account;

