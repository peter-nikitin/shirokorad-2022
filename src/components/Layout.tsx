import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "./Logo";
import styled from "styled-components";
import Navigation from "./Navigation";
import { deviceBreakpoint, GlobalStyles } from "./GlobalStyles";
import { Helmet } from "react-helmet";
import PageHelmet from "./PageHelmet";

type Props = {
  pageTitle?: string;
  children: React.ReactElement;
  pageDescription?: string;
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1820px;
  padding: 20px 30px;
  @media ${deviceBreakpoint.mobile} {
    padding: 10px;
  }
`;

export const Layout = ({ pageTitle, children, pageDescription }: Props) => {
  return (
    <Wrapper>
      <PageHelmet pageDescription={pageDescription} pageName={pageTitle} />
      <GlobalStyles />
      <Logo />
      <Navigation />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
