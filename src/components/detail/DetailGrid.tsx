import React from "react";
import styled from "styled-components";
import { IDetail } from "../../types";
import DetailPhoto from "./DetailPhoto";

type Props = {
  photos: IDetail.Node[];
};

const DetailGrid = ({ photos }: Props) => {
  const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 10px 10px;
    grid-auto-flow: dense;
  `;

  return (
    <GridWrapper>
      {photos.map((photo) => {
        const { gatsbyImageData } = photo.childrenImageSharp[0];
        return <DetailPhoto imageData={gatsbyImageData} alt="" />;
      })}
    </GridWrapper>
  );
};

export default DetailGrid;
