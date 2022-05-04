import React, { useEffect, useState } from "react";
import NameAndBio from "./NameAndBio/NameAndBio";
import {  Title } from "./Account.style";
import { StyledContainer } from "../../components/Container/Container.style";
import AnimatedPage from "../../animation/AnimatedPage";


const Account = () => {
  const [avatar, setAvatar] = useState("");
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userBio, setUserBio] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    
    const getEmail = async() => {
      setLoading(true);
      const localEmail = await JSON.parse(window.localStorage.getItem('user'));
       if (localEmail !== null) {
        setUserEmail(localEmail.data.email);
      } else {
        window.location.href = "/login"
      }}

    const getName = async() => {
      setLoading(true);
      const localName = await JSON.parse(window.localStorage.getItem('user'));
       if (localName !== null) {
        setUserName(localName.data.username);
      } else {
        window.location.href = "/login"
      }}

      const getBio = async() => {
        setLoading(true);
        const localBio = await JSON.parse(window.localStorage.getItem('user'));
         if (localBio !== null) {
          setUserBio(localBio.data.bio);
        
        } else {
          window.location.href = "/login"
        }}

    async function fetchAvatar() {
      //SENDS userName AS A SEARCH PARAMETER
      // const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/avatar?folderData=${userName}`)
      const req = await fetch(`http://localhost:8080/api/cloudinary/avatar?folderData=${userName}`)
      const data = await req.json();
      if (data.status === "ok" && data.results.total_count) {
        await setAvatar(data.results.resources[0].url)
      } else {

      }}
          fetchAvatar()
          getBio();
          getEmail();
          getName();
          return  (
        setLoading(false)
     
      ) 
    }, [ loading, userName, userEmail, userBio]);

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

