import * as React from "react";
import { Link, useStaticQuery, graphql, PageProps } from "gatsby";
import Logo from "./Logo";
import styled from "styled-components";

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
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Logo />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Wrapper>
  );
};

export default Layout;
