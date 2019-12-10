import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"

const Header = styled.h1`
    text-align: left;
`

const PublicationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Heading = styled.div`
    text-align: left;
`

const PublicationItem = styled.div`
    .date-small {
        margin: 0;
    }
    .imageWrapper {
        position: relative;
        background-size: auto 80%;
        background-position: center;
        background-repeat: no-repeat;
        height: 40vh;
        @media only screen and (max-width: 767px) {
            background-size: 50%;
        }
    }
    .textWrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: .2s;
        &:hover {
            opacity: 1;
            backdrop-filter: blur(5px) brightness(1.1);
        }

        h2 {
            font-size: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            padding: 0 20%;
            text-transform: none;
        }
    }
    img {
        width: 50%;
        margin-left: 50%;
        transform: translateX(-50%);
        padding: 50px 0;
    }
`

const Back = styled.div`

`


const PublicationsPage = (props) => {

    const allPublications = props.data.allWordpressWpPublications.edges

    return (

        <Layout>

            <Heading className="overviewHeading"><h1>Publications</h1></Heading>
            <PublicationWrapper className="OnViewWrapper">
                

                    {allPublications.map((publication, index) => {                    
                        const publicationType = publication.node.acf.type_of_publication
                        {switch(publicationType) {
                            case "Artist's Book":
                            return ( 
                                <PublicationItem className="two-grid-item" key={index}>
                                    <a href={`mailto: ${publication.node.acf.email === null ? "info@vonbartha.com" : publication.node.acf.email}`}>
                                        <div className="imageWrapper" style={{backgroundColor: publication.node.acf.custom_color === false ? publication.node.acf.color_scheme : publication.node.acf.background_color, 
                                                                            backgroundImage: `url(${publication.node.acf.artists_book_image.source_url})`}} >
                                            <div className="textWrapper"><h2>{`To purchase this publication please email ${publication.node.acf.email === null ? "info@vonbartha.com" : publication.node.acf.email}`}</h2></div>
                                        </div>
                                        <h1>{publication.node.acf.artists_book_name}</h1>
                                    </a>
                                </PublicationItem>)
                                break;


                            case "Report":
                            return (
                                <PublicationItem className="two-grid-item" key={index}>
                                    <a href={publication.node.acf.report_image.source_url} download target="_blank" rel="noopener noreferrer">
                                        <div className="imageWrapper" style={{backgroundColor: publication.node.acf.custom_color === false ? publication.node.acf.color_scheme : publication.node.acf.background_color,
                                                                            backgroundImage: `url(${publication.node.acf.report_image.source_url})`}}>
                                            <div className="textWrapper"><h2>Download PDF</h2></div>
                                        </div>
                                        <h1>{publication.node.acf.report_title}</h1>
                                    </a>
                                </PublicationItem>
                            )
                                break;
                            
                        }}        
                    })
                    }

            </PublicationWrapper>
            
            <Back>
                <Link to="/" className="backLink"><h2>&#8592; Back</h2></Link>
            </Back>
        </Layout>
    )
}

export default PublicationsPage

export const publicationsQuery = graphql`
{
    allWordpressWpPublications {
        edges {
          node {
            id
            acf {
              artists_book_name
              color_scheme
              custom_color
              email
              report_image {
                title
                source_url
              }
              download {
                source_url
              }
              report_title
              type_of_publication
              artists_book_image {
                title
                source_url
              }
              background_color
            }
          }
        }
      }
}
`