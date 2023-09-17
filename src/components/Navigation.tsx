import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const links = [
  {
    path: "/",
    name: "Проекты",
  },
  {
    path: "/services/",
    name: "Услуги и цены",
  },
  {
    path: "/about/",
    name: "Команда",
  },
  {
    path: "/contacts/",
    name: "Контакты",
  },
];

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const LinkWrapper = styled.div`
  padding: 15px 40px;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      {links.map((link) => (
        <LinkWrapper key={link.path}>
          <Link to={link.path}>{link.name}</Link>
        </LinkWrapper>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
