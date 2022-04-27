import styled from "styled-components";
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 416px) {
      ${props}
    }
  `;
};

export const AccountInfoContainer = styled.div`
  width: clamp(350px, 30%, 600px);
  border-radius: 10px;
  ${mobile({ width: "95vw" })}
  margin: 0 auto;
`;

export const NameAndAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px lightgray solid;
  border-radius: 10px;
  padding: 0.5rem;
  height: 100px;
  margin: 1rem 0 0;
`;

export const AvatarContainer = styled.div`
  word-wrap: break-word;
  border: 0.5px lightgray solid;
  border-radius: 10px;
  padding: 0.5rem;
  align-items: center;
  margin: 1rem 0 0;
`;

export const Tooltiptext = styled.div`
  filter: opacity(0);
  width: 120px;
  background-color: #e47a83;
  color: #2e2e2e;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  ${AvatarContainer}:hover & {
    transition: all 0.5s;
    filter: opacity(1);
  }
`;

export const StyledCol = styled.div`
  word-wrap: break-word;
  border: 0.5px lightgray solid;
  border-radius: 10px;
  padding: 0.5rem;
  height: fit-content;
  margin: 1rem 0 0;
`;

export const Bio = styled.div`
  padding: 1rem 0.5rem 1rem 0;
  font-size: 1rem;
  overflow-wrap: break-word;
`;

export const Input = styled.input`
  margin: 0 1rem 0 0;
`;

export const StyledSubmitButton = styled.button`
  border: 1px transparent solid;
  border-radius: 2px;
  transition: 0.4s;
  height: 32px;
  margin: 0 1rem 0 0;
  &:hover {
    transition: all 0.4s;
    color: aliceblue;
    background-color: grey;
  }
  &:active {
    border: 1px black solid;
    background-color: black;
  }
`;

export const ButtonLabel = styled.label`
  font-size: 1rem;
  color: aliceblue;
`;

export const AvatarImg = styled.img`
  height: fit-content;
  vertical-align: middle;
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;
