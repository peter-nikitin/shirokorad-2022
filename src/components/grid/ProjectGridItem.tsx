import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Image from "../Image/Image";

import { ProjectGridQuery } from "../../../gatsby-graphql";

type Props = {
  frontmatter: ProjectGridQuery["allMdx"]["nodes"][0]["frontmatter"];
  slug: ProjectGridQuery["allMdx"]["nodes"][0]["slug"];
};

const GridItemWrapper = styled.div``;

const ProjectGridItem = ({ frontmatter, slug }: Props) => {
  const path = slug || "";

  const title = frontmatter?.title;
  const gatsbyImageData = frontmatter?.thumb?.childImageSharp?.gatsbyImageData;

  return (
    <GridItemWrapper>
      <Link to={path}>
        <Image alt={title} imageData={gatsbyImageData} />
        <p>{title}</p>
      </Link>
    </GridItemWrapper>
  );
};

export default ProjectGridItem;
