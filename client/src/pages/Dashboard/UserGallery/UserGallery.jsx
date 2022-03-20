import React, {useState} from "react";
import deleteIcon  from "../../../components/icons/delete-icon.png"
import { GalleryContainer, CardContainer, CardHeader, Icon, Tooltiptext, Image, Name, DeleteEl, CardMotion } from "./UserGallery.style";

const UserGallery = ({ userGallery }) => {
  const [imgToDelete, setImgToDelete] = useState("");

  //VARIANT OBJECT FOR ANIMATION    
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  function handleClick( images ) {
    setImgToDelete(images.name)
    deleteImage()
  }

  async function deleteImage() {
    const req = await fetch(`http://localhost:8080/api/cloudinary/deleteImage?deleteImage=${imgToDelete}`, {
    });
    const data = await req.json();
    //REMOVES USER NAME FROM IMAGE NAME
    const imgToDeleteName = imgToDelete.split("/")[1]
    if (data.status === "ok") { 
      alert(`${imgToDeleteName} Deleted`)
    } else {
      alert(data.error);
    }
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

  //RENDERS THE USERS IMAGE UPLOADS IF userGallery.length IS GREATER THAN 0
  // const galleryContainer = userGallery.length > 0 && <ImageCard />

  return (
    <GalleryContainer>
      {/* {galleryContainer} */}
      {userGallery.length > 0 && <ImageCard />}
    </GalleryContainer>
)}

export default UserGallery
