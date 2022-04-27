import styled from "styled-components";
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 416px) {
      ${props}
    }
  `;
};

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px aliceblue solid;
  margin: 0 0 1rem 0;
`;

export const StatsUpload = styled.div`
  display: flex;
  justify-content: space-between;
  width: clamp(350px, 100%, 700px);
  border-radius: 10px;
  margin: 0 0 1rem 0;
  ${mobile({ flexDirection: "column" })}
`;

export const StyledCol = styled.div`
  border-radius: 10px;
`;
