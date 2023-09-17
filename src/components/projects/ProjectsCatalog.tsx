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
display: flex;
align-items: center;
flex-direction: column;
  gap: 40px;
`;

export const ProjectsCatalog = ({ items }: Props) => {
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
