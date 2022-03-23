import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'

const NoImage = () => {
  return (
    <StaticImage
      src="../images/no-image-icon-23485.png"
      alt="No Image"
    />
  );
}

export default NoImage