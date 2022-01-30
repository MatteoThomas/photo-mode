import React, { useState } from "react";
// import "./ImageUpload.css";


async function DeleteImage() {
    const req = await fetch("http://localhost:8080/api/delete");
    const data = await req.json();
    if (data.status === "ok") {
    console.log("Deleted");

      } else {
      alert(data.error);
    }
  

};

const Delete = () => {



   return (
    
    <div className="wrapper">

        
        <button onClick={DeleteImage}>Del</button>
      </div>

 
  )

}
export default Delete;