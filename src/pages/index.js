import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';

import ExhibitionsModule from "../components/LandingModules/Exhibitions/ExhibitionsModule"
import ArtistsModule from "../components/LandingModules/Artists/ArtistsModule"
import AboutModule from "../components/LandingModules/About/AboutModule"
import SocialModule from "../components/LandingModules/Social/SocialModule"
import PublicationsModule from "../components/LandingModules/Publications/PublicationsModule"
import EventModule from "../components/LandingModules/Event/EventModule"



const Landing = (props) => {
  
  const allModules = props.data.allWordpressPage.edges
  const exhibitions = props.data.allWordpressWpExhibitions
  const social = props.data.allWordpressAcfOptions.edges[0].node.options
  const artists = props.data.allWordpressWpArtists
  const publications = props.data.allWordpressWpPublications
  const allEvents = props.data.allWordpressWpEvents

  return (
  <Layout>
    <div className="landingPage">
      <div>
        {allModules.map((modules, index) => {
          const modulesList = modules.node.acf.modules_page;
            return(
              <div key={index}>
              {modulesList.map((moduleItem, index) => {
                const typeName = moduleItem.__typename

                switch(typeName) {
                  case "WordPressAcf_exhibitions_module":
                  return <ExhibitionsModule key={index} {...exhibitions}/>
                    break;

                  case "WordPressAcf_about_module":
                  return <AboutModule key={index} {...moduleItem}/>
                    break;

                  case "WordPressAcf_social_module":
                  return <SocialModule key={index} {...social}/>
                    break;

                  case "WordPressAcf_artist_module":
                  return <ArtistsModule key={index} {...artists}/>
                    break;

                  case "WordPressAcf_event_module":
                  return <EventModule key={index} event={{moduleItem}} allEvents={{allEvents}}/>
                    break;

                  case "WordPressAcf_publications_module":
                  return <PublicationsModule key={index} {...publications}/>
                    break;
                    
                  default:
                    break;
                }
              })}
              </div>
            );
          })
        }
      </div>
    </div>
  </Layout> 
  )
}

export default Landing

export const pageQuery = graphql`
  query HomeQuery($eventName: String) {
    allWordpressPage(filter: {template: {eq: "template-landing.php"}}) {
      edges {
        node {
          title
          slug
          id
          template
          acf {
            modules_page {
              __typename
              ... on WordPressAcf_about_module {
                about_module
              }
              ... on WordPressAcf_event_module {
                event {
                  post_name
                }
                background_color
                text_color
                image {
                  source_url
                }
              }
            }
          }
        }
      }
    }
    allWordpressWpExhibitions(sort: {order: DESC, fields: acf___starting_date}) {
      edges {
          node {
              id
              title
              path
              acf {
                  fullwidth_image {
                      source_url
                      title
                  }
                  startingDateNoFormat: starting_date
                  endingDateNoFormat: ending_date
                  starting_date(formatString: "MMM DD")
                  ending_date(formatString: "MMM DD YYYY")
                  exhibition_subtitle
                  exhibition_location
              }
          }
      }
    }
    allWordpressAcfOptions {
      edges {
        node {
          options {
            facebook
            instagram
            twitter
          }
        }
      }
    }
    allWordpressWpArtists {
      edges {
        node {
          slug
          acf {
            artist_name
            preview_image {
              source_url
            }
            fullwidth_image {
              source_url
            }
          }
        }
      }
    }
    allWordpressWpEvents(filter: {slug: {eq: $eventName}}) {
      edges {
        node {
          slug
          acf {
            event_name
            starting_date(formatString: "MMM DD YYYY")
            event_location
            fullwidth_image
          }
        }
      }
    }
    allWordpressWpPublications {
      edges {
        node {
          acf {
            ...AcfPublication
          }
        }
      }
    }
  }
`
