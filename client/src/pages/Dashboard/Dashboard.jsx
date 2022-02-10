import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

import "../../App.css";
import "../Dashboard/Dashboard.css";


import ImageUpload from "../../components/ImageUpload/ImageUpload";
import UserGallery from "./UserGallery"



const Dashboard = () => {

  const [name, setName] = useState("");
  const [showUpload, setShowUpload ] = useState("false")

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
      } else {

        populateName();
      }
    } else {
      //REPLACE WITH CONDITIONAL RENDERING ON NAV COMPONENT
      window.location.href = "/login";
    }
  }, []);

  async function populateName() {
    const req = await fetch("http://localhost:8080/api/login", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    // console.log(data);
    if (data.status === "ok") {
      setName(data.name);
    } else {
      alert(data.error);
    }
  }

  // console.log(showUpload);
  return (

  <div className="container">

    <div className="row">
      <div className="col">
        <span className="name"> {name || "I don't know..."}</span>{" "}
          <h3>
            Uploads: 17 <br/>
            Comments: 34 <br/>
            Likes: 177 <br/>
          </h3>
      </div>

    <div className="col">
      <ImageUpload
        folderData={name}
      />
    </div>

    <div className="col">
      <UserGallery
      folderDataUser={name}
      />
    </div>
    </div>
  </div>
     
  );
};

export default Dashboard;
