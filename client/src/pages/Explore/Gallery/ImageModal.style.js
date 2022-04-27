import styled from "styled-components";
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 416px) {
      ${props}
    }
  `;
};

export const Img = styled.img`
  width: clamp(300px, 100%, 800px);
  ${mobile({ width: "95vw" })}
`;

export const ModalWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalInfoContainer = styled.div`
  display: flex;
  width: 400px;
  height: fit-content;
  margin: 0 0 1rem 0;
  width: 100%;
  ${mobile({ width: "95vw" })}
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & span {
    font-size: 3rem;
  }
`;
export const AvatarImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin: 0 10px 0 0;
  border-radius: 50%;
  border: 1px transparent solid;
`;

export const NoAvatar = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 10px 0 0;
  border-radius: 50%;
  border: 1px lightgray solid;
`;
