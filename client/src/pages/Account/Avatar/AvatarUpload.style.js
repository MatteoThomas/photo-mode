import styled from "styled-components";

export const UploadContainer = styled.div`
  font-size: 1rem;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.5rem auto 0;
  width: 100%;
`;

export const UploadButton = styled.button`
  border: 1px transparent solid;
  border-radius: 4px;
  transition: 0.4s;
  height: 42px;
  margin: 1rem 0 0 0;
  &:hover {
    transition: all 0.4s;
    color: aliceblue;
    background-color: transparent;
    border: 1px grey solid;
  }
`;
export const Input = styled.div`
  width: clamp(350px, 30%, 600px);
  height: fit-content;
  margin-bottom: 2rem;
  border-radius: 10px;
`;

export const Image = styled.img`
  margin: 1rem auto 0;
  width: 200px;
`;
