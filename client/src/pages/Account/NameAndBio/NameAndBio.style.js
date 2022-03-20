import styled from "styled-components";

export const NameBioWrapper = styled.div`
  background-color: gray;
  width: clamp(350px, 30%, 600px);
  height: fit-content;
  margin-bottom: 2rem;
`;

export const StyledCol = styled.div`
  word-wrap: break-word;
  border: 0.5px rgb(97, 97, 97) solid;
  border-radius: 10px;
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  padding: 0.5rem;
  height: fit-content;
`;

export const Bio = styled.div`
  padding: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  overflow-wrap: break-word;
`;

export const Input = styled.input`
  /* width: 100%; */
`;
