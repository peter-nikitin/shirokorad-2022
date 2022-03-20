import * as React from "react";
import { Link, useStaticQuery, graphql, PageProps } from "gatsby";
import Logo from "./Logo";

type Props = {
  pageTitle?: string;
  children: React.ReactElement;
};

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
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>{data.site.siteMetadata.title}</header>
      <Logo />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
