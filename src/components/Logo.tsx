import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.header`
  text-align: center;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <StaticImage
          src={`${__dirname}/../../images/logo.svg`}
          alt="Наталья Широкорад - дизайнер"
        />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
