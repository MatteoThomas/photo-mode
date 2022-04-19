import React, { useState, useEffect } from "react";
import axios from "axios";

import { StyledSubmitButton } from "./NameAndBio.style";
import { NameBioWrapper, StyledCol, Bio, Input } from "./NameAndBio.style";

const NameAndBio = (props) => {
  const { nameProp, emailProp, bioProp } = props;
  const [tempBio, setTempBio] = useState(null);
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [bioData, setBioData] = useState("");

  useEffect(() => {
    setNameData(nameProp);
    setEmailData(emailProp);
    setBioData(bioProp);
    return () => {};
  }, [nameProp, emailProp, bioProp]);

  function updateBio(e) {
    e.preventDefault(e);
    return axios
      .post("https://photo-mode.herokuapp.com/api/auth/editBio", {
        // .post("http://localhost:8080/api/auth/editBio", {
        username: nameData,
        email: emailData,
        bio: tempBio,
      })
      .then((response) => {
        editLocalUser();
        setBioData(response.data.bio);
        e.target.reset();
        return response.data.bio;
      });
  }

  //UPDATES THE LOCAL STORAGE OBJECT "user" WITH tempBio
  function editLocalUser() {
    const currentUserData = localStorage.getItem("user");
    const json = JSON.parse(currentUserData);
    json.bio = tempBio;
    localStorage.setItem("user", JSON.stringify(json));
  }

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <NameBioWrapper>
      <StyledCol>
        <h1>{nameData}</h1>
      </StyledCol>

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
