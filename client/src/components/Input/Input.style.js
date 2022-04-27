import styled from "styled-components";
import Input from "./Input";

export const StyledInputWrapper = styled.div``;
export const StyledInput = styled(Input)`
  &[type="password"] {
    border-radius: 2px;
    border: none;
    width: 300px;
    height: 1.6rem;
    margin: 0.3rem 0 2rem 0;
    padding: 0 0 0 0.5rem;
    background-color: aqua;
  }
`;

export const InputLabel = styled.input`
  font-size: 1rem;
  color: aliceblue;
  background-color: aqua;
`;
