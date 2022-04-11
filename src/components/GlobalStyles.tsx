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
  tablet: "768px",
  laptop: "1024px",
  laptop_large: "1440px",
};

export const deviceBreakpoint = {
  mobile: `(max-width: ${breakPontSize.mobile})`,
  tablet: `(min-width: ${breakPontSize.mobile}) and (max-width: ${breakPontSize.tablet})`,
  laptop: `(min-width: ${breakPontSize.tablet}) and (max-width: ${breakPontSize.laptop})`,
  laptop_large: `(min-width: ${breakPontSize.laptop}) and (max-width: ${breakPontSize.laptop_large})`,
  desktop: `(min-width: ${breakPontSize.laptop_large})`,
};
//Boder color: #4B473F
