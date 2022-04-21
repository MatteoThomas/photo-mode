import React, { useState, useEffect } from "react";
import axios from "axios";
import AvatarUpload from "../Avatar/AvatarUpload";
import { StyledSubmitButton } from "./NameAndBio.style";
import {
  NameBioWrapper,
  StyledCol,
  Bio,
  Input,
  AvatarImg,
  NameAndAvatar,
  AvatarContainer,
} from "./NameAndBio.style";

const NameAndBio = (props) => {
  const { nameProp, emailProp, bioProp, avatarProp } = props;
  const [tempBio, setTempBio] = useState(null);
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [bioData, setBioData] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [showAvatarGallery, setShowAvatarGallery] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    setNameData(nameProp);
    setEmailData(emailProp);
    setBioData(bioProp);
    setAvatar(avatarProp);

    // if (AvatarImg) {
    //   setAvatar(AvatarImg);
    // }

    return () => {};
  }, [nameProp, emailProp, bioProp, avatarProp]);

  // const reloadSrc = (e) => {
  //   if (fallback) {
  //     // e.target.src = "../";
  //     console.log("fallback");
  //   } else {
  //     e.target.src = avatar;
  //     setFallback(true);
  //   }
  // };

  async function updateBio(e) {
    editLocalUser();
    e.preventDefault();
    return axios
      .post("http://localhost:8080/api/auth/editBio", {
        email: emailData,
        bio: tempBio,
      })
      .then((response) => {
        console.log(response);
        editLocalUser();
        setBioData(response.data.bio);
        e.target.reset();
        return response.data.bio;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // UPDATES THE LOCAL STORAGE OBJECT "user" WITH tempBio
  // WHEN SUBMIT BUTTON CLICKED
  function editLocalUser() {
    const currentUserData = JSON.parse(window.localStorage.getItem("user"));
    console.log(currentUserData.data.bio);
    currentUserData.data.bio = tempBio;
    const updatedLocalBio = JSON.stringify(currentUserData);
    localStorage.setItem("user", updatedLocalBio);
  }

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const showAvatarUpload = () => {
    setShowAvatarGallery(!showAvatarGallery);
  };

  // VARIABLE CHECKS CONDITION OF showAvatarGallery THEN
  // RENDERS AvatarUpload COMPONENT OR DIV
  const avatarElement =
    avatar.length > 0 ? (
      <>
        <AvatarImg
          src={avatar}
          alt="avatar"
          onClick={showAvatarUpload}
          // onError={reloadSrc}
        />
      </>
    ) : (
      <div onClick={showAvatarUpload}>Upload Avatar</div>
    );

  const avatarUploadElement = showAvatarGallery && (
    <AvatarUpload folderName={nameData} />
  );

  return (
    <NameBioWrapper>
      <NameAndAvatar>
        <h1>{nameData}</h1>
        {avatarElement}
      </NameAndAvatar>

      <AvatarContainer>{avatarUploadElement}</AvatarContainer>

      <StyledCol>
        <form onSubmit={updateBio}>
          <Input
            maxLength="80"
            type="text"
            placeholder=" Edit Bio"
            onChange={(e) => setTempBio(e.target.value)}
          />
          {tempBio ? (
            <StyledSubmitButton
              buttonLabel="Submit"
              className="Btn"
              type="submit"
            >
              Submit
            </StyledSubmitButton>
          ) : null}
          <Bio>{tempBio ? tempBio : bioData}</Bio>
        </form>
      </StyledCol>

      <StyledCol>
        <StyledSubmitButton buttonLabel="Logout" type="button" onClick={logOut}>
          Logout
        </StyledSubmitButton>
      </StyledCol>
    </NameBioWrapper>
  );
};

export default NameAndBio;
