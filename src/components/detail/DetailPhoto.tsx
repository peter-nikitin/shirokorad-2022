import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  imageData: Parameters<typeof getImage>[0];
  alt: string;
};

const DetailPhoto = ({ imageData, alt }: Props) => {
  const image = getImage(imageData);

  return image ? (
    <GatsbyImage className="brick" image={image} alt={alt} />
  ) : (
    <StaticImage
      src="https://png2.cleanpng.com/sh/b840daf53e59a724c4abe0bfbac117cf/L0KzQYm3VsEzN5l7R91yc4Pzfri0kQJqa5YyjNHEc3X1hrrqhb10d5pxRdRAc3nxdcT6Tf5wNaVuhN42ZnH1fbr1h71vd15uhdNwZT24coO3WMlja5Q8ftdrMT62Roe8Wck3P2I6SqoDNUmzRomBUckzNqFzf3==/kisspng-price-toyservice-soil-business-no-till-farming-no-image-5b2089bcc7feb1.3665996715288590688192.png"
      alt="No Image"
    />
  );
};

export default DetailPhoto;
