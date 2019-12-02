import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const ExhibitionTemplate = (props) => {

  const exhibition = props.data.allWordpressWpExhibitions.edges
  

  return (
    <Layout>
      <div className="exhibition">
        {exhibition.map(exhibitionItem => (
          console.log(exhibitionItem.node.title)
        ))}
        {/* <h2>{exhibition.node.acf.exhibition_subtitle}</h2>
        <img alt={exhibition.acf.fullwidth_image.title} src={exhibition.acf.fullwidth_image.source_url} />
        <p>{exhibition.acf.starting_date}</p>
        <p>{exhibition.acf.ending_date}</p>
        <p>{exhibition.acf.exhibition_location}</p>
        <div>{exhibition.acf.textblock}</div>
        <div>{exhibition.acf.gallery_module_exhibitions}
          {exhibition.acf.gallery_module_exhibitions.map(slide => (
            <div>{slide.id}</div>
          ))}
        </div> */}
      </div>
    </Layout>
  )

}

export default ExhibitionTemplate

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpExhibitions {
      edges {
        node {
          id
          slug
          title
          fields {
            deploy
          }
          acf {
            fullwidth_image {
              id
              source_url
              title
            }
            artist_name {
              post_name
              post_title
            }
            starting_date
            ending_date
            exhibition_location
            exhibition_subtitle
            gallery_module_exhibitions {
              slides {
                id
              }
            }
            header
            optional_artist
            press_release {
              source_url
            }
            seo {
              description
              image
              keywords
            }
            textblock
          }
        }
      }
    }
  }
`
