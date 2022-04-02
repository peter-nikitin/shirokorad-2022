import { getImage, getSrc } from "gatsby-plugin-image";
import React from "react";
import Image from "../Image/Image";
import NoImage from "../Image/NoImage";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
};

const ImageWithLightbox = ({ imageData, alt }: Props) => {
  const image = getImage(imageData);
  const mainScr = getSrc(imageData);

  return image ? (
    <a
      href={mainScr}
      data-pswp-width={image.width}
      data-pswp-height={image.height}
    >
      <Image alt={alt} imageData={imageData} />
    </a>
  ) : (
    <NoImage />
  );
};

export default ImageWithLightbox;
