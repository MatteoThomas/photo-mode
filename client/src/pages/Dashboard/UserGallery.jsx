
import { useState, useEffect } from "react";
import "./UserGallery.css"

function Tool(tool) {
  return <div className="tool" >{tool.icon}</div>
  //DELETE / EDIT / COMMENT BUTTONS HERE
}

const Gallery = () => {
    const [userGallery, setUserGallery] = useState([]);
    const [search, setSearch] = useState([]);
    const [tempSearch, setTempSearch] = useState([]);
  //GET IMAGES ON RENDER
  useEffect(() => {
    async function populateGallery() {
      const req = await fetch("http://localhost:8080/api/gallery");
      const data = await req.json();
      if (data.status === "ok") {
        const resources = data.results.resources;
        const images = resources.map((resource) => {
        
          console.log(resources);
          return {
      
            id: resource.asset_id,
            title: resource.public_id,
            image: resource.secure_url,
            name: resource.public_id,
   
          };
        });
        setUserGallery(images);

    }}
    populateGallery();
  }, []);
  
  async function updateSearch(event) {
    event.preventDefault();
    const req = await fetch("http://localhost:8080/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        search: tempSearch,
      }),
    });
    const data = await req.json();
    if (data.status === "ok") {
      setSearch(tempSearch);
      setTempSearch("");
    } else {
      alert(data.error);
    }
  }


return (
  <div className="search">
        <form onSubmit={updateSearch}>
            <input
              maxLength="80"
              className="input"
              type="text"
              placeholder=" Search"
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
            />
            <button className="updateBioBtn" type="submit" value="Update quote">
              Search
            </button>
            </form>
          
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
</div>

)}

export default Gallery