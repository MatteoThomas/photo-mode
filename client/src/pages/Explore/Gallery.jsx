import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components"

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [date, setDate] = useState([]);

  //GET IMAGES ON RENDER
  useEffect(() => {
    async function populateUserGallery() {
      const req = await fetch("http://localhost:8080/api/gallery");
      const data = await req.json();
      if (data.status === "ok") {
        const count = data.results.total_count;
        const resources = data.results.resources;
        console.log(resources)
        const images = resources.map((resource) => {
          return {
            id: resource.asset_id,
            title: resource.public_id,
            image: resource.secure_url,
            name: resource.public_id,
            folder: resource.folder,
            date: resource.uploaded_at,
            count: count,
          };
        });
       
        setDate(images[11].date)
        setGallery(images);
        return <div></div>;
      } else {
        alert(data.error);
      }
    }
    populateUserGallery();
  }, []);
  
  async function FormatDate() {
    let str = await date.toString()
    let splitDate = await str.split('T');
    const formattedDate = await splitDate[0] 
    return await formattedDate
  }
  FormatDate()
  
  const dateFin = FormatDate && <DateEl>{FormatDate}</DateEl>
console.log(FormatDate)
  return (

<StyledContainer>
{gallery.map((img) => (
  <ImageGallery key={img.name}>
    {/* <img src={img.url}/> */}
    <ImageContainer>
      <Image src={img.image} alt={img.desc}/>
      {img.folder} 
  
    </ImageContainer>


  </ImageGallery>
))}
</StyledContainer>

)}

export default Gallery
  
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  margin: 3rem 0 0 0;
  color: aliceblue;
`
  const DateEl = styled.div`
    
  `
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color:transparent;
  transition: all .4s;
  &:hover {
  color: aliceblue;
  }
`
const ImageGallery = styled.div`
  
`
const Image = styled.img`
  margin: 0 1rem 1rem 0;
  width: 200px;
  transition: all .4s;
`