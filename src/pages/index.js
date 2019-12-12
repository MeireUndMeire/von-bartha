import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';

import ExhibitionsModule from "../components/LandingModules/Exhibitions/ExhibitionsModule"
import ArtistsModule from "../components/LandingModules/Artists/ArtistsModule"
import AboutModule from "../components/LandingModules/About/AboutModule"
import SocialModule from "../components/LandingModules/Social/SocialModule"



const Landing = (props) => {
  
  const allModules = props.data.allWordpressPage.edges
  const exhibitions = props.data.allWordpressWpExhibitions
  const social = props.data.allWordpressAcfOptions.edges[0].node.options


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

                  case "WordPressAcf_artists_module":
                  return <ArtistsModule key={index}/>
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
  {
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
  }
`
