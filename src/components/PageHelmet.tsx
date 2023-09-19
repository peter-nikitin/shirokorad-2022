import React from "react";
import { Helmet } from "react-helmet";

import faviconIco from "../images/favicon.ico";
import faviconSvg from "../images/favicon.svg";
import appleTouch from "../images/apple-touch-icon.png";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  pageName?: string;
  pageDescription?: string;
};

const PageHelmet = ({ pageDescription, pageName }: Props) => {
  return (
    <Helmet>
      <title>{pageName}</title>
      <link rel="icon" href={faviconIco} sizes="any" />
      <link rel="icon" href={faviconSvg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={appleTouch} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageDescription} />
    </Helmet>
  );
};

export default PageHelmet;
