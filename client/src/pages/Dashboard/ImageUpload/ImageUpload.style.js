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
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px lightgray solid;
  ${mobile({ margin: "1.5rem auto" })}
`;
export const ChooseButton = styled.div`
  margin: 0 1rem 0 1rem;
  width: 100px;
`;
export const UploadButton = styled.button`
  color: rgb(136, 136, 136);
  border: 1px transparent solid;
  border-radius: 10px;
  transition: all 0.4s;
  background-color: #b7eb7d;
  height: 42px;
  width: 100%;
  &:hover {
    transition: all 0.4s;
    background-color: transparent;
    border: 1px #b7eb7d solid;
    color: #b7eb7d;
  }
`;

export const Image = styled.img`
  margin: 1rem;
  width: 300px;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0.7rem;
  border-radius: 10px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: none;
  height: 1.6rem;
  margin: 1rem 0 0rem 0;
  padding: 0 0 0 0.5rem;
`;
