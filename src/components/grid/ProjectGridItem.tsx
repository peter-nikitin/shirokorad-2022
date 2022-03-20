import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Grid } from "../../types";

import Thumb from "./Thumb";

type Props = {
  slug: string;
  frontmatter: Grid.Frontmatter;
};

const GridItemWrapper = styled.div`
  width: 30%;
`;

const ProjectGridItem = ({ frontmatter, slug }: Props) => {
  return (
    <GridItemWrapper>
      <Link to={slug}>
        <p>{frontmatter.title}</p>
        <Thumb
          alt={frontmatter.title}
          imageData={frontmatter.thumb.childImageSharp.gatsbyImageData}
        />
      </Link>
    </GridItemWrapper>
  );
};

export default ProjectGridItem;
