import React from "react";
import styled from "styled-components";
import { IDetail } from "../../types";
import DetailPhoto from "./DetailPhoto";
import LightGallery from "lightgallery/react";
import { getSrc } from "gatsby-plugin-image";
import "lightgallery/css/lightgallery.css";

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
    <LightGallery>
      <GridWrapper>
        {photos.map((photo) => {
          const { gatsbyImageData } = photo.childrenImageSharp[0];
          console.log(getSrc(gatsbyImageData));
          return (
            <a href="https://api.unsplash.com/photos/random">
              <DetailPhoto imageData={gatsbyImageData} alt="" />
            </a>
          );
        })}
      </GridWrapper>
    </LightGallery>
  );
};

export default DetailGrid;
