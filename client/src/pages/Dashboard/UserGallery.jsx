
import { useState, useEffect } from "react";
import "./UserGallery.css"

function Tool(tool) {
  return <div className="tool" >{tool.icon}</div>
  //DELETE / EDIT / COMMENT BUTTONS HERE
}

const UserGallery = ({ folderDataUser }) => {
    const [userGallery, setUserGallery] = useState([]);
    const [imageCount, setImageCount] = useState("");

    //GET IMAGES ON RENDER
    useEffect(() => {
      async function populateGallery() {
        const req = await fetch("http://localhost:8080/api/usergallery");
        const data = await req.json();
        // console.log(data)
        if (data.status === "ok") {
          const resources = data.results;
          const count = data.results.total_count;
          const images = resources.resources.map((resource) => {
          
            return {
              id: resource.asset_id,
              title: resource.public_id,
              image: resource.secure_url,
              name: resource.public_id,
    
            };
          });
          setImageCount(count);
          setUserGallery(images);
          // console.log(images.public_id);
          return <div></div>;
        } else {
          alert(data.error);
        }
      }
      populateGallery();
    }, []);

console.log(userGallery)
return (
<>

          
  <div>Total images: {imageCount}</div>
<div className="gallery">
{userGallery.map((images) => (

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
</>

)}

export default UserGallery