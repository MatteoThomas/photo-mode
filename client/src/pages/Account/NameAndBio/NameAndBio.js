import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../slices/auth";

import { StyledButton } from "../../../components/Button/Button.style";
import { NameBioWrapper, StyledCol, Bio, Input } from "./NameAndBio.style";

const NameAndBio = () => {
  const [bio, setBio] = useState("");
  const [tempBio, setTempBio] = useState("");
  const [showBioInput, setShowBioInput] = useState(false);
  const [buttonText, setButtonText] = useState("Edit Bio");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let isSubscribed = true;

    // GETS USER NAME FROM MONGODB
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

    const populateBio = async () => {
      const req = await fetch("http://localhost:8080/api/user/bio", {
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
    };
    if (isSubscribed) {
      populateBio();
      fetchName();
    } else {
      alert("Error");
    }
    return () => (isSubscribed = false);
  }, [userName]);

  async function updateBio(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:8080/api/user/bio", {
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
  const bioInput = showBioInput && (
    <Input
      maxLength="80"
      type="text"
      placeholder=" Bio"
      onChange={(e) => setTempBio(e.target.value)}
    />
  );

  return (
    <NameBioWrapper>
      <StyledCol>
        <h1>{userName}</h1>
      </StyledCol>

      <StyledCol>
        <form onSubmit={updateBio}>
          {bioInput}

          <StyledButton
            buttonLabel="Edit Bio"
            className="Btn"
            type="submit"
            onClick={() => handleBioClick()}
          >
            {buttonText}
          </StyledButton>

          <Bio>{bio}</Bio>
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
