import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";

type Props = {
  allPhotos: string[];
  showImageOnIndex: number | undefined;
};

const Modal = ({ allPhotos, showImageOnIndex }: Props) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (typeof showImageOnIndex !== "undefined") {
      setImageIndex(showImageOnIndex);
      setIsLightboxOpen(true);
    }
  }, [showImageOnIndex]);

  console.log("isLightboxOpen", isLightboxOpen, );
  console.log(
    "showImageOnIndex",
    showImageOnIndex,
    typeof showImageOnIndex !== "undefined"
  );

  return isLightboxOpen && showImageOnIndex ? (
    <Lightbox
      mainSrc={allPhotos[imageIndex]}
      nextSrc={allPhotos[imageIndex + 1]}
      prevSrc={allPhotos[imageIndex - 1]}
      onCloseRequest={() => setIsLightboxOpen(false)}
      onMovePrevRequest={() => setImageIndex(imageIndex - 1)}
      onMoveNextRequest={() => setImageIndex(imageIndex + 1)}
    />
  ) : (
    <></>
  );
};

export default Modal;
