
import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const Events = styled.div`
  position: relative;
`

const Event = styled.div`
  position: relative
  @media only screen and (max-width: 767px) {
    padding: 1vw 2vw 5vw;
  }
  &.fullWidth {
    width: 100vw;
  }
  h1, h2 {
    margin-left: 8vw;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    .textWrapper {
      margin: 1rem 0 4rem;
    }
    .image {
      display: flex;
      align-self: flex-end;
      img {
        max-width: 50vw;
        @media only screen and (max-width: 767px) {
          max-height: 60vh;
          width: 60vw;
        }
      }
    }
  }
  .eventLink {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0 1rem;
    border-radius: 1rem;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
      color: #FFF;
      font-size: 2rem;
      line-height: 3rem;
      margin-left: 0;
    }
  }
`


const EventModule = ({allEvents, event}) => {
  
  
  const landingEventName = event.moduleItem.event.post_name
  const events = allEvents.allEvents.edges

  const image = event.moduleItem.image
  const textColor = event.moduleItem.text_color
  const backgroundColor = event.moduleItem.background_color

  

  return (
    <Events>
      {events.map((event, index) => {
        if (event.node.slug === landingEventName) {
          return (
            <Event key={index} className="fullWidth" style={{backgroundColor: backgroundColor, color: textColor}}>
              <div className="wrapper">
                <div className="textWrapper">
                  <h1>{event.node.acf.event_name}</h1>
                  <h2>{event.node.acf.starting_date}</h2>
                  <h2>{event.node.acf.event_location}</h2>
                </div>
                <div className="image">
                  <img src={image.source_url} />
                </div>
              </div>
              <Link className="eventLink" to={`/events/${event.node.slug}`}><h1>Read more</h1></Link>
            </Event>
          )
        }
      })}
    </Events>
  )
}


export default EventModule