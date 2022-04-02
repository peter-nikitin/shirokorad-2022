import { graphql, PageProps } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import Grid from "../components/grid/Grid";

import { ProjectGridQuery } from "../../gatsby-graphql";

const IndexPage: React.FC<PageProps<ProjectGridQuery>> = ({ data }) => {
  return (
    <Layout>
      <Grid items={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectGrid {
    allMdx(sort: { fields: [frontmatter___order], order: DESC }) {
      nodes {
        slug
        frontmatter {
          title
          thumb {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
