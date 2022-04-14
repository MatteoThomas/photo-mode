import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { editBio } from "../../../slices/bioSlice";

import { StyledSubmitButton } from "./NameAndBio.style";
import { NameBioWrapper, StyledCol, Bio, Input } from "./NameAndBio.style";

const NameAndBio = () => {
  const [bio, setBio] = useState("");
  const [newBio, setNewBio] = useState(null);

  const nameData = useSelector((state) => state.auth.user.username);
  const emailData = useSelector((state) => state.auth.user.email);
  const bioData = useSelector((state) => state.auth.user.bio);
  const dispatch = useDispatch();

  async function updateBio(event) {
    event.preventDefault(event);
    setNewBio(bio);
    localStorage.setItem("bio", bio);
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
          {bio ? (
            <StyledSubmitButton
              buttonLabel="Submit"
              className="Btn"
              type="submit"
            >
              Submit
            </StyledSubmitButton>
          ) : null}
          <Bio>{newBio ? newBio : bioData}</Bio>
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
