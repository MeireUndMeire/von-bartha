import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const PostTemplate = (props) => {

  const post = props.data.wordpressPost;
  const siteTitle = props.data.site.siteMetadata.title;
  let featuredImage = false;

  if (post.featured_media && post.featured_media.source_url ) {
    featuredImage = post.featured_media.source_url;
  }

  return (
    <Layout location={props.location} title={siteTitle}></Layout>
  )

}

export default PostTemplate

export const pageQuery = graphql`
  query PostById($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(id: { eq: $id }) {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      modified
      excerpt
      id
      # featured_media {
      #  source_url
      # }
      categories {
        name
        slug
      }
      content
    }
  }
`
