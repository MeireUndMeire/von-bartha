
import React, { useState } from "react"
import { Link } from "gatsby"


import styled from "styled-components"


const Social = styled.div`
  background-color: #E9FF53;
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
  h2 {
    color: #BCCABA;
    margin-left: 8vw;
    @media only screen and (max-width: 767px) {
      margin-left: 0;
    }
  }
  .wrapper {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-left: 0;
    @media only screen and (max-width: 767px) {
      margin-top: 20px;
      margin-left: 8vw;
      display: inline-grid;
      a {
        width: fit-content;
      }
    }
    h2 {
      margin-right: 8vw;
      @media only screen and (max-width: 767px) {
        border-bottom: 2px solid #BCCABA;
        line-height: 4.497vw;
        margin-bottom: 10px;
        margin-right: 0;
        width: fit-content;
      }
    }
  }
`


const SocialModule = (props) => {

  const social = props

  return (
    <Social className="fullWidth">
      <h2>Connect with us.</h2>
      <div className="wrapper fullWidth">
        <a href={`${social.instagram}`} target="_blank" rel="noopener noreferrer"><h2>Instagram</h2></a>
        <a href={`${social.facebook}`} target="_blank" rel="noopener noreferrer"><h2>Facebook</h2></a>
        <a href={`${social.twitter}`} target="_blank" rel="noopener noreferrer"><h2>Twitter</h2></a>
      </div>
    </Social>
  )
}


export default SocialModule