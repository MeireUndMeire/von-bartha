import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: #FFF;
    color: #1D1D1B;
  }
  html {
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    width: 100vw;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    word-break: break-word;
  }

  a:visited, a {
    color: #1D1D1B;
    text-decoration: none;
  }

  .layout {
    width: 100%;
    margin: 0 1%;
    .fullWidth {
      width: 100vw;
      margin-left: -1%;
    }
  }

  .two-grid-item {
    width: 48.5%;
    padding-bottom: 50px;
    &:nth-child(even){
        margin-left: 1%;
    }
  }
  
  p {
    font-family: 'Sabon';
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }

  .backLink {
    display: inline-block;
    width: 100%;
    margin: 10px 0 80px;
  }

  h1 {
    font-family: 'Trade-Gothic';
    font-size: 4rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 4rem;
  }

  h2 {
    font-family: 'Trade-Gothic';
    font-size: 4rem;
    font-weight: 400;
    line-height: 4rem;
    text-transform: capitalize;
  }

  .navLink {
    font-family: 'Trade-Gothic';
    font-size: 3rem;
    line-height: 3rem;
    color: #1D1D1B;
    text-decoration: none;
    box-shadow: none;
    text-transform: uppercase;
  }

  .date-small {
    font-family: 'Trade-Gothic';
    font-size: 10px;
    text-transform: uppercase;
    word-spacing: 5px;
  }

  form, input, ol, select, textarea, ul {
    font-size: 1.3rem;
    margin: 25px 0;
  }
`

export default GlobalStyle