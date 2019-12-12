import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';

import ExhibitionsModule from "../components/LandingModules/Exhibitions/ExhibitionsModule"
import ArtistsModule from "../components/LandingModules/Artists/ArtistsModule"


const Landing = (props) => {
  
  const allModules = props.data.allWordpressPage.edges
  const exhibitions = props.data.allWordpressWpExhibitions

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
  }
`
