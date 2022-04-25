import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ChooseButton = styled.div`
  margin: 0 1rem 0 1rem;
  width: 100px;
`;
export const UploadButton = styled.button`
  background-color: #eb1717;
  color: rgb(136, 136, 136);
  border: 1px transparent solid;
  border-radius: 4px;
  border: 1px transparent solid;
  transition: all 0.4s;
  background-color: #b7eb7d;

  height: 42px;
  &:hover {
    transition: all 0.4s;
    background-color: transparent;
    border: 1px #b7eb7d solid;

    color: #b7eb7d;
  }
`;

export const Image = styled.img`
  margin: 1rem auto 0;
  width: 300px;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 0 0 0.7rem;
  /* background-color:blue; */
`;

export const Input = styled.input`
  border-radius: 4px;
  border: none;
  width: 300px;
  height: 1.6rem;
  margin: 0.3rem 0 2rem 0;
  padding: 0 0 0 0.5rem;
`;
