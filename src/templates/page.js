import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PageTemplate = (props) => {

  const post = props.data.wordpressPage;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}></Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageByID($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPage(id: { eq: $id }) {
      slug
      title
      id
      # featured_media {
      #   source_url
      # }
      content
    }
  }
`
