
import { useState, useEffect, Profiler } from "react";
import "./UserGallery.css"

function Tool(tool) {
  return <div className="tool" >{tool.icon}</div>
  //DELETE / EDIT / COMMENT BUTTONS HERE
}

const UserGallery = ({ gallery }) => {

return (

<div className="gallery">
{gallery.map((images) => (
  <div className="images" key={images.id}>
    <div className="name">
      {images.name}
    </div>
      <img  className="image" src={images.image} alt={images.desc} />
      <div className="tools">
        <Tool className="tool" icon="Edit" alt="Edit"/>
        <Tool className="tool" icon="Comment" alt="Comment"/>
        <Tool className="tool" icon="Del" alt="Delete"/>
      </div>
  </div>

))}
</div>

)}

export default UserGallery