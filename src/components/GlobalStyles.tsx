import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');

* {
  font-family: 'Noto Serif', serif;
  color: #4B473F;
}

a {
color: #4B473F;
text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
`;



const breakPontSize = {
  mobile: "425px",
  tablet: "767px",
  laptop: "1025px",
};

export const deviceBreakpoint = {
  mobile: `(max-width: ${breakPontSize.mobile})`,
  tablet: `(min-width: ${breakPontSize.mobile}) and (max-width: ${breakPontSize.tablet})`,
  desktop: `(min-width: ${breakPontSize.laptop})`,
};
//Boder color: #4B473F
