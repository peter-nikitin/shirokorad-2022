import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import NoImage from "../NoImage";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
  onClick: () => void;
};

const Photo = styled.div<{
  width: number;
  height: number;
}>`
  grid-column-end: ${(props) => (props.width > props.height ? "span 2" : "")};
`;

const DetailPhoto = ({ imageData, alt, onClick }: Props) => {
  const image = getImage(imageData);

  return image ? (
    <Photo height={image.height} width={image.width}>
      <GatsbyImage image={image} alt={alt} objectFit="fill"/>
    </Photo>
  ) : (
    <NoImage />
  );
};

export default DetailPhoto;
