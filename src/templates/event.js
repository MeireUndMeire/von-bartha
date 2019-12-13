import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"

const Gallery = styled.div`

`

const Titles = styled.div`
  
`

const Event = styled.div`
  .fullWidth {
    max-height: none;
    padding-left: 1vw;
    padding-right: 1vw;
    @media only screen and (max-width: 767px) {
      padding-left: 2vw;
      padding-right: 2vw;
    }
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
  

  return (
    <Layout>

      <Event >
        <div className="fullWidth" style={{backgroundColor: backgroundColor, color: textColor }}>
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
          {event.acf.fullwidth_image != null &&
          <img className="fullWidth" alt={event.acf.fullwidth_image.title} src={event.acf.fullwidth_image.source_url} />
          }
          {event.acf.event_subtitle != null &&
            <h2>{event.acf.event_subtitle}</h2>
          }
          
          <h2>{event.acf.starting_date} – {event.acf.ending_date}</h2>
          <h2>{event.acf.event_location}</h2>
          
          {event.acf.textblock &&
            <Textblock className="detailTextblock"><div dangerouslySetInnerHTML={{ __html: event.acf.textblock }}></div></Textblock>
          }
          
          {event.acf.gallery_module_events[0] != null  &&
          <Gallery className="slides fullWidth detailGallery">
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
          </Gallery>
          } 
        </div>

        <Linkss className="fullWidth linkBlocks">
              {event.acf.link_url != null &&
                  <div className="eventLink linkBlock" >
                    <a href={`${event.acf.link_url}`} target="_blank" rel="noopener noreferrer"><h2>{event.acf.link_text}</h2></a>
                  </div>  
              }
              {event.acf.download_file != null &&
                <div className="timetable linkBlock">
                  <a href={event.acf.download_file.source_url} download target="_blank" rel="noopener noreferrer"><h2>{event.acf.download_text}</h2></a>
                </div>
              } 
        </Linkss>
        <Link className="backLink" to="/agenda"><h2>&#8592; all events</h2></Link>

      </Event>
    </Layout>
  )

}

export default EventTemplate

export const eventTemplateQuery = graphql`
  query($slug: String!){
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
            color_background
            color_text
            download_file {
              source_url
            }
            download_text
            starting_date(formatString: "MMM DD")
            ending_date(formatString: "MMM DD YYYY")
            event_location
            event_name
            event_subtitle
            fullwidth_image {
              source_url
            }
            gallery_module_events {
              slides {
                image {
                  source_url
                }
                caption
              }
            }
            header
            link_text
            link_url
            textblock
          }
        }
      }
    }
  }
`