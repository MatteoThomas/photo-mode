import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { editBio } from "../../../slices/bioSlice";

import { StyledButton } from "../../../components/Button/Button.style";
import { NameBioWrapper, StyledCol, Bio, Input } from "./NameAndBio.style";

const NameAndBio = () => {
  const [bio, setBio] = useState("");
  const [newBio, setNewBio] = useState("");

  const nameData = useSelector((state) => state.auth.user.username);
  const emailData = useSelector((state) => state.auth.user.email);
  const bioData = useSelector((state) => state.auth.user.bio);
  const dispatch = useDispatch();

  async function updateBio(event) {
    event.preventDefault(event);
    setNewBio(bio);
    dispatch(editBio({ bio, nameData, emailData }));
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
            onChange={(e) => setBio(e.target.value)}
          />
          <StyledButton buttonLabel="Submit" className="Btn" type="submit" />

          <Bio>{newBio ? newBio : bioData}</Bio>
        </form>
      </StyledCol>

      <StyledCol>
        <StyledButton buttonLabel="Logout" type="button" onClick={logOut}>
          Logout
        </StyledButton>
      </StyledCol>
    </NameBioWrapper>
  );
};

export default NameAndBio;
