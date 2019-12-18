import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'

import Layout from '../../components/layout';
import styled from "styled-components"

const Header = styled.h1`
    text-align: left;
    margin-bottom: 40px;
`

const OnViewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const Heading = styled.div`
    text-align: center;
`

const ExhibitionItem = styled.div`

`

const Back = styled.div`

`


const ExhibitionsPage = (props) => {
    const allExhibitions = props.data.allWordpressWpExhibitions.edges
    let today = moment(new Date()).format('YYYYMMDD')

    return (

        <Layout>
            <Header>Exhibitions</Header>

            {/* on view */}
            <Heading className="overviewHeading"><h1>on view</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allExhibitions.map(exhibition => {
                const currentStatus = today - exhibition.node.acf.startingDateNoFormat
                const duration = exhibition.node.acf.endingDateNoFormat - exhibition.node.acf.startingDateNoFormat
                if (currentStatus >= 0 && currentStatus <= duration) {
                    return (
                        <ExhibitionItem className="two-grid-item" key={exhibition.node.id}>
                            <Link className="link" to={exhibition.node.path}>
                                <p className="date-small">Until {exhibition.node.acf.ending_date}</p>
                                {exhibition.node.acf.fullwidth_image != null &&
                                <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                }
                                <h1 dangerouslySetInnerHTML={{ __html:exhibition.node.title}} />
                                <h2>{exhibition.node.exhibition_subtitle}</h2>
                            </Link>
                        </ExhibitionItem>
                    )   
                }
            })}
            </OnViewWrapper>

            {/* soon */}
            <Heading className="overviewHeading"><h1>soon</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">

            {allExhibitions.map((exhibition, index) => {
                const currentStatus = today - exhibition.node.acf.startingDateNoFormat
                if (currentStatus < 0 ) {
                    return(
                        <ExhibitionItem className="two-grid-item" key={exhibition.node.id}>
                                    
                                    <Link className="link" to={exhibition.node.path}>
                                        <p className="date-small">{exhibition.node.acf.starting_date}</p>
                                        {exhibition.node.acf.fullwidth_image != null &&
                                            <img alt={index} src={exhibition.node.acf.fullwidth_image.source_url} />
                                        }
                                        <h1 dangerouslySetInnerHTML={{ __html:exhibition.node.title}} />
                                        <h2>{exhibition.node.exhibition_subtitle}</h2>
                                    </Link>
                                
                        </ExhibitionItem>
                    )
                }
            })}
            </OnViewWrapper>
            

            {/* past */}
            <Heading className="overviewHeading"><h1>past</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allExhibitions.map(exhibition => {
                const currentStatus = today - exhibition.node.acf.startingDateNoFormat
                const duration = exhibition.node.acf.endingDateNoFormat - exhibition.node.acf.startingDateNoFormat
                if (currentStatus >= 0 && currentStatus > duration) {
                    return (
                        <ExhibitionItem className="two-grid-item" key={exhibition.node.id}>
                            <Link className="link" to={exhibition.node.path}>
                                <p className="date-small">{`${exhibition.node.acf.starting_date} – ${exhibition.node.acf.ending_date}`}</p>
                                {exhibition.node.acf.fullwidth_image != null &&
                                    <img alt={exhibition.node.acf.fullwidth_image.title} src={exhibition.node.acf.fullwidth_image.source_url} />
                                }
                                <h1 dangerouslySetInnerHTML={{ __html:exhibition.node.title}} />
                                <h2>{exhibition.node.exhibition_subtitle}</h2>
                            </Link> 
                        </ExhibitionItem>
                    )
                }
            })}
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
                }
            }
        }
    }
}
`