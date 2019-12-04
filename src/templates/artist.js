import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"

const Linkss = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .cv {
    width: 50%;
    height: 150px;
    background-color: #B2BFC8;
  }
  .artistWebsite {
    width: 50%;
    background-color: #D1FFC3;
    height: 150px;
  }
  h2 {
    padding: 10px;
  }
`

const Textblock = styled.div`
  width: 60vw;
  margin: 80px auto;
`

const artistTemplate = (props) => {

  const artist = props.data.allWordpressWpArtists.edges[0].node
  
  return (
    <Layout>
      <div className="artist">
        <img className="fullWidth" alt={artist.acf.fullwidth_image.title} src={artist.acf.fullwidth_image.source_url} />
        <h1>{artist.title}</h1>
        
        {artist.acf.textblock =! null &&
          <Textblock><div dangerouslySetInnerHTML={{ __html: artist.acf.textblock }}></div></Textblock>
        }

        <Linkss className="fullWidth">

              {artist.acf.cv ==! false &&
              <div className="cv">
                <a href={artist.acf.cv.source_url} download target="_blank" rel="noopener noreferrer"><h2>CV</h2></a>
              </div>
              }

              {artist.acf.artist_website =! '' &&
                <div className="artistWebsite">
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
            cv
            fullwidth_image {
              source_url
            }
            textblock
          }
        }
      }
    }
  }
`
