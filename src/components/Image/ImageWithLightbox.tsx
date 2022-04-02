import { getImage, getSrc } from "gatsby-plugin-image";
import React from "react";

import Image from "../Image/Image";
import NoImage from "../Image/NoImage";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
  fullScreen: { src: string; width: number; height: number };
};

const ImageWithLightbox = ({ imageData, alt, fullScreen }: Props) => {
  const image = getImage(imageData);

  return image ? (
    <a
      href={fullScreen.src}
      data-pswp-width={fullScreen.width}
      data-pswp-height={fullScreen.height}
    >
      <Image alt={alt} imageData={imageData} />
    </a>
  ) : (
    <NoImage />
  );
};

export default ImageWithLightbox;
