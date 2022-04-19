import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: clamp(300px,100%, 1000px);
`
const ModalWrapper = styled.div`
  margin: 0 auto; 
  position: relative;
  z-index: 10;
`;

const ModalInfoContainer = styled.div`
  display: flex;

  background-color: gray;
  width: clamp(350px, 100%, 1000px);
  height: fit-content;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
`
const ModalInfo = styled.div`

`
export const AvatarImg = styled.img`
  width: 100px;
  height:100px;
  object-fit: cover;
  margin: 0 .5rem 0 0;
`;

function ImageModal({singleImage, singleImageUser, setShowModal}) {
  const [avatar, setAvatar] = useState([]);
  
  useEffect(() => {
    
    const fetchAvatar = async() => {
      //SENDS userName AS A SEARCH PARAMETER
      const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/avatar?folderData=${singleImageUser}`)
      const data = await req.json();
      (data.status === "ok" && data.results.total_count) ?
      setAvatar(data.results.resources[0].secure_url)
      :
      console.log("No avatar selected");
    }
    fetchAvatar()
  }, [singleImageUser]);

  return (
         
        <ModalWrapper>
          <ModalInfoContainer>
             <AvatarImg src={avatar} alt="avatar"/>
              <ModalInfo>User: {singleImageUser} <br/> Image Name: xxx <br/>Upload Date: xxx</ModalInfo>
         </ModalInfoContainer>
            <Img onClick={(e)=>setShowModal(prev => !prev)} src={singleImage}/>
       
        </ModalWrapper>

    )

}

export default ImageModal