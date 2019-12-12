import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"

const Gallery = styled.div`

`

const Titles = styled.div`
  
`

const Linkss = styled.div`
  .pressRelease {
    background-color: #D1FFC3;
  }
  .artistProfile {
    background-color: #B2BFC8;
  }
  h2 {
    padding: 10px;
  }
`

const Textblock = styled.div`

`


const ExhibitionTemplate = (props) => {

  const exhibition = props.data.allWordpressWpExhibitions.edges[0].node

  return (
    <Layout>
      <div className="exhibition">

        <Titles className="detailHeading">
          {exhibition.acf.artist_object != null &&
            <h1>{exhibition.acf.artist_object[0].post_name}</h1>
          }

          { exhibition.acf.optional_artist != null &&
            exhibition.acf.optional_artist.slice(0, 2).map((artist, index) =>(
                <h1 key={index}>{artist.artist}</h1>
            ))
          }
          {exhibition.acf.exhibition_subtitle != null &&
          <h2>{exhibition.acf.exhibition_subtitle}</h2>
          }
        </Titles>  
        <img className="fullWidth" alt={exhibition.acf.fullwidth_image.title} src={exhibition.acf.fullwidth_image.source_url} />
        <h2>{exhibition.acf.starting_date} – {exhibition.acf.ending_date}</h2>
        <h2>{exhibition.acf.exhibition_location}</h2>
        
        {exhibition.acf.textblock &&
          <Textblock className="detailTextblock"><div dangerouslySetInnerHTML={{ __html: exhibition.acf.textblock }}></div></Textblock>
        }
        
        {exhibition.acf.gallery_module_exhibitions != null  &&
        <Gallery className="slides fullWidth detailGallery">
            {exhibition.acf.gallery_module_exhibitions[0].slides.map((slide, index) => (
                <div className="slide" key={index} id={'slide' + index}>
                  <img src={slide.image.source_url} alt={slide.image.title} />
                  <div className="caption" dangerouslySetInnerHTML={{ __html: slide.caption }}></div>
                </div>
            ))}
        </Gallery>
        } 

        <Linkss className="fullWidth linkBlocks">
              {exhibition.acf.artist_object != null &&
                exhibition.acf.optional_artist === null &&
                  exhibition.acf.artist_object.length === 1 &&
                  <div className="artistProfile linkBlock" >
                    <Link to={`artists/${exhibition.acf.artist_object[0].post_name}`}><h2>Artists Profile</h2></Link>
                  </div>  
              }
              {exhibition.acf.press_release &&
                <div className="pressRelease linkBlock">
                  <a href={exhibition.acf.press_release.source_url} download target="_blank" rel="noopener noreferrer"><h2>Press Release</h2></a>
                </div>
              } 
        </Linkss>
        <Link className="backLink" to="/exhibitions"><h2>&#8592; all exhibitions</h2></Link>
      </div>
    </Layout>
  )

}

export default ExhibitionTemplate

export const exhibitionTemplateQuery = graphql`
  query($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpExhibitions(filter: {slug: { eq: $slug}}) {
      edges {
        node {
          id
          slug
          title
          fields {
            deploy
          }
          acf {
            ...AcfExhibition
          }
        }
      }
    }
  }
`