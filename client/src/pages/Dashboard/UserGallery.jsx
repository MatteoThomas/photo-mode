import React from "react";
import styled from "styled-components";

import deleteIcon  from "./icons/delete-icon.png"
import editIcon  from "./icons/edit-icon.png";
import commentIcon  from "./icons/comment-icon.png"

const UserGallery = ({ gallery }) => {
  function CardIcons() {
    const icons = [deleteIcon, editIcon, commentIcon];
      return (
        <div>
          {icons.map((iconMap) => (
            <Icon src={iconMap} key={iconMap}/>
          ))}
        </div>
      )}
      
  function ImageCard() {
    return (
      <>  
        {gallery.map((images) => (
          <div key={images.name}>
            <Image src={images.image} alt={images.desc} />
            <Name>{images.name}</Name>
            <CardIcons/>
          </div>
        ))}
      </>   
    )}
//RENDERS THE USERS IMAGE UPLOADS IF THERE ARE MORE THAN 0 UPLOADS
  const galleryContainer = 
    gallery.length > 0  ?  
   <ImageCard /> : 
    <Text>Nothing uploaded yet</Text>

  return (
    <GalleryContainer>
      {galleryContainer}
      </GalleryContainer>

)}

export default UserGallery

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: clamp(350px, 90%, 1000px);
  margin: 3rem 0 0 0;
`
const Text = styled.div`
  font-size: 3rem;
  color: aliceblue;
`

const Icon = styled.img`
  width: 20px;
  margin: 1rem;
  filter: invert(.7);
`

const Image = styled.img`
  margin: 0 3rem;
  width: 150px;
`

const Name = styled.h2`
  font-size: 1rem;
  margin: 1rem 0;
  width: 175px;
  color: antiquewhite;
  background-color: #464646;
  word-break: break-all;
`