import React, { useEffect, useState } from "react";
import Stats from "./Stats/Stats";
import ImageUpload from "./ImageUpload/ImageUpload";
import UserGallery from "./UserGallery/UserGallery"

import AnimatedPage from "../../animation/AnimatedPage";

import { StyledContainer } from "../../components/Container/Container.style";
import { Title, DashboardGrid, StatsStyledCol, ImageStyledCol, GalleryStyledCol } from "./Dashboard.style";

import API from "../../RequestMethods"

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

    async function getGallery() {
      //SENDS userName AS A SEARCH PARAMETER TO CLOUDINARY
     API.get(`/api/cloudinary/usergallery?folderData=${userName}`, )
     .then(res => {
        //NUMBER OF UPLOADS BY USER
        const countData = res.data.results.resources.length;
        //MAP IMAGE DATA
        // console.log(res.data.results.resources)
        const resources = res.data.results.resources;
        let images = resources.map((resource) => {
          return {
            id: resource.asset_id,
            //REMOVES THE FOLDER PREFIX AND THE FILE EXTENSION THEN
            //RETURNS THE FILENAME THIS IS SO THE
            //FILENAME ALONE IS DISPLAYED
            title: resource.public_id.split(/(?:\/|\.)+/)[1],
            image: resource.secure_url,
            username: resource.folderName,
          };
        })
        setUserGallery(images);
        setCount(countData)
      })
    }
      getGallery();
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
    <DashboardGrid className="dashboard">
      <StatsStyledCol className="stats">
        <Stats 
          name={userName}
          count={count}
        />
      </StatsStyledCol>
      <ImageStyledCol className="upload">
          <ImageUpload
            folderName={userName}
          />
      </ImageStyledCol>
        <GalleryStyledCol className="gallery">
          <UserGallery
            userGallery={userGallery}
            userName={userName}
            />
          </GalleryStyledCol>
          </DashboardGrid>
      </StyledContainer>
  </AnimatedPage>
     );
};

export default Dashboard;
