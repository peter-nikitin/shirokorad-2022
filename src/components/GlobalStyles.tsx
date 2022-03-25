import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');

* {
  font-family: 'Noto Serif', serif;
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
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px",
};

export const deviceBreakpoint = {
  mobile: `(max-width: ${breakPontSize.mobile})`,
  tablet: `(max-width: ${breakPontSize.tablet})`,
  laptop: `(max-width: ${breakPontSize.laptop})`,
  desktop: `(min-width: ${breakPontSize.desktop})`,
};
//Boder color: #4B473F
