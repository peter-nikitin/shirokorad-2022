import { getSrc } from "gatsby-plugin-image";
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import styled from "styled-components";
import { IDetail } from "../../types";

import DetailPhoto from "./DetailPhoto";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

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

  const images: string[] = [];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <GridWrapper>
        {photos.map((photo, index) => {
          const { gatsbyImageData } = photo.childrenImageSharp[0];
          const src = getSrc(gatsbyImageData);
          if (src) images.push(src);
          return (
            <DetailPhoto
              key={src}
              imageData={gatsbyImageData}
              alt=""
              onClick={() => {
                setLightboxIndex(index);
                setIsLightboxOpen(true);
              }}
            />
          );
        })}
      </GridWrapper>
      {isLightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[lightboxIndex + 1]}
          prevSrc={images[lightboxIndex - 1]}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() => setLightboxIndex(lightboxIndex - 1)}
          onMoveNextRequest={() => setLightboxIndex(lightboxIndex + 1)}
        />
      )}
    </>
  );
};

export default DetailGrid;
