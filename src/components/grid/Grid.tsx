import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { IGrid } from "../../types";
import { deviceBreakpoint } from "../GlobalStyles";

import ProjectGridItem from "./ProjectGridItem";
import Thumb from "./Thumb";

type Props = {
  items: IGrid.Node[];
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 40px 40px;
  grid-auto-flow: dense;

  @media ${deviceBreakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Grid = ({ items }: Props) => {
  return (
    <GridWrapper>
      {items.map((item) => (
        <ProjectGridItem slug={item.slug} frontmatter={item.frontmatter} />
      ))}
    </GridWrapper>
  );
};

export default Grid;
