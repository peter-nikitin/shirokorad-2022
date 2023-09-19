import React, { useEffect, useMemo } from "react";
import styled from "styled-components";

import DetailPhoto from "./DetailPhoto";
import { deviceBreakpoint } from "../GlobalStyles";

import { DetailQuery } from "../../../gatsby-graphql";

type PropsDetailGrid = {
  photos: DetailQuery["allFile"]["nodes"];
  projctName: string;
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 10px 10px;
  grid-auto-flow: dense;

  @media ${deviceBreakpoint.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const DetailGrid = ({ photos, projctName }: PropsDetailGrid) => {
  const photoGrid = useMemo(
    () =>
      photos.map((photo, index) => {
        const { gatsbyImageData } = photo!.childrenImageSharp![0]!;
        const fullScreen = photo!.childrenImageSharp![0]?.fixed!;
        return (
          <DetailPhoto
            imageData={gatsbyImageData}
            alt={`Фотография проекта ${projctName} - ${index}`}
            key={photo.name}
            fullScreen={fullScreen}
          />
        );
      }),
    []
  );

  return (
    <>
      <GridWrapper className="photo-with-lightbox">{photoGrid}</GridWrapper>
    </>
  );
};

export default DetailGrid;
