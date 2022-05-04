import React, { useEffect, useState } from 'react'
import { Img, ModalWrapper, ModalInfoContainer, ModalInfo, AvatarImg, NoAvatar} from "./ImageModal.style"

function ImageModal({ singleImage, imageName, singleImageUser, setShowModal}) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {

    async function fetchAvatar() {
        //SENDS singleImageUser AS A SEARCH PARAMETER
        // const req = await fetch(`https://photo-mode.herokuapp.com/api/cloudinary/avatar?folderData=${singleImageUser}`)
        const req = await fetch(`http://localhost:8080/api/cloudinary/avatar?folderData=${singleImageUser}`)
        const data = await req.json();
        if (data.status === "ok" && data.results.total_count) {
          await setAvatar(data.results.resources[0].url)
        } else {
          return((data.status))
        }}
            fetchAvatar()
      }, [singleImageUser]);

    return (
          <ModalWrapper>
            <ModalInfoContainer>
             {avatar ? <AvatarImg src={avatar} alt="profile picture"/> : <NoAvatar/>}
                <ModalInfo>
                  {singleImageUser} <br/> 
                  <span>{imageName}</span>
                </ModalInfo>
          </ModalInfoContainer>
              <Img onClick={(e)=>setShowModal(prev => !prev)} src={singleImage} alt={""}/>
          </ModalWrapper>
      )
  }

export default ImageModal