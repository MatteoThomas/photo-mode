
import { useState, useEffect } from "react";
import "./Gallery.css"

function Tool(tool) {
  return <div className="tool" >{tool.icon}</div>
  //DELETE / EDIT / COMMENT BUTTONS HERE
}

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
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
        console.log(images.public_id);
        return <div>!</div>;
      } else {
        alert(data.error);
      }
    }
    populateGallery();
  }, []);
  
return (

<div className="gallery">
{gallery.map((img) => (
  <div className="img" key={img.id}>
    {/* <img src={img.url}/> */}
      <img  className="image" src={img.image} alt={img.desc} />
      <div className="tools">
        <Tool className="tool" icon="Edit" alt="Edit"/>
        <Tool className="tool" icon="Comment" alt="Comment"/>
        <Tool className="tool" icon="Del" alt="Delete"/>
      </div>
  </div>

))}
</div>


)}

export default Gallery