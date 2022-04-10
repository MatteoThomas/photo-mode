import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: clamp(300px,100%, 1000px);
`
const ModalWrapper = styled.div`
  /* width: clamp(350px, 100vw, 1000px); */
  color: #000;

  margin: 0 auto; 
  position: relative;
  z-index: 10;
`;


function ImageModal({singleImage, setShowModal}) {

  return (
         
        <ModalWrapper >
            <Img onClick={(e)=>setShowModal(prev => !prev)} src={singleImage}/>
        </ModalWrapper>

    )

}

export default ImageModal