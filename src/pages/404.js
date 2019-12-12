import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from '../components/layout'


const NotFoundPage = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;

  const Four = styled.div`
  img {
    width: 50vw;
  }
  `
  const Back = styled.div`

  `

  return (
    <Layout>
      <Four>
        <h1 className="overviewHeading">This - {siteTitle} page - cannot be not found</h1>
        <h2>Maybe it's taking a barth?</h2>
        <img alt="bath" src="https://previews.123rf.com/images/paperandpixels/paperandpixels1711/paperandpixels171100006/89398479-bath-tub-line-icon-in-pixel-style-linear-symbol-of-a-bathtub-with-shower-head-turned-on-pouring-wate.jpg"></img>
      </Four>
      <Back>
        <Link to="/" className="backLink"><h2>&#8592; Back</h2></Link>
      </Back>
    </Layout>
  )
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
