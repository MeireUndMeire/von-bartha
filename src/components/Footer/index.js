import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"


const Contact = styled.div`
  padding: 1vw 1vw 10vw;
  width: 70%;
  a:visited, a {
    color: #FFF;
  }
`

const Table = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  font-size: 10px;
  text-transform: capitalize;
  
  padding: 1vw 1vw 10vw;

  a:visited, a {
    color: #FFF;
    &:not(:first-child) {margin-left: 20px;}
  }
`

const Location = styled.div`

`


export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        wordpressAcfOptions {
          options {
            contact {
              contact_text
              email
              phone
            }
            locations {
              address
              location_name
            }
            facebook
            instagram
            twitter
          }
        }
      }
    `}
    render={data => (
      <div>
        <Contact>   
          <h2>{data.wordpressAcfOptions.options.contact.contact_text}</h2>
          <h2>{data.wordpressAcfOptions.options.contact.phone}</h2>
          <a href={`mailto: ${data.wordpressAcfOptions.options.contact.email}`}><h2>{data.wordpressAcfOptions.options.contact.email}</h2></a>
        </Contact>
        <Table>
          <div className="table-item">
            <a href={`${data.wordpressAcfOptions.options.facebook}`} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={`${data.wordpressAcfOptions.options.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href={`${data.wordpressAcfOptions.options.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          {data.wordpressAcfOptions.options.locations.map((location, index) => (
            <location className="table-item" key={index}>
              <div>{location.address}</div>
              <div>{location.location_name}</div>
            </location>
          ))}
          <div className="table-item"></div>
          <div className="table-item"></div>
          <div className="table-item">Other pages</div>
        </Table>
      </div>
    )}
  />
)