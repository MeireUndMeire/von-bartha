import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :focus {
    outline: #FFF;
  }
  html {
    margin: 0;
    padding: 0;
    background-color: #1D1D1B;
  }
  body {
    overflow-x: hidden;
    width: 100vw;
    color: #1D1D1B;
    background-color: #FFF;
    ::selection {
      color: #1D1D1B;
    }
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
    @media only screen and (max-width: 767px) {
      padding: 0 2%
    }
    max-width: 100%;
    overflow-x: hidden;
    padding: 0 1%;

    .fullWidth {
      width: 100vw;
      object-fit: cover;
      margin-left: -1%;
      @media only screen and (max-width: 767px) {
        margin-left: -2%;
      }
      img {
        max-height: 70vh;
      }
    }
  }

  .detailHeading {
    padding: 5.714vw 0 10px;
  }

  .overviewHeading {
    padding-bottom: 5.714vw;
  }

  .two-grid-item {
    @media only screen and (max-width: 767px) {
      width: 100%;
      padding-bottom: 8vw;
      &:nth-child(even){
        padding-left: 0;
      }
    }
    width: 49.5%;
    padding-bottom: 5.714vw;
    @media only screen and (min-width: 768px) {
      &:nth-child(even){
        padding-left: 1%;
      }
    }

    img {
      margin-bottom: 8px;
      height: 33.3vw;
      object-fit: cover;
      @media only screen and (max-width: 767px) {
        height: auto;
      }
    }
  }

  .linkBlocks {
    width: 100%;
    height: 100%;
    display: flex;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    a {
      width: fill-available;
    }
    .linkBlock {
      @media only screen and (max-width: 767px) {
        width: 100%; 
        height: 90px; 
      }
      width: fill-available;
      height: calc(5.297vw * 3) ;
    }
  }

  .detailGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-direction: flex-start;
    width: auto;
    padding: 50px 0;
    overflow-x: scroll;

    #slide0 {
      @media only screen and (max-width: 767px) {
        margin-left: 0;
      }
      margin-left: 33.3vw;
    }

    .slide {
      padding-left: 40px;
      margin-left: 0;
      img {
        width: auto;
        height: 50vh;
        object-fit: contain;
      }
    }
    .caption > p {
      font-family: 'Trade-Gothic';
      font-size: 1rem;
      line-height: 20px;
      margin-bottom: 5px;
    }
    .caption {
      padding: 10px 0 0 70px;
    }
  }
  
  p {
    font-family: 'Sabon';
    font-size: 22px;
    letter-spacing: 0;
    line-height: 30px;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
  }

  .backLink {
    display: inline-block;
    width: fit-content;
    margin: 10px 0 10vw;
    @media only screen and (max-width: 768px) {
      margin: 10px 0 40px;
    }
    svg {
      height: 4vw;
      width: 5vw;
    }
  }

  .detailTextblock {
    @media only screen and (max-width: 767px) {
    width: 75%;
    margin: 40px 20% 5rem;
    }
    width: 55%;
    max-width: 820px;
    margin: 80px auto;
    div {
      font-family: 'Sabon';
      font-size: 22px;
      letter-spacing: 0;
      line-height: 30px;
      margin-bottom: 1rem;
    }
  }

  h1 {
    ${'' /* @media only screen and (max-width: 767px) {
      font-size: 2rem;
      line-height: 2rem;
    } */}
    font-family: 'Trade-Gothic';
    font-size: 5.297vw;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 5.297vw;
  }

  h2 {
    ${'' /* @media only screen and (max-width: 767px) {
      font-size: 2rem;
      line-height: 2rem;
    } */}
    font-family: 'Trade-Gothic';
    font-size: 5.297vw;
    font-weight: 400;
    line-height: 5.297vw;
    text-transform: capitalize;
  }

  .underline {
    border-bottom: 2px solid #1D1D1B;
  }
  
  .navLink {
    @media only screen and (max-width: 767px) {
      font-size: 2rem;
      line-height: 2rem;
    }
    font-family: 'Trade-Gothic';
    font-size: 3rem;
    line-height: 3rem;
    color: #1D1D1B;
    text-decoration: none;
    box-shadow: none;
    text-transform: uppercase;
  }

  .removeScrollBar {
    &::-webkit-scrollbar { display: none; width: 0; height: 0; }
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .date-small {
    margin-bottom: 5px;
    font-family: 'Trade-Gothic';
    font-size: 10px;
    line-height: 10px;
    text-transform: uppercase;
    word-spacing: 5px;
  }

  form, input, ol, select, textarea, ul {
    font-size: 1.3rem;
    margin: 25px 0;
  }
`

export default GlobalStyle