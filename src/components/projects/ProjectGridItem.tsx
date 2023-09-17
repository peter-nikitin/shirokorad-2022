import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Image from "../Image/Image";

import { ProjectGridQuery } from "../../../gatsby-graphql";

type Props = {
  frontmatter: ProjectGridQuery["allMdx"]["nodes"][0]["frontmatter"];
  slug: ProjectGridQuery["allMdx"]["nodes"][0]["slug"];
};

const GridItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const GridItemDescription = styled.div`
  width: 350px;
`;

const ProjectName = styled.p`
  font-size: 1.3rem;
`;

const LinkToProject = styled.div`
  margin-top: 35px;
`;

const ProjectGridItem = ({ frontmatter, slug }: Props) => {
  const path = slug || "";

  const title = frontmatter?.title;
  const gatsbyImageData = frontmatter?.thumb?.childImageSharp?.gatsbyImageData;
  const size = frontmatter?.size;

  return (
    <GridItemWrapper>
      <Link to={path}>
        <Image alt={title} imageData={gatsbyImageData} />
      </Link>
      <GridItemDescription>
        <ProjectName>{title}</ProjectName>
        {size && <p>Площадь: {size} м<sup>2</sup> </p>}
        <LinkToProject>
          <Link to={path}>Посмотреть проект </Link>
        </LinkToProject>
      </GridItemDescription>
    </GridItemWrapper>
  );
};

export default ProjectGridItem;
