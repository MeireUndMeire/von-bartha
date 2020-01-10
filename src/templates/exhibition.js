import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Flickity from 'react-flickity-component'

import Layout from "../components/layout"
import Arrow from '../components/Icons/Arrow'

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

  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    pageDots: false,
    resize: true
  }

  const exhibition = props.data.allWordpressWpExhibitions.edges[0].node

  return (
    <Layout>
      <div className="exhibition">

        <Titles className="detailHeading">
          {exhibition.acf.artist_object != null &&
            <h1>{exhibition.acf.artist_object[0].post_title}</h1>
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
        {exhibition.acf.fullwidth_image != null &&
          <img className="fullWidth" alt="" src={exhibition.acf.fullwidth_image.source_url} />
        }
        <h2>
          {exhibition.acf.starting_date != null &&
            `${exhibition.acf.starting_date}`
          }
          {exhibition.acf.ending_date != null &&
           ` – ${exhibition.acf.ending_date}`
          }
        </h2>
        
        <h2>{exhibition.acf.exhibition_location}</h2>
        
        {exhibition.acf.textblock &&
          <Textblock className="detailTextblock"><div dangerouslySetInnerHTML={{ __html: exhibition.acf.textblock }}></div></Textblock>
        }
        
        {exhibition.acf.gallery_module_exhibitions != null  &&
          <Gallery>
            <Flickity
              className={'carousel'} // default ''
              elementType={'div'} // default 'div'
              options={flickityOptions} // takes flickity options {}
              disableImagesLoaded={false} // default false
              reloadOnUpdate // default false
              static // default false
            >
                  {exhibition.acf.gallery_module_exhibitions[0].slides.map((slide, index) => (
                  <div key={index} className="slide" id={'slide' + index}>
                    <img src={slide.image.source_url} alt={slide.image.title} />
                    <div className="caption" dangerouslySetInnerHTML={{ __html: slide.caption }}></div>
                  </div>
              ))}
            </Flickity>
          </Gallery>
        } 

        <Linkss className="fullWidth linkBlocks">
              {exhibition.acf.artist_object != null &&
                exhibition.acf.optional_artist === null &&
                  exhibition.acf.artist_object.length === 1 &&
                  <Link to={`artists/${exhibition.acf.artist_object[0].post_title}`}>
                    <div className="artistProfile linkBlock" >
                      <h2>Artists Profile</h2>
                    </div>  
                  </Link>
              }
              {exhibition.acf.press_release &&
              <a href={exhibition.acf.press_release.source_url} download target="_blank" rel="noopener noreferrer">
                <div className="pressRelease linkBlock">
                  <h2>Press Release</h2>
                </div>
              </a>
              } 
        </Linkss>
        <Link className="backLink" to="/exhibitions"><h2><Arrow width={100} height={100} /> all exhibitions</h2></Link>
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