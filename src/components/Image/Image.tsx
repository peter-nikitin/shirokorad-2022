import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import NoImage from "./NoImage";

type Props = {
  imageData?: Parameters<typeof getImage>[0];
  alt?: string;
};

const Image = ({ imageData, alt }: Props) => {
  const image = imageData && getImage(imageData);
  
  const imageCaption =
    alt || "Изображение на сайте дизайнера Наталья Широкорад";

  return image ? <GatsbyImage image={image} alt={imageCaption} /> : <NoImage />;
};

export default Image;
