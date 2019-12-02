
import React from "react"
import { graphql } from "gatsby"

const ExhibitionsModule = (props) => {
  console.log(props)
  return (
    <div>
      Yes
    </div>
  )
}

export const exhibitionsModuleQuery = graphql`
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
