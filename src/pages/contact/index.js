import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"

const Header = styled.h1`
    text-align: left;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Staff = styled.div`
    padding: 10px 0 40px;
`

const Page = styled.div`
    .fullWidth {
        width: 98vw;
        max-height: none;
        padding: 1vw 1vw 4vw;
    }
    .overviewHeading {
        text-align: center;
    }
`

const Contact = styled.div`
    margin-bottom: 20vw;
    h2 {
        width: 70%;
    }
`

const About = styled.div`
    h1 {
        text-align: center;
    }
    .imageWrapper {
        @media only screen and (max-width: 767px) {
        max-width: 100%;
        }
        margin: 0 auto;
        max-width: 70vw;
        caption {
            margin-left: 40px;
        }
    }
    .caption > p{
        @media only screen and (max-width: 767px) {
            margin-left: 20.5%;
        }
        margin-left: 11.5%;
        margin-top: 10px;
        font-family: 'Trade-Gothic';
        font-size: 1rem;
        line-height: 20px;
        margin-bottom: 5px;
    }
`

const Locations = styled.div`
    .second p {
        margin-top: 10px;
        font-size: 18px;
        line-height: 18px;
    }
    .additionalInfo p {
        font-family: 'Trade-Gothic';
        font-size: 5.714vw;
        font-weight: 400;
        line-height: 5.714vw;
        text-transform: capitalize;
    }
`

const Location = styled.div`
    padding: 10px 0 60px;
`

const LocationItem = styled.div`
    @media only screen and (max-width: 767px) {
        padding-top: 10px;
        display: table;
        .first {
            display: table-footer-group;
        }
        .second {
            display: table-header-group;
        }
    }
`

const ArtistItem = styled.div`
    .date-small {
        margin: 0;
    }
`

const Back = styled.div`

`


const ContactAboutPage = (props) => {
    const allContent = props.data.allWordpressPage.edges[0].node
    const contact = props.data.wordpressAcfOptions.options.contact

    return (

        <Layout>
            <Page>

                <Contact>   
                <h1 className="overviewHeading">Contact</h1>
                <h2>{contact.contact_text}</h2>
                <h2>{contact.phone}</h2>
                <a href={`mailto: ${contact.email}`}><h2>{contact.email}</h2></a>

                </Contact>

                <Locations>
                    <h1 className="overviewHeading">Locations</h1>
                    {allContent.acf.locations_page.map((location, index) => (
                        <Location className="fullWidth" key={index} style={{backgroundColor: location.location_background_color}}>
                            <Wrapper>
                                <LocationItem className="two-grid-item">
                                    <img className="first" alt={location.location_image.title} src={location.location_image.source_url} />
                                    <h1 className="second">{location.location_title}</h1>
                                </LocationItem>
                                <LocationItem className="two-grid-item">
                                    <a href={`${location.location_link}`} target="_blank" rel="noopener noreferrer">
                                        <img className="first" alt={location.location_map.title} src={location.location_map.source_url} />
                                    </a>
                                    <p className="second" dangerouslySetInnerHTML={{ __html: location.location_description }}></p>      
                                </LocationItem>
                                <div className="additionalInfo" dangerouslySetInnerHTML={{ __html: location.location_additional_info }}></div>
                            </Wrapper>
                        
                        </Location>
                    ))} 
                </Locations>
                <About id="about">
                        <h1 className="overviewHeading">About</h1>
                        {allContent.acf.about_content_page.map((aboutModule, index) => (
                        
                            aboutModule.image !== undefined ? 
                            (
                            <div key={index} className="imageWrapper">
                                <img alt={index} src={aboutModule.image.source_url}/>
                                <div className="caption" dangerouslySetInnerHTML={{ __html: aboutModule.caption }}></div>
                            </div>
                            )
                            : (<div className="detailTextblock" key={index} dangerouslySetInnerHTML={{ __html: aboutModule.textblock }}></div>) 

                        ))}
                </About>
                                
                <Staff className="fullWidth" style={{backgroundColor: `#${allContent.acf.staff_background_color}`}}>
                    <h1 className="overviewHeading">Staff</h1>
                    {allContent.acf.staff_page.map((person, index) => (
                        <a key={index} href={`mailto: ${person.email === null ? "info@vonbartha.com" : person.email}`}>
                            <h2>{person.staff_member_name}</h2>
                            <div className="date-small">{person.job_title}</div>
                        </a>
                    ))}
                </Staff>
                
                <Back>
                    <Link to="/" className="backLink"><h2>&#8592; Back</h2></Link>
                </Back>
            </Page>
        </Layout>
    )
}

export default ContactAboutPage

export const contactAboutQuery = graphql`
{
    wordpressAcfOptions {
        options {
            contact {
                contact_text
                email
                phone
            }
        }
    }
    allWordpressPage(filter: {template: {eq: "template-contact-about-staff.php"}}) {
        edges {
          node {
            id
            template
            acf {
              locations_header
              locations_page {
                location_title
                location_map {
                    source_url
                }
                location_link
                location_additional_info
                location_description
                location_background_color
                location_custom_color
                location_image {
                    title
                    source_url
                }
              }
              about_header
              about_content_page {
                  __typename
                ... on WordPressAcf_image_module {
                  id
                  caption
                  image {
                      source_url
                  }
                }
                ... on WordPressAcf_textblock_module {
                  id
                  textblock
                }
              }
              staff_color_scheme
              staff_custom_color
              staff_background_color
              staff_header
              staff_page {
                email
                job_title
                staff_member_name
              }
            }
          }
        }
      }
}
`