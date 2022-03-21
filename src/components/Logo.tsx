import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.header`
  text-align: center;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <header>Наталья Широкорад</header>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
