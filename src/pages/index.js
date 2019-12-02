import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout';

import ExhibitionsModule from "../components/LandingModules/Exhibitions/ExhibitionsModule"


const Landing = (props) => {
  
  const site = props.data.site.siteMetadata;
  const allModules = props.data.allWordpressPage.edges;

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
                  return <ExhibitionsModule key={index}/>
                    break;
                    
                  //add other modules here

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
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
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
  }
`
