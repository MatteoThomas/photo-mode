import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px aliceblue solid;
  margin: 0 0 1rem 0;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 300px auto auto;
  grid-template-rows: 90px auto auto;
  grid-template-areas:
    "stats  gallery  gallery"
    "upload gallery gallery"
    "upload  gallery gallery";
  @media (max-width: 416px) {
    grid-template-columns: auto;
    grid-template-areas:
      "stats"
      "upload"
      "gallery";
  }
`;

export const StatsStyledCol = styled.div`
  grid-area: stats;
  border-radius: 10px;
  border: 1px lightgray solid;
  padding: 0 0 1rem 0;
`;

export const ImageStyledCol = styled.div`
  grid-area: upload;
  border-radius: 10px;
`;

export const GalleryStyledCol = styled.div`
  grid-area: gallery;
  border-radius: 10px;
`;
