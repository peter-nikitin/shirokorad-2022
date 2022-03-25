import { getSrc } from "gatsby-plugin-image";
import React, { useMemo, useState } from "react";
import Lightbox from "react-image-lightbox";
import styled from "styled-components";
import { IDetail } from "../../types";

import DetailPhoto from "./DetailPhoto";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import Modal from "./Modal";

type PropsDetailGrid = {
  photos: IDetail.Node[];
};

const DetailGrid = ({ photos }: PropsDetailGrid) => {
  const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 10px 10px;
    grid-auto-flow: dense;
  `;

  const initialLightboxImagesArray = useMemo(() => {
    return photos.map((photo) => getSrc(photo.childrenImageSharp[0]) || "");
  }, [photos]);

  const photoGrid = useMemo(
    () =>
      photos.map((photo, index) => {
        const { gatsbyImageData } = photo.childrenImageSharp[0];

        return (
          <DetailPhoto
            imageData={gatsbyImageData}
            alt=""
            onClick={() => {
              console.log(index);
              
              setImageIndex(index)
            }}
          />
        );
      }),
    []
  );

  const [imageIndex, setImageIndex] = useState();

  return (
    <>
      <GridWrapper>{photoGrid}</GridWrapper>

      <Modal
        allPhotos={initialLightboxImagesArray}
        showImageOnIndex={imageIndex}
      />
    </>
  );
};

export default DetailGrid;
