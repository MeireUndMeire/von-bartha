import React from "react"
import { graphql } from "gatsby"


const NotFoundPage = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <div>
      <h1>This - {siteTitle} page - cannot be not found</h1>
      <p>Maybe it's taking a barth?</p>
    </div>
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
