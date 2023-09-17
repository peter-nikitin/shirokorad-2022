import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ImageWithLightbox from "../Image/ImageWithLightbox";
import { DetailQuery } from "../../../gatsby-graphql";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
  fullScreen: { src: string; width: number; height: number };
};

const Photo = styled.div<{
  width: number;
  height: number;
}>`
  grid-column-end: ${(props: { width: number; height: number }) =>
    props.width > props.height ? "span 2" : ""};
  content-visibility: auto;
  contain-intrinsic-size: ${({ width, height }) => `${width} ${height}`};
`;

const DetailPhoto = ({ imageData, alt, fullScreen }: Props) => {
  const image = getImage(imageData);

  return image ? (
    <Photo height={image.height} width={image.width}>
      <ImageWithLightbox
        alt={alt}
        imageData={imageData}
        fullScreen={fullScreen}
      />
    </Photo>
  ) : (
    <></>
  );
};

export default DetailPhoto;
