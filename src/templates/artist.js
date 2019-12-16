import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Flickity from 'react-flickity-component'

import Layout from "../components/layout"

const Gallery = styled.div`
  margin-bottom: 8rem;

  img {
    max-height: 70vh;
    max-width: 70vw;
    width: auto;
  }
  .flickity-slider {
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
  }
  .slide {
    margin-left: 2rem;
    &:first-child {
      margin-left: 0;
    }
  }
  .caption {
    margin-top: 1rem;
    margin-left: 2rem;
    max-width: fit-content;
    height: 6rem;
  }
  .caption > p {
    font-family: 'Trade-Gothic';
    font-size: 1rem;
    line-height: 20px;
    margin-bottom: 5px;
  }
`

const Linkss = styled.div`
  
  .cv {
    background-color: #B2BFC8;
  }
  .artistWebsite {
    background-color: #D1FFC3;
  }
  h2 {
    padding: 10px;
  }
`

const Textblock = styled.div`

`

const artistTemplate = (props) => {

  const artist = props.data.allWordpressWpArtists.edges[0].node
  const exhibition = props.data.allWordpressWpExhibitions

  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    pageDots: false,
    resize: true
  }

  
  return (
    <Layout>
      <div className="artist">
        <img className="fullWidth" alt={artist.acf.fullwidth_image.title} src={artist.acf.fullwidth_image.source_url} />
        <h1>{artist.title}</h1>
        
        {artist.acf.textblock =! null &&
          <Textblock className="detailTextblock"><div dangerouslySetInnerHTML={{ __html: artist.acf.textblock }}></div></Textblock>
        }

        {artist.acf.gallery_module_artists != null  &&
        <Gallery>
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {artist.acf.gallery_module_artists[0].slides.map((slide, index) => (
                <div className="slide" key={index} id={'slide' + index}>
                  <img src={slide.image.source_url} alt={slide.image.title} />
                  <div className="caption" dangerouslySetInnerHTML={{ __html: slide.caption }}></div>
                </div>
            ))}
          </Flickity>
        </Gallery>
        }  

        <Linkss className="fullWidth linkBlocks" >

              {artist.acf.cv ==! false &&
              <div className="cv linkBlock">
                <a href={artist.acf.cv.source_url} download target="_blank" rel="noopener noreferrer"><h2>CV</h2></a>
              </div>
              }

              {artist.acf.artist_website =! '' &&
                <div className="artistWebsite linkBlock">
                  <a href={`${artist.acf.artist_website}`} target="_blank" rel="noopener noreferrer"><h2>artists website</h2></a>
                </div>  
              }

        </Linkss>

        <Link className="backLink" to="/artists"><h2>&#8592; all artists</h2></Link>
      </div>
    </Layout>
  )

}

export default artistTemplate

export const query = graphql`
  query($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpArtists(filter: {slug: { eq: $slug}}) {
      edges {
        node {
          id
          slug
          title
          path
          fields {
            deploy
          }
          acf {
            artist_name
            artist_website
            cv {
              source_url
            }
            fullwidth_image {
              source_url
            }
            textblock
            gallery_module_artists {
              slides {
                id
                image {
                  title
                  source_url
                }
                caption
              }
            }
          }
        }
      }
    }
    allWordpressWpExhibitions(sort: {fields: acf___starting_date, order: ASC}, filter: {acf: {artist_object: {elemMatch: {post_name: {eq: $slug}}}}}) {
      edges {
        node {
          slug
          acf {
            ...AcfExhibition
          }
        }
      }
    }
  }
`
