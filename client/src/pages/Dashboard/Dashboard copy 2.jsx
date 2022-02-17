import React, { useEffect, useState } from "react";
import {Col} from "react-bootstrap"

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
    //REDIRECTS IF NOT LOGGED IN
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
      } else {

      }
    } else {
      //REPLACE WITH CONDITIONAL RENDERING ON NAV COMPONENT
      window.location.href = "/login";
    }
    populateGallery();
    populateName();
  }, []);
  
  
  //GETS USER NAME FROM MONGODB
  async function populateName() {
    const req = await fetch("http://localhost:8080/api/login", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setUserName(data);
    } else {
      alert(data.error);
    }
  }
  //POPULATES USER GALLERY
  const folder = userName.name
  async function populateGallery() {

    const req = await fetch(`http://localhost:8080/api/usergallery?folderData=${folder}`, {
    });
    
    
    const data = await req.json();
    if (data.status === "ok") {
      const countData = data.results.total_count;
      // console.log(countData)
      const resources = data.results.resources;
      const images = resources.map((resource) => {
        
        
      return {
        id: resource.asset_id,
        title: resource.public_id,
        image: resource.secure_url,
        name: resource.public_id,

    };
  });
      setUserGallery(images);
      setCount(countData);

    return <div> </div>;
  } else {
    alert(data.error);
  }
}

populateGallery();
  return (

  <div className="dashboard">
    <Col>
      <Stats 
        name={userName.name}
        count={count}
      />
    </Col>
    <div className="col">
        <ImageUpload
          folderData={userName}
        />
    </div>
    <div className="col">
        <UserGallery
          gallery={userGallery}
        />
    </div>
  </div>

     );
};

export default Dashboard;
