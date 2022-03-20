import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import Grid from "../components/grid/Grid";
import { IGrid } from "../types";



// markup
const IndexPage = ({ data }: IGrid.RootObject) => {
  console.log(data);

  const { nodes } = data.allMdx;

  return (
    <Layout>
      <Grid items={nodes} />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
