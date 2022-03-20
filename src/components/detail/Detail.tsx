import { graphql } from "gatsby";
import Layout from "../Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { IDetail } from "../../types";
import DetailPhoto from "./DetailPhoto";
import Helmet from "react-helmet";
import styled from "styled-components";

const Detail = ({ data }: IDetail.RootObject) => {
  const PhotosGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  `;

  return (
    <Layout>
      <>
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/1.1.9/js/libs/jquery-1.10.2.min.js" />
        </Helmet>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <PhotosGridWrapper>
          {data.allFile.nodes.map((photo) => (
            <DetailPhoto
              imageData={photo.childrenImageSharp[0].gatsbyImageData}
              alt=""
            />
          ))}
        </PhotosGridWrapper>
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
