
import React, { useState } from "react"
import { Link } from "gatsby"


import styled from "styled-components"


const About = styled.div`
  background-color: #BCCABA;
  padding: 1vw 1vw 5vw;
  @media only screen and (max-width: 767px) {
    padding: 1vw 2vw 5vw;
  }
  &.fullWidth {
    width: 98vw;
    @media only screen and (max-width: 767px) {
      width: 96vw;
    }
  }
  h2 > p {
    font-family: 'Trade-Gothic';
    font-size: 5.714vw;
    font-weight: 400;
    line-height: 5.714vw;
    text-transform: none;;
  }
  .right {
    text-align: right;
  }
`


const AboutModule = (props) => {

  const about = props

  return (
    <About className="fullWidth">
      <h2 dangerouslySetInnerHTML={{ __html: about.about_module }}></h2>
      <div className="right">
        <Link className="underline" to={`/contact#about`}><h2>Read more</h2></Link>
      </div>
    </About>
  )
}


export default AboutModule