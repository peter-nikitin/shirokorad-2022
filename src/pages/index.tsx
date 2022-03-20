import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import ProjectsGrid from "../components/ProjectsGrid";
import { Grid } from "../types";



// markup
const IndexPage = ({ data }: Grid.RootObject) => {
  console.log(data);

  const { nodes } = data.allMdx;

  return (
    <Layout>
      <ProjectsGrid items={nodes} />
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
