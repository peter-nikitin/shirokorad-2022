import React, { useEffect, useMemo } from "react";

import styled from "styled-components";
import { IDetail } from "../../types";

import DetailPhoto from "./DetailPhoto";

import { deviceBreakpoint } from "../GlobalStyles";
//@ts-ignore-next-line
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

type PropsDetailGrid = {
  photos: IDetail.Node[];
};

const DetailGrid = ({ photos }: PropsDetailGrid) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#photo-grid",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 10px 10px;
    grid-auto-flow: dense;

    @media ${deviceBreakpoint.mobile} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const photoGrid = useMemo(
    () =>
      photos.map((photo) => {
        const { gatsbyImageData } = photo.childrenImageSharp[0];
        // TODO: добавить нормальное описание для картинки и key
        return (
          <DetailPhoto
            imageData={gatsbyImageData}
            alt=""
          />
        );
      }),
    []
  );

  return (
    <>
      <GridWrapper id="photo-grid">{photoGrid}</GridWrapper>
    </>
  );
};

export default DetailGrid;
