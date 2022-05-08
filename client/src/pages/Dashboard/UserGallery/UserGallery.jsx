import React, { useState} from "react";
import deleteIcon  from "../../../components/icons/delete-icon.png"
import { GalleryContainer, CardContainer, CardHeader, Icon, Tooltiptext, Image, Name, DeleteEl, CardMotion } from "./UserGallery.style";
import API from "../../../RequestMethods"

const UserGallery = ({ userName, userGallery }) => {
  const [imgToDelete, setImgToDelete] = useState("");

  function handleClick( images ) {
    // userName IS A PROP FROM DASHBOARD AND 
    // images.title IS FROM THE CLICKED IMAGE
    setImgToDelete(userName + "/" + images.title)
    deleteImage()
  }
  
  async function deleteImage() {
    API.get(`/api/cloudinary/deleteImage?deleteImage=${imgToDelete}`, 
      ).then(res => {
        //REMOVES USER NAME FROM IMAGE NAME
        console.log(res)
        const imgToDeleteName = imgToDelete.split("/")[1]
        alert(`${imgToDeleteName} Deleted`)
      })
  }
  //VARIANT OBJECT FOR ANIMATION    
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  function ImageCard() {
    return (
      <>      
      {userGallery.map((images, i) => (
          <CardContainer 
            key={images.image}
          >  
            <CardMotion 
              variants={container}
              initial="hidden"
              animate="show"
              transition={{ delay: i * .13}}
            >
              <CardHeader>
              <Name>{images.title}</Name>
              <Icon>   
              <DeleteEl
                value={images.title}
                onClick={(() => handleClick(images))}
                src={deleteIcon}
                /> 
                <Tooltiptext className="tooltip-text">
                  Double Click to Delete
                </Tooltiptext>
              </Icon>
              </CardHeader>
              <Image 
                src={images.image}
                alt={images.desc}
                value={images.name} 
                loading="lazy"
              />
            </CardMotion>
          </CardContainer>
        ))}
        </>
    )}

  return (
    <GalleryContainer>
      {userGallery !==  0 && <ImageCard />}
    </GalleryContainer>
)}

export default UserGallery
