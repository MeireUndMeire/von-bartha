import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"

const Header = styled.h1`
    text-align: left;
`

const OnViewWrapper = styled.div`
    display: inline-block;
    width: 100%;
`

const Heading = styled.div`
    text-align: center;
    margin: 40px 0 20px;
`

const ExhibitionItem = styled.div`
    width: 48vw;
    display: inline-block;
    padding-bottom: 50px;
    &:nth-child(2){
        padding-left: 1.5vw;
    }
    .date-small {
        margin: 0;
    }
`

const Back = styled.div`
    width: 100%;
    padding: 30px 0 80px;
`


const ExhibitionsPage = (props) => {
    const allExhibitions = props.data.allWordpressWpExhibitions.edges

    const currentDate = props.data.site.buildTime
    console.log(currentDate)

    return (

        <Layout>
            <Header>Exhibitions</Header>

            {/* on view */}
            <Heading><h1>on view</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allExhibitions.map(exhibition => (
                     <ExhibitionItem className="exhibitionItem" key={exhibition.node.id}>
                       
                                <p className="date-small">{exhibition.node.acf.starting_date}</p>
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                <h1>{exhibition.node.title}</h1>
                            
                    </ExhibitionItem>
            ))}
            </OnViewWrapper>

            {/* soon */}
            <OnViewWrapper>
            {allExhibitions.map(exhibition => (
                     <ExhibitionItem>
                        <div key={exhibition.node.id}>
                       
                            
                                <p className="date-small">{exhibition.node.acf.starting_date}</p>
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                <h1>{exhibition.node.title}</h1>
                            
                        </div>
                    </ExhibitionItem>
            ))}
            </OnViewWrapper>
            

            {/* past */}
            <OnViewWrapper>
            {allExhibitions.map(exhibition => (
                     <ExhibitionItem>
                        <div key={exhibition.node.id}>
                       
                            
                                <p className="date-small">{exhibition.node.acf.starting_date}</p>
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                <h1>{exhibition.node.title}</h1>
                            
                        </div>
                    </ExhibitionItem>
            ))}
            </OnViewWrapper>
            <Back>
                <Link to="/"><h1>Back</h1></Link>
            </Back>
        </Layout>
    )
}

export default ExhibitionsPage

export const exhibitionsQuery = graphql`
{
    site {
        buildTime
    }

    allWordpressWpExhibitions {
        edges {
          node {
            id
            title
            acf {
              fullwidth_image {
                source_url
                title
              }
              starting_date
              ending_date
              exhibition_subtitle
            }
          }
        }
    }
}
`