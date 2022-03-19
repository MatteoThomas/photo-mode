import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AvatarUpload from "./AvatarUpload";
import { motion } from 'framer-motion/dist/framer-motion'
import { StyledButton } from "../../components/Button/Button.style"

const Account = () => {
  const [avatar, setAvatar] = useState([]);
  const [showAvatarGallery, setShowAvatarGallery] = useState(false)
  const [bio, setBio] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [showBioInput, setShowBioInput] = useState(false)
  const [buttonText, setButtonText] = useState("Edit Bio")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    let isSubscribed = true;
//GETS USER NAME FROM MONGODB
  const fetchName = async() => {
    const req = await fetch("http://localhost:8080/api/login", {
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
  }}

  //FETCH USER AVATAR FROM CLOUDINARY
  const fetchAvatar = async() => {
    //SENDS userName AS A SEARCH PARAMETER
    const req = await fetch(`http://localhost:8080/api/avatar?folderData=${userName}`)
    const data = await req.json();
    (data.status === "ok" && data.results.total_count) ?
    setAvatar(data.results.resources[0].secure_url)
    :
    console.log("No avatar selected")
  }

  const populateBio = async() =>  {
    const req = await fetch("http://localhost:8080/api/bio", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setBio(data.bio);
    } else {
      alert(data.error);
    }
  }
  if (isSubscribed) {
    populateBio();
    fetchName();
    fetchAvatar();

} else {
  alert("Error");
}
  return() => isSubscribed = false
}, [userName]);

async function updateBio(event) {
  event.preventDefault();
  const req = await fetch("http://localhost:8080/api/bio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({
      bio: tempBio,
    }),
  });
  
  const data = await req.json();
  if (data.status === "ok") {
    setBio(tempBio);
    setTempBio("");
  } else {
    alert(data.error);
  }
}
  const logOut = () => {
    localStorage.removeItem("token");
    console.log("it worked logout btn");
    window.location.href = "/login";
  };

  //CHECKS IF showBio STATE IS FALSE
  //FALSE SETS showBio TO TRUE AND buttonText STATE to "Update Bio"
  //TRUE SETS showBio TO FALSE AND buttonText STATE to "Edit Bio"
  function handleBioClick() {
    if (!showBioInput) {
      setShowBioInput(true);
      setButtonText("Update Bio");
    } else {
      setShowBioInput(false);
      setButtonText("Edit Bio");
    }
  }

  //RENDERS BIO INPUT FIELD WHEN BUTTON CLICKED AND showBio STATE IS SET TO TRUE
  //INITIAL STATE IS FALSE SO BIO INPUT FIELD IS HIDDEN
  const bioInput = showBioInput &&
    <Input
      maxLength="80"
      type="text"
      placeholder=" Bio"
      onChange={(e) => setTempBio(e.target.value)}
    /> 
    
  function handleAvatarClick() {
      if (!showAvatarGallery) {
      setShowAvatarGallery(true)
      } else {
      setShowAvatarGallery(false)
      }
    }

  //VARIABLE THAT CHECK CONDITION OF showAvatarGallery THEN RENDERS AvatarUpload COMPONENT or DIV
  const userAvatar = avatar.length > 0  ? <>
    <AvatarImg src={avatar} alt="avatar" onClick={() => handleAvatarClick()} />
    <div>Click to change</div> </> 
    : <div onClick={() => handleAvatarClick()}>No avatar selected, click here to add</div> 

  const avatarUpload = showAvatarGallery && <AvatarUpload folderName={userName}/> 
  
  //VARIANT OBJECT FOR ANIMATION  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <StyledContainer
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delay: .3}}
    >
      <Title>
        <h1>Account</h1>
      </Title>
      <NameBioWrapper>
      <StyledCol >
        <h1>{userName}</h1>
        </StyledCol>
      <StyledCol >
        <form onSubmit={updateBio}>
          {bioInput}

          <StyledButton 
            buttonLabel="Edit Bio"
            className="Btn" 
            type="submit" 
            onClick={() => handleBioClick()}>
              {buttonText}
          </StyledButton>  

          <Bio>{bio}</Bio>
        </form>
      </StyledCol>
      <StyledCol>

        <StyledButton 
          buttonLabel="Logout"
          type="button" 
          onClick={logOut}>
            Logout
        </StyledButton>
        
      </StyledCol >
      </NameBioWrapper>

        <AvatarContainer>
          {userAvatar}
          {avatarUpload}
        </AvatarContainer>

    </StyledContainer>
  );
};

export default Account;

const StyledContainer = styled(motion.div)`
  color: aliceblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 10vw;
  & h1 {
    width: 100%;
  }
`
const Title = styled.div`
  width: 100%;
  border-bottom: 1px aliceblue solid;
  margin: 0 0 2rem 0;
`

const NameBioWrapper = styled.div`
  background-color:gray;
  width:clamp(350px, 30%, 600px);
  height:fit-content;
`

// const StyledButton = styled.button`
//   border: 1px transparent solid;
//   border-radius: 4px;
//   transition: 0.4s;
//   height: 42px;
//   &:hover {
//     transition: all .4s;
//     color: aliceblue;
//     background-color: transparent;
//     border: 1px grey solid;
//   }
// `

const StyledCol = styled.div`
  word-wrap: break-word;
  width: 300px;
  border: 0.5px rgb(97, 97, 97) solid;
  border-radius: 10px;
  margin: 0.5rem;
  padding: 0.5rem;
`

const Bio = styled.div`
  padding: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  overflow-wrap: break-word;
`

const Input = styled.input`
  width: 100%;
`

const AvatarImg = styled.img`
  width: clamp(200px, 100%, 350px);
`

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem auto 1rem;
`

