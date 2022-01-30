import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import "../../App.css";
import "../Dashboard/Dashboard.css";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import Delete from "../../components/Image/Image"

const logOut = () => {
  localStorage.removeItem("token");
  console.log("it worked logout btn");
  
};

const Dashboard = () => {
  const [quote, setQuote] = useState("");
  const [tempQuote, setTempQuote] = useState("");
  const [name, setName] = useState("");
  const [gallery, setGallery] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
      } else {
        populateQuote();
        populateName();
      }
    } else {
      //REPLACE WITH CONDITIONAL RENDERING ON NAV COMPONENT
      window.location.href = "/login";
    }
  }, []);
  
  //GET IMAGES ON RENDER
  useEffect(() => {
    async function populateGallery() {
      const req = await fetch("http://localhost:8080/api/gallery");
      const data = await req.json();
      if (data.status === "ok") {
        const resources = data.results.resources;
        const images = resources.map((resource) => {
        
          return {
            id: resource.asset_id,
            title: resource.public_id,
            image: resource.secure_url,
   
          };
        });
        setGallery(images);
        return <div>!</div>;
      } else {
        alert(data.error);
      }
    }
    populateGallery();
  }, []);
  

  async function populateQuote() {
    const req = await fetch("http://localhost:8080/api/quote", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setQuote(data.quote);
    } else {
      alert(data.error);
    }
  }

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

  // console.log(images);

  //
  async function updateQuote(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:8080/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        quote: tempQuote,
      }),
    });

    const data = await req.json();
    if (data.status === "ok") {
      setQuote(tempQuote);
      setTempQuote("");
    } else {
      alert(data.error);
    }
  }
  return (
    <div className="container">
      <div className="header">
      <h1>
        Dashboard <br />
        <span className="name"> {name || "I don't know..."}</span>{" "}
      </h1>
      <div className="image"></div>
      <h2 className="quote"> {quote || "Do what now?"} </h2>
      <form onSubmit={updateQuote}>
        <input
          className="input"
          type="text"
          placeholder=" Bio"
          value={tempQuote}
          onChange={(e) => setTempQuote(e.target.value)}
        />
        <button className="updateBioBtn" type="submit" value="Update quote" >Update Bio</button>
      </form>
      <button type="button" className="logoutBtn" onClick={logOut}>
        Logout
      </button>
      </div>
      <ImageUpload />
      <div className="gallery">
        {gallery.map((images) => (
 <div key={images.id}>
        <h3 >{images.title}</h3>
              <img  className="image" src={images.image} alt={images.desc} />
              <Delete/>
              
    </div>
   
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
