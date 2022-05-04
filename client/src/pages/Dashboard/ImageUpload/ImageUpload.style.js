import styled from "styled-components";
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 416px) {
      ${props}
    }
  `;
};

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px lightgray solid;
  margin: 0 0 2rem 0;
  position: sticky;
`;

export const ChooseButton = styled.div`
  width: 100px;
`;

export const UploadButton = styled.button`
  color: aliceblue;
  border: 1px transparent solid;
  border-radius: 10px;
  transition: all 0.4s;
  background-color: rgb(129, 174, 132);
  height: 42px;
  width: 95%;
  margin: 0 auto;
  &:hover {
    transition: all 0.4s;
    background-color: transparent;
    border: 1px rgb(129, 174, 132) solid;
    color: aliceblue;
  }
`;

export const Image = styled.img`
  margin: 1rem auto 0.5rem;
  width: 95%;
  padding: 0 0.5rem;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0.7rem;
  border-radius: 10px;
`;

export const Input = styled.input`
  border-radius: 10px;
  height: 1.6rem;
  margin: 1rem auto 0rem;
  padding: 0 0 0 0.5rem;
  width: 93%;
`;
