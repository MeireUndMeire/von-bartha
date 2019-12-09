
import React from "react"
import { graphql } from "gatsby"

const ArtistsModule = (props) => {

  const artistModule = props.node

  return (
    <div>
      Artist Module
    </div>
  )
}

// use fragment!

// export const query = graphql`
// {
//   allWordpressWpExhibitions {
//     edges {
//       node {
//         id
//         title
//         acf {
//           fullwidth_image {
//             source_url
//             title
//           }
//           starting_date
//           ending_date
//         }
//       }
//     }
//   }
// }
// `

export default ArtistsModule
