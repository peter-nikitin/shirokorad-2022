import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { deviceBreakpoint } from "../GlobalStyles";

import ProjectGridItem from "./ProjectGridItem";

import { ProjectGridQuery } from "../../../gatsby-graphql";

type Props = {
  items: ProjectGridQuery["allMdx"]["nodes"];
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 70px 40px;
  grid-auto-flow: dense;
  justify-items: center;
  
  @media ${deviceBreakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${deviceBreakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${deviceBreakpoint.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

`;

const Grid = ({ items }: Props) => {
  return (
    <GridWrapper>
      {items.map(
        (item) =>
          item.slug &&
          item.frontmatter && (
            <ProjectGridItem slug={item.slug} frontmatter={item.frontmatter} />
          )
      )}
    </GridWrapper>
  );
};

export default Grid;
