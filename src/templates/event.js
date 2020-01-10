import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Flickity from 'react-flickity-component'

import Layout from "../components/layout"
import Arrow from '../components/Icons/Arrow'

const Gallery = styled.div`
  padding-bottom: 8rem;

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

const Event = styled.div`
  .wrapper {
    width: 98vw;
    margin-left: -1vw;
    padding: 0 1vw;
  }
  .fullWidth {
    max-height: none;
    padding-left: 1vw;
    padding-right: 1vw;
    @media only screen and (max-width: 767px) {
      padding-left: 2vw;
      padding-right: 2vw;
    }
  }
  .headerImage {
    width: 100vw;
    margin-left: -1vw;
  }
`

const Linkss = styled.div`
  .timetable {
    background-color: #FF4301;
  }
  .eventLink {
    background-color: #B2BFC8;
  }
  h2 {
    padding: 10px;
  }
`

const Textblock = styled.div`

`


const EventTemplate = (props) => {

  const event = props.data.allWordpressWpEvents.edges[0].node
  const backgroundColor = event.acf.color_background
  const textColor = event.acf.color_text
  
  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    pageDots: false,
    resize: true
  }

  return (
    <Layout>

      <Event >
        <div className="wrapper" style={{backgroundColor: backgroundColor, color: textColor }}>
          <Titles className="detailHeading">

            {event.title &&
              <h1>{event.title}</h1>
            }

            { event.acf.optional_artist != null &&
              event.acf.optional_artist.slice(0, 2).map((artist, index) =>(
                  <h1 key={index}>{artist.artist}</h1>
              ))
            }

          </Titles>  
          {event.acf.fullwidth_image2 != null &&
          <img className="headerImage" alt={event.acf.fullwidth_image2} src={event.acf.fullwidth_image2} />
          }
          {event.acf.event_subtitle != null &&
            <h2>{event.acf.event_subtitle}</h2>
          }
          
          <h2>{event.acf.starting_date} – {event.acf.ending_date}</h2>
          <h2>{event.acf.event_location}</h2>
          
          {event.acf.textblock != null &&
            <Textblock className="detailTextblock"><div dangerouslySetInnerHTML={{ __html: event.acf.textblock }}></div></Textblock>
          }
          
          {event.acf.gallery_module_events != null  &&
            <Gallery>
              <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                {event.acf.gallery_module_events[0].slides.map((slide, index) => (
                    <div className="slide" key={index} id={'slide' + index}>
                    {slide.image != null &&
                      <div>
                        <img src={slide.image.source_url} alt={slide.image.title} />
                        <div className="caption" dangerouslySetInnerHTML={{ __html: slide.caption }}></div>
                      </div>
                    }
                    </div>
                ))}
              </Flickity>
            </Gallery>
          }

        </div>

        <Linkss className="fullWidth linkBlocks">
              {event.acf.link_url != null &&
                <a href={`${event.acf.link_url}`} target="_blank" rel="noopener noreferrer">
                  <div className="eventLink linkBlock" >
                    <h2>{event.acf.link_text}</h2>
                  </div>  
                </a>
              }
              {event.acf.download_file != null &&
              <a href={event.acf.download_file.source_url} download target="_blank" rel="noopener noreferrer">
                <div className="timetable linkBlock">
                  <h2>{event.acf.download_text}</h2>
                </div>
              </a>
              } 
        </Linkss>
        <Link className="backLink" to="/agenda"><h2><Arrow width={100} height={100} /> all events</h2></Link>

      </Event>
    </Layout>
  )

}

export default EventTemplate

export const eventTemplateQuery = graphql`
  query eventQuery($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpEvents(filter: {slug: { eq: $slug}}) {
      edges {
        node {
          id
          slug
          title
          acf {
            ...AcfEvent
          }
        }
      }
    }
  }
`