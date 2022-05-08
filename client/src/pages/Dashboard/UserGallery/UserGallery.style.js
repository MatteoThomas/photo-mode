import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 416px) {
      ${props}
    }
  `;
};

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 auto 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  transition: background-color 0.4s;
`;

export const CardMotion = styled(motion.div)``;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 0.7rem;
  margin: 0 0 0.5rem 0;
  background-color: #242424;
  color: #f7f7f7;
  opacity: 1;
  transition: all 0.4s;
  &:hover {
    transition: all 0.4s;
    opacity: 1;
  }
`;

export const Icon = styled.div`
  opacity: 0.5;
  transition: all 2s;
  &:hover {
    transition: all 0.4s;
    opacity: 1;
  }
`;

export const Tooltiptext = styled.div`
  filter: opacity(0);
  width: 120px;
  background-color: #e47a83;
  color: #2e2e2e;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  ${Icon}:hover & {
    transition: all 0.5s;
    filter: opacity(1);
  }
`;

export const Image = styled.img`
  width: 220px;
  ${mobile({ width: "100%" })}
`;

export const Name = styled.h2`
  font-size: 1rem;
  margin: 1rem 0;
  width: 150px;
  word-break: break-all;
`;

export const DeleteEl = styled.img`
  margin: 0.5rem;
  width: 25px;
`;
