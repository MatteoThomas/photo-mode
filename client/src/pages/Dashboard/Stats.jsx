import React from "react";
import {Container} from "react-bootstrap"
import avatar from "../Account/avatar.jpg";
import "../../App.css";
import "./Stats.css"

const Stats = ( props ) => {
    //DESTRUCTURE PROPS
  const {name = "", count = ""} =  props

  return (
    <Container className="stats-container">
         <div className="rowLeft">
          {name || "I don't know..."}
         <img className="avatar"src={avatar} alt="avatar" />
        </div>
        <div className="rowRight">
          
            Uploads: {count} <br/>
            Comments:  <br/>
            Likes:  <br/>
         
        </div>
    </Container>

);}

export default Stats