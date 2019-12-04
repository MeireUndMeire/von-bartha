
import React from "react"
import { graphql } from "gatsby"

const ExhibitionsModule = (props) => {

  const exhibitionModule = props.node
  
  return (
    <div>
      Exhibition module
    </div>
  )
}

export const query = graphql`
{
  allWordpressWpExhibitions {
    edges {
      node {
        id
        title
        acf {
          fullwidth_image {
            source_url
            title
          }
          starting_date
          ending_date
        }
      }
    }
  }
}
`

export default ExhibitionsModule
