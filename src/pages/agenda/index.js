import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'

import Layout from '../../components/layout'
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

const EventItem = styled.div`
`

const Back = styled.div`

`


const AgendaPage = (props) => {
    const allEvents = props.data.allWordpressWpEvents.edges
    let today = moment(new Date()).format('YYYYMMDD')

    let resultAmountOnView = 0
    let resultAmountSoon = 0
    let resultAmountPast = 0

    console.log()

    return (

        <Layout>
            <Header>Agenda</Header>

            {/* on view */}
            {resultAmountOnView !== 0 &&
                <Heading className="overviewHeading"><h1>now</h1></Heading>
            }
            <OnViewWrapper className="OnViewWrapper">
            {allEvents.map(event => {
                const currentStatus = today - event.node.acf.startingDateNoFormat
                const duration = event.node.acf.endingDateNoFormat - event.node.acf.startingDateNoFormat
                if (currentStatus >= 0 && currentStatus <= duration) {
                    return (
                    resultAmountOnView++, 
                    <EventItem className="two-grid-item" key={event.node.id}>
                                <Link className="link" to={event.node.path}>
                                    <p className="date-small">Until {event.node.acf.ending_date}</p>
                                    {event.node.acf.fullwidth_image != null &&
                                        <img alt={event.node.acf.fullwidth_image} src={event.node.acf.fullwidth_image} />
                                    }
                                    <h1>{event.node.acf.event_name}</h1>
                                    {event.node.acf.event_subtitle != null &&
                                    <h2>{event.node.acf.event_subtitle}</h2>
                                    }
                                </Link>
                    </EventItem>
                    )
                }
            })}
            </OnViewWrapper>

            {/* soon */}
            {resultAmountSoon !== 0 &&
                <Heading className="overviewHeading"><h1>soon</h1></Heading>
            }
            <OnViewWrapper className="OnViewWrapper">
            {allEvents.map(event => {
                const currentStatus = today - event.node.acf.startingDateNoFormat
                if (currentStatus < 0 ) {
                    return(
                    resultAmountSoon++,
                     <EventItem className="two-grid-item" key={event.node.id}>
                                
                                <Link className="link" to={event.node.path}>
                                    <p className="date-small">{event.node.acf.starting_date}</p>
                                    {event.node.acf.fullwidth_image != null &&
                                        <img alt={event.node.acf.fullwidth_image} src={event.node.acf.fullwidth_image} />
                                    }
                                    <h1>{event.node.acf.event_name}</h1>
                                    {event.node.acf.event_subtitle != null &&
                                        <h2>{event.node.acf.event_subtitle}</h2>
                                    }
                                </Link>
                            
                    </EventItem>
                    )
                }
            })}
            </OnViewWrapper>
            

            {/* past */}
            {resultAmountPast > 0 &&
                <Heading className="overviewHeading"><h1>past</h1></Heading>
            }
            <OnViewWrapper className="OnViewWrapper">
            {allEvents.map(event => {
                const currentStatus = today - event.node.acf.startingDateNoFormat
                const duration = event.node.acf.endingDateNoFormat - event.node.acf.startingDateNoFormat
                if (currentStatus >= 0 && currentStatus > duration) {
                    return (
                        resultAmountPast++,
                        <EventItem className="two-grid-item" key={event.node.id}>
                            <Link className="link" to={event.node.path}>
                                <p className="date-small">{event.node.acf.starting_date} – {event.node.acf.ending_date}</p>
                                {event.node.acf.fullwidth_image != null &&
                                    <img alt={event.node.acf.fullwidth_image} src={event.node.acf.fullwidth_image} />
                                }
                                <h1>{event.node.acf.event_name}</h1>
                                {event.node.acf.event_subtitle != null &&
                                    <h2>{event.node.acf.event_subtitle}</h2>
                                }
                            </Link> 
                        </EventItem>
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

export default AgendaPage

export const EventsQuery = graphql`
{
    allWordpressWpEvents(sort: {order: DESC, fields: acf___starting_date}) {
        edges {
            node {
                id
                path
                acf {
                    ...AcfEvent
                }
            }
        }
    }
}
`