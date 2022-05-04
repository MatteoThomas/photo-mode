import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px aliceblue solid;
  margin: 0 0 1rem 0;
`;

export const StatsStyledCol = styled.div`
  position: sticky;
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

export const DashboardGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 300px auto;
  grid-template-rows: 90px auto;
  grid-template-areas:
    "stats  gallery "
    "upload gallery"
    "upload  gallery";

  @media (max-width: 415px) {
    grid-template-columns: 95%;
    grid-template-areas:
      "stats"
      "upload"
      "gallery";
  }
`;
