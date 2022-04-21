import React, {useState} from 'react'
import { Img, ModalWrapper, ModalInfoContainer, ModalInfo, AvatarImg} from "./ImageModal.style"

function ImageModal({singleImage, singleImageUser, setShowModal}) {
  const [avatar, setAvatar] = useState([]);
  
  // useEffect(() => {
    
  //   const fetchAvatar = async() => {
  //     //SENDS userName AS A SEARCH PARAMETER
  //     const req = await fetch(`http://localhost:8080/api/cloudinary/avatar?folderData=${singleImageUser}`)
  //     // const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/avatar?folderData=${singleImageUser}`)
  //     .then((response) => {
        
  //       (response.status === "ok"  &&
  //       setAvatar(response.resources[0].secure_url)
  //       ) ||
  //       console.log(response.data);
  //       return response.data; 
  //     })
    
      
  //   }
  //   fetchAvatar()
  // }, [singleImageUser]);

  return (
         
        <ModalWrapper>
          <ModalInfoContainer>
             <AvatarImg src={singleImage} alt="avatar"/>
              <ModalInfo>User: {singleImageUser} <br/> Image Name: xxx <br/>Upload Date: xxx</ModalInfo>
         </ModalInfoContainer>
            <Img onClick={(e)=>setShowModal(prev => !prev)} src={singleImage}/>
       
        </ModalWrapper>

    )

}

export default ImageModal