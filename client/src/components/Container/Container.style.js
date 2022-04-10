import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
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
  display: flex;
  justify-content: left;
  width: 100%;
  align-items: center;
  color: aliceblue;
  padding: 0.7rem 0 0 0.7rem;
`;
