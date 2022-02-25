import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap"
import styled from "styled-components";
import { fetchAvatars } from "../../UserService";

const Avatar = () => {
// const [ avatar, setAvatar ] = useState([])
const [ avatarGallery, setAvatarGallery ] = useState([])

console.log(avatarGallery)

useEffect(() => {

    const fetchAvatarList = () => {
      fetchAvatars().then(response => {
      setAvatarGallery(response)
      })
    }
    fetchAvatarList()
      
},[]);

  return(
    <>
      <StyledContainer>
        Or try one of these
          <Gallery>
            {avatarGallery.map((img) => (
            <Image src={img.image} key={img.image} />
            ))}
          </Gallery>
      </StyledContainer>
    </>
  )}
    
export default Avatar
    
const StyledContainer = styled.div`
/* background-color: #093131; */
/* display: flex;
flex-direction: column; */
width: clamp(375px, 90%, 1000px);
`
const Image = styled.img`
  width: 100px;
  margin: 0 .5rem .5rem 0;

  `
const Gallery = styled.div`
/* background-color: aqua; */
  `