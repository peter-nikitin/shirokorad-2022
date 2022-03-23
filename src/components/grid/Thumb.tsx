import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import NoImage from "../NoImage";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
};

const Thumb = ({ imageData, alt }: Props) => {
  const image = getImage(imageData);

  return image ? <GatsbyImage image={image} alt={alt} /> : <NoImage />;
};

export default Thumb;
