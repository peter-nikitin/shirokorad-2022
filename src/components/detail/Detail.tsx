import { graphql, PageProps } from "gatsby";
import Layout from "../Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useEffect } from "react";
import styled from "styled-components";

//@ts-ignore-next-line
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import DetailGrid from "./DetailGrid";
import { DetailQuery } from "../../../gatsby-graphql";
import ImageWithLightbox from "../Image/ImageWithLightbox";
import { deviceBreakpoint } from "../GlobalStyles";

const ProfectInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
  margin: 30px auto 70px auto;
`;

const TextWrapper = styled.div`
  padding: 20px 20px 20px 50px;
  width: 55ch;
  @media ${deviceBreakpoint.mobile} {
    padding: 10px;
  }
`;

const Scheme = styled.div`
  width: 450px;
  @media ${deviceBreakpoint.mobile} {
    width: 100%;
  }
`;

const Detail: React.FC<PageProps<DetailQuery>> = ({ data }) => {
  const { title, stylist, photo } = data?.mdx?.frontmatter!;
  const { gatsbyImageData } = data?.mdx?.frontmatter?.scheme?.childImageSharp!;

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: ".photo-with-lightbox",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <Layout pageTitle={`${title} | Наталья Широкорад - дизайнер интерьеров`}>
      <>
        <ProfectInfo>
          <Scheme className="photo-with-lightbox">
            <ImageWithLightbox
              alt="Cхума проекта"
              imageData={gatsbyImageData}
              fullScreen={
                data?.mdx?.frontmatter?.scheme?.childImageSharp!.fixed!
              }
            />
          </Scheme>
          <TextWrapper>
            <h1>{title}</h1>
            {data?.mdx?.body && <MDXRenderer>{data.mdx.body}</MDXRenderer>}
            {stylist && <p>Стилист: {stylist}</p>}
            {photo && <p>Фотограф: {photo}</p>}
          </TextWrapper>
        </ProfectInfo>

        <DetailGrid photos={data.allFile.nodes} projctName={title} />
      </>
    </Layout>
  );
};

export const query = graphql`
  query Detail($slug: String, $photos: String) {
    allFile(
      filter: {
        relativePath: { glob: $photos }
        sourceInstanceName: { eq: "projects" }
      }
    ) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData(height: 500)
          fixed(width: 2000, quality: 100) {
            src
            width
            height
          }
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
            gatsbyImageData(width: 800)
            fixed(width: 2000) {
              src
              width
              height
            }
          }
        }
      }
      slug
      body
    }
  }
`;

export default Detail;
