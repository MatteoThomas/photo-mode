import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { editBio } from "../../../slices/auth";

import { StyledButton } from "../../../components/Button/Button.style";
import { NameBioWrapper, StyledCol, Bio, Input } from "./NameAndBio.style";

const NameAndBio = () => {
  const [bio, setBio] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [showBioInput, setShowBioInput] = useState(false);

  const [loading, setLoading] = useState(false);

  //GETTING DATA FROM REDUX STORE
  const bioData = useSelector((state) => state.auth.user.bio);
  const nameData = useSelector((state) => state.auth.user.username);

  const dispatch = useDispatch();

  async function updateBio(event) {
    event.preventDefault(event);
    dispatch(editBio(tempBio));
  }
  // const req = await fetch("http://localhost:8080/api/auth/bio", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-access-token": localStorage.getItem("token"),
  //   },
  //   body: JSON.stringify({
  //     bio: tempBio,
  //   }),
  // });

  //   const data = await req.json();
  //   if (data.status === "ok") {
  //     setBio(tempBio);
  //     setTempBio("");
  //   } else {
  //     alert(data.error);
  //   }
  // }

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
          <StyledButton buttonLabel="Submit" className="Btn" type="submit" />

          <Bio>{bioData}</Bio>
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
