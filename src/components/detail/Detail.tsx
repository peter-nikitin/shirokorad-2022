import { graphql } from "gatsby";
import Layout from "../Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { IDetail } from "../../types";
import DetailPhoto from "./DetailPhoto";
import Helmet from "react-helmet";
import styled from "styled-components";
import DetailGrid from "./DetailGrid";
import DetailLightbox from "./DetailLightbox";

const Detail = ({ data }: IDetail.RootObject) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        
        <DetailGrid photos={data.allFile.nodes} />
      </>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String, $photos: String) {
    allFile(
      filter: {
        relativePath: { glob: $photos }
        sourceInstanceName: { eq: "projects" }
      }
    ) {
      nodes {
        relativePath
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
      }
      slug
      body
    }
  }
`;

export default Detail;
