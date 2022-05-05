import styled from "styled-components";

export const UploadContainer = styled.div`
  font-size: 1rem;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: transform 0.35s ease-in-out;
`;

export const AvatarContainer = styled.div`
  word-wrap: break-word;
  border: 0.5px rgb(97, 97, 97) solid;
  border-radius: 10px;
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  padding: 0.5rem;
  align-items: center;
  height: fit-content;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem auto 0;
`;

export const UploadButton = styled.button`
  border: 1px transparent solid;
  border-radius: 4px;
  transition: 0.4s;
  height: 39px;
  margin: 0rem 0 0 2.5rem;
  &:hover {
    transition: all 0.4s;
    color: aliceblue;
    background-color: transparent;
    border: 1px grey solid;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 80px;
  border-radius: 10px;
  cursor: move;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  cursor: move;
`;
