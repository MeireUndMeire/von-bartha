import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"

const Header = styled.h1`
    text-align: left;
`

const OnViewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Heading = styled.div`
    text-align: center;
    margin: 40px 0 20px;
`

//48.5% for each element + 1% margin-left + document margin 1% left & right makes 100%
const ExhibitionItem = styled.div`
    .date-small {
        margin: 0;
    }
`

const Back = styled.div`

`


const ExhibitionsPage = (props) => {
    const allExhibitions = props.data.allWordpressWpExhibitions.edges

    const currentDate = props.data.site.buildTime //works


    return (

        <Layout>
            <Header>Exhibitions</Header>

            {/* on view */}
            <Heading><h1>on view</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allExhibitions.map(exhibition => (
                     <ExhibitionItem className="two-grid-item" key={exhibition.node.id}>
                       
                                <p className="date-small">Until {exhibition.node.acf.starting_date}</p>
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                <Link className="link" to={exhibition.node.path}>
                                    <h1>{exhibition.node.title}</h1>
                                    <h2>{exhibition.node.exhibition_subtitle}</h2>
                                </Link>
                            
                    </ExhibitionItem>
            ))}
            </OnViewWrapper>

            {/* soon */}
            <Heading><h1>soon</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allExhibitions.map(exhibition => (
                     <ExhibitionItem className="two-grid-item" key={exhibition.node.id}>
                                
                                {/* {exhibition.node.acf.starting_date ? 'undefined' : 'not'} */}
                                <p className="date-small">{exhibition.node.acf.starting_date}</p>
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                <Link className="link" to={exhibition.node.path}>
                                    <h1>{exhibition.node.title}</h1>
                                    <h2>{exhibition.node.exhibition_subtitle}</h2>
                                </Link>
                            
                    </ExhibitionItem>
            ))}
            </OnViewWrapper>
            

            {/* past */}
            <Heading><h1>past</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allExhibitions.map(exhibition => (
                     <ExhibitionItem className="two-grid-item" key={exhibition.node.id}>
                       
                                <p className="date-small">{exhibition.node.acf.starting_date}</p>
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                <Link className="link" to={exhibition.node.path}>
                                    <h1>{exhibition.node.title}</h1>
                                    <h2>{exhibition.node.exhibition_subtitle}</h2>
                                </Link>
                            
                    </ExhibitionItem>
            ))}
            </OnViewWrapper>
            
            <Back>
                <Link to="/" className="backLink"><h2>&#8592; Back</h2></Link>
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
                path
                acf {
                fullwidth_image {
                    source_url
                    title
                }
                starting_date(formatString: "MMM DD YYYY")
                ending_date
                exhibition_subtitle
                }
            }
        }
    }
}
`