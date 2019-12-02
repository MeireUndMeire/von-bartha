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

  .layout {
    width: 98vw
    margin: 0 1vw;
  }

  img {
    width: 100%;
  }

  h1 {
    font-family: 'Trade-Gothic';
    font-size: 2rem;
    text-transform: uppercase;
  }

  .date-small {
    font-family: 'Trade-Gothic';
    font-size: 12px;
  }

  form, input, ol, p, select, textarea, ul {
    font-size: 1.3rem;
    margin: 25px 0;
  }
`

export default GlobalStyle