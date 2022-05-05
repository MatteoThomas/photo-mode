import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  text-align: right;
  border-bottom: 1px aliceblue solid;
  margin: 0 0 2rem 0;
`;

export const Input = styled.input``;

export const AvatarImg = styled.img`
  height: fit-content;
  vertical-align: middle;

  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 0.5px rgb(97, 97, 97) solid;
  padding: 0.5rem;
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
