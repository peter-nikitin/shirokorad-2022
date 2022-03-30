import { GatsbyImage, getImage, getSrc, StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import NoImage from "../NoImage";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
  onClick?: () => void;
};

const Photo = styled.a<{
  width: number;
  height: number;
}>`
  grid-column-end: ${(props: { width: number; height: number; }) => (props.width > props.height ? "span 2" : "")};
`;

const DetailPhoto = ({ imageData, alt, onClick }: Props) => {
  const image = getImage(imageData);
  const mainScr = getSrc(imageData);

  return image ? (
    <Photo
      height={image.height}
      width={image.width}
      data-pswp-src={mainScr}
      data-pswp-width={image.width}
      data-pswp-height={image.height}
    >
      <GatsbyImage image={image} alt={alt} objectFit="fill" />
    </Photo>
  ) : (
    <NoImage />
  );
};

export default DetailPhoto;
