
import { useState, useEffect } from "react";
import "./Gallery.css"

function Tool(tool) {
  return <div className="tool" >{tool.icon}</div>
  //DELETE / EDIT / COMMENT BUTTONS HERE
}

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [count, setCount] = useState();

  //GET IMAGES ON RENDER
  useEffect(() => {
    async function populateUserGallery() {
      const req = await fetch("http://localhost:8080/api/gallery");
      const data = await req.json();
      if (data.status === "ok") {
        const count = data.results.total_count;
        const resources = data.results.resources;
        const images = resources.map((resource) => {

        // console.log("images returned" , count)

          return {
            id: resource.asset_id,
            title: resource.public_id,
            image: resource.secure_url,
            name: resource.public_id,
            count: count,
          };
        });
        setCount(count);
        setGallery(images);
        return <div></div>;
      } else {
        alert(data.error);
      }
    }
    populateUserGallery();
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