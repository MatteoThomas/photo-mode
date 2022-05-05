import React, { useEffect, useState } from 'react'
import { Img, ModalWrapper, ModalInfoContainer, ModalInfo, AvatarImg, NoAvatar} from "./ImageModal.style"
import API from "../../../RequestMethods"

function ImageModal({ singleImage, imageName, singleImageUser, setShowModal}) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {

    async function fetchAvatar() {
        //SENDS singleImageUser AS A SEARCH PARAMETER
       API.get(`/api/cloudinary/avatar?folderData=${singleImageUser}`)
        .then(res => {
          const userAvatar = res.data.results.resources[0].secure_url
         setAvatar(userAvatar)
        }).catch(err => {
          console.log(err)
        })}
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