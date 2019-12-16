import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PageTemplate = (props) => {


  return (
    <Layout location={props.location}></Layout>
  )

}

export default PageTemplate

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          title
          slug
          id
          template
        }
      }
    }
  }
`
