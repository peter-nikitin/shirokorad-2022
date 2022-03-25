import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "./Logo";
import styled from "styled-components";
import Navigation from "./Navigation";
import { GlobalStyles } from "./GlobalStyles";

type Props = {
  pageTitle?: string;
  children: React.ReactElement;
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 30px;
`;


const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GlobalStyles />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Logo />
      <Navigation />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Wrapper>
  );
};

export default Layout;
