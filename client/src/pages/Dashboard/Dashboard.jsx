import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap"

import jwt from "jsonwebtoken";

import "../../App.css";
import "../Dashboard/Dashboard.css";

import Stats from "./Stats";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import UserGallery from "./UserGallery"



const Dashboard = () => {
  const [userName, setUserName] = useState([]);
  const [userGallery, setUserGallery] = useState([]);
  const [ count , setCount] = useState("");
  // console.log(userGallery)

  useEffect(() => {
    
    const fetchName = async() => {
      const req = await fetch("http://localhost:8080/api/login", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await req.json();
      if (data.status === "ok") {
        setUserName(data.name);
        console.log(userName)
      } else {
        alert(data.error);
      }
    }
    
    let isSubscribed = true;
    const fetchGallery = async() => {
      
      const req = await fetch(`http://localhost:8080/api/usergallery?folderData=${userName}`, {
      });
      
      const data = await req.json();
      if (data.status === "ok") {
        const countData = data.results.total_count;
        const resources = data.results.resources;
        const images = resources.map((resource) => {
          
        return {
          id: resource.asset_id,
          title: resource.public_id,
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

  return (

  <Container className="dashboard-container">
    <div className="col">
      <Stats 
        name={userName}
        count={count}
      />
    </div>
    <div className="col">
        <ImageUpload
          folderName={userName}
 
        />
    </div>
    <div className="col">
        <UserGallery
          gallery={userGallery}
        />
    </div>
  </Container>

     );
};

export default Dashboard;
