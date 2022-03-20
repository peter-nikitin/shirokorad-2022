import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { IGrid } from "../../types";

import ProjectGridItem from "./ProjectGridItem";
import Thumb from "./Thumb";

type Props = {
  items: IGrid.Node[];
};

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
