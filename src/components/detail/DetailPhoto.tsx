import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ImageWithLightbox from "../Image/ImageWithLightbox";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
};

const Photo = styled.div<{
  width: number;
  height: number;
}>`
  grid-column-end: ${(props: { width: number; height: number }) =>
    props.width > props.height ? "span 2" : ""};
`;

const DetailPhoto = ({ imageData, alt }: Props) => {
  const image = getImage(imageData);

  return image ? (
    <Photo height={image.height} width={image.width}>
      <ImageWithLightbox alt={alt} imageData={imageData} />
    </Photo>
  ) : (
    <></>
  );
};

export default DetailPhoto;
