import styled from "styled-components";

export const StyledContainer = styled.div`
  width: clamp(300px, 100%, 1000px);
  margin: 0 auto;
  color: aliceblue;
`;

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: clamp(300px, 95%, 1000px);
  margin: 0 auto;
  color: aliceblue;
`;

export const InfoContainer = styled.div`
  background-color: gray;
  width: clamp(350px, 100%, 1000px);
  height: fit-content;
  margin: 0 0 1rem 0;
  padding: 0.5rem;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 0.5px rgb(97, 97, 97) solid;
  border-radius: 10px;
  padding: 0.5rem;
`;
