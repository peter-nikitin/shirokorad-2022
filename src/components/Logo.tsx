import { Link } from "gatsby";

import React from "react";
import styled from "styled-components";

import logo from "../images/logo.svg";

const LogoWrapper = styled.header`
  text-align: center;
`;

const LogoImage = styled.img`
width: 270px;
`

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <LogoImage src={logo} alt="Наталья Широкорад - дизайнер" />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
