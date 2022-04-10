import React, {useRef} from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  
`
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const Back = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ImageModal({singleImage, showModal, setShowModal}) {
// console.log(singleImage)
    const modalRef = useRef();

  return (
    <>        
    {showModal ? 
    <Back ref={modalRef}>
        <ModalWrapper   >
            <Img src={singleImage}/>
        </ModalWrapper>
        </Back>
        : null}
    </>
    )

}

export default ImageModal