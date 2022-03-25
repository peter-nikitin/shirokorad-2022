import { graphql } from "gatsby";
import Layout from "../Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { IDetail } from "../../types";
import DetailGrid from "./DetailGrid";
import styled from "styled-components";
import Scheme from "./Scheme";

const Description = styled.div`
  display: flex;
  max-width: 1000px;
  justify-content: center;
  margin: 30px auto 70px auto;
`;

const TextWrapper = styled.article`
  padding: 20px 20px 20px 50px;
  width: 65ch;
`;

const Detail = ({ data }: IDetail.RootObject) => {
  return (
    <Layout>
      <>
        <Description>
          <Scheme
            schemeImage={
              data.mdx.frontmatter.scheme.childImageSharp.gatsbyImageData
            }
          />
          <TextWrapper>
            <h1>{data.mdx.frontmatter.title}</h1>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {data.mdx.frontmatter.stylist && (
              <p>Стилист: {data.mdx.frontmatter.stylist}</p>
            )}
            {data.mdx.frontmatter.photo && (
              <p>Фотограф: {data.mdx.frontmatter.photo}</p>
            )}
          </TextWrapper>
        </Description>

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
          gatsbyImageData(width: 800)
        }
      }
    }
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        photo
        stylist
        scheme {
          childImageSharp {
            gatsbyImageData(width: 850)
          }
        }
      }
      slug
      body
    }
  }
`;

export default Detail;
