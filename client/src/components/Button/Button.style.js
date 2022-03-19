import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  border: 1px transparent solid;
  border-radius: 4px;
  transition: 0.4s;
  height: 42px;
  margin: 0 1rem 0 0;
  &:hover {
    transition: all 0.4s;
    color: aliceblue;
    background-color: darkgrey;
    border: 1px grey solid;
  }

  &:active {
    background-color: black;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 1rem;
  color: antiquewhite;
`;
