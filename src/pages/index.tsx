import { graphql, PageProps } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import { ProjectsCatalog } from "../components/projects/ProjectsCatalog";

import { ProjectGridQuery } from "../../gatsby-graphql";

const IndexPage: React.FC<PageProps<ProjectGridQuery>> = ({ data }) => {
  return (
    <Layout>
      <ProjectsCatalog items={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectGrid {
    allMdx(sort: { fields: [frontmatter___order], order: ASC }) {
      nodes {
        slug
        frontmatter {
          title
          thumb {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
          size
        }
      }
    }
  }
`;

export default IndexPage;
