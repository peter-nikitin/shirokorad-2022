import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import NoImage from "../NoImage";

type Props = {
  schemeImage: Parameters<typeof getImage>[0];
};

const Scheme = ({ schemeImage }: Props) => {
  const image = getImage(schemeImage);

  return image ? (
    <GatsbyImage image={image} alt={"Схема проекта"} objectFit="contain" />
  ) : (
    <NoImage />
  );
};

export default Scheme;
