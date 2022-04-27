import React, { useEffect, useState } from "react";
import Stats from "./Stats/Stats";
import ImageUpload from "./ImageUpload/ImageUpload";
import UserGallery from "./UserGallery/UserGallery"
import { StyledContainer } from "../../components/Container/Container.style";
import { Title, StatsUpload, StyledCol } from "./Dashboard.style";
import AnimatedPage from "../../animation/AnimatedPage";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [userGallery, setUserGallery] = useState([]);
  const [count , setCount] = useState("");

  useEffect(() => {
    let isSubscribed = true;
    //GETS USER NAME FROM MONGODB

    const getName = async() => {
      const localName = await JSON.parse(window.localStorage.getItem('user'));
      if (localName !== null) {
        setUserName(localName.data.username);
      } else {
        window.location.href = "/login"
        alert("userName not set")
      }}

    async function fetchGallery() {
      //SENDS userName AS A SEARCH PARAMETER TO CLOUDINARY
      // const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/usergallery?folderData=${userName}`, )
        const req = await fetch(`http://localhost:8080/api/cloudinary/usergallery?folderData=${userName}`)
 
      const data = await req.json();
      
      if (data.status === "ok") {
        //NUMBER OF UPLOADS BY USER
        const countData = data.results.total_count;

        //IMAGE DATA
        const resources = data.results.resources;
        const images = resources.map((resource) => {
          return {
            id: resource.asset_id,
            //REMOVES THE FOLDER PREFIX AND THE FILE EXTENSION THEN
            //RETURNS THE FILENAME THIS IS SO THE
            //FILENAME ALONE IS DISPLAYED
            title: resource.public_id.split(/(?:\/|\.)+/)[1],
            image: resource.secure_url,
            username: resource.folderName,
            };
    });
    if (isSubscribed) {
        setUserGallery(images);
        setCount(countData)
    } else {
      
      window.location.href = "/login"
    }

    }}
      fetchGallery();
      getName()
    return() => isSubscribed = false
      },[userName]);

  //VARIANT OBJECT FOR ANIMATION  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <AnimatedPage>
  <StyledContainer     
    variants={container}
    initial="hidden"
    animate="show"
    transition={{ delay: .3}}
  >
    <Title>
      <h1>Dashboard</h1>
    </Title>
    <StatsUpload>
    <StyledCol>
      <Stats 
        name={userName}
        count={count}
      />
    </StyledCol>
    <StyledCol>
        <ImageUpload
          folderName={userName}
        />
    </StyledCol>
    </StatsUpload>
    <StyledCol>
        <UserGallery
          userGallery={userGallery}
          userName={userName}
        />
    </StyledCol>
  </StyledContainer>
  </AnimatedPage>
     );
};

export default Dashboard;
