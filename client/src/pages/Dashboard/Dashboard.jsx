import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stats from "./Stats";
import ImageUpload from "./ImageUpload/ImageUpload";
import UserGallery from "./UserGallery"
import { motion } from 'framer-motion/dist/framer-motion'

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [userGallery, setUserGallery] = useState([]);
  const [count , setCount] = useState("");

  useEffect(() => {
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
      }
    }
    
    let isSubscribed = true;
    const fetchGallery = async() => {
      //SENDS userName AS A SEARCH PARAMETER TO CLOUDINARY
      const req = await fetch(`http://localhost:8080/api/usergallery?folderData=${userName}`, {
      });
      const data = await req.json();
      if (data.status === "ok") {
        //NUMBER OF UPLOADS BY USER
        const countData = data.results.total_count;
        //IMAGE DATA
        const resources = data.results.resources;
        const images = resources.map((resource) => {
          
        return {
          id: resource.asset_id,
          //REMOVES THE FOLDER PREFIX AND THE FILE EXTENSION THEN RETURNS THE FILENAME
          //THIS IS SO THE FILENAME ALONE IS DISPLAYED
          title: resource.public_id.split(/(?:\/|\.)+/)[1],
          image: resource.secure_url,
          name: resource.public_id,
     
      };
    });
    if (isSubscribed) {
        setUserGallery(images);
        setCount(countData)}
    } else {
      alert(data.error);
    }
  }

  fetchGallery()
  fetchName() 
  return() => isSubscribed = false
},[userName]);

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

  return (

  <DashboardContainer     
    variants={container}
    initial="hidden"
    animate="show"
    transition={{ delay: .5}}
  >
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
    <StyledCol>
        <UserGallery
          userGallery={userGallery}
        />
    </StyledCol>
  </DashboardContainer>

     );
};

export default Dashboard;

const DashboardContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`

const StyledCol = styled.div`
  border: 0.5px rgb(97, 97, 97) solid;
  border-radius: 10px;
  margin: 0.5rem;
  padding: 0.5rem;
`