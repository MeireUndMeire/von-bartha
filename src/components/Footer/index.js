import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Twitter from '../Icons/Twitter'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'


const Contact = styled.div`
  padding-bottom: 10vw;
  width: 70%;
  h2 {
    text-transform: none;
  }
  a:visited, a {
    color: #FFF;
  }
`

const Table = styled.div`

  padding-bottom: 10vw;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  
    color: #FFF;
    font-family: 'Trade-Gothic';
  }

  a:visited, a {
    color: #FFF;
    &:not(:first-child) {margin-left: 20px;}
  }
  .table-item {
    width: fit-content;
    float: left;
    margin-left: 10vw;
    &:last-child {
      float: right;
      text-align: right;
      margin-left: 0;
    }
    &:first-child {
      margin-left: 0;
    }
    .wys p {
      color: #FFF;
      font-family: 'Trade-Gothic';
      font-size: 16px;
      text-transform: capitalize;
      margin-bottom: 0;
      line-height: 20px;
    }
  }

`

const FooterWrapper = styled.div`
  display: table;
  &.footerWrapper {
    &::selection {
      color: green;
    }
  }
  padding: 1vw 1vw 8vw;
  @media only screen and (max-width: 767px) {
    padding-bottom: 2vw;
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
      <FooterWrapper className="footerWrapper">
        <Contact>   
          <h2>{data.wordpressAcfOptions.options.contact.contact_text}</h2>
          <h2>{data.wordpressAcfOptions.options.contact.phone}</h2>
          <a href={`mailto: ${data.wordpressAcfOptions.options.contact.email}`}><h2>{data.wordpressAcfOptions.options.contact.email}</h2></a>
        </Contact>
        <Table>
          <div className="table-item">
            <a href={`${data.wordpressAcfOptions.options.facebook}`} target="_blank" rel="noopener noreferrer"><Facebook width={30} height={30} /></a>
            <a href={`${data.wordpressAcfOptions.options.twitter}`} target="_blank" rel="noopener noreferrer"><Twitter width={30} height={30} /></a>
            <a href={`${data.wordpressAcfOptions.options.instagram}`} target="_blank" rel="noopener noreferrer"><Instagram width={30} height={30} /></a>
          </div>
          {data.wordpressAcfOptions.options.locations.map((location, index) => (
            <Location className="table-item" key={index}>
              <div className="wys" dangerouslySetInnerHTML={{__html: location.location_name}}></div>
              <div className="wys" dangerouslySetInnerHTML={{__html: location.address}}></div>
            </Location>
          ))}
          <div className="table-item pageLinks"><Link className="link" to={`/press-releases`}>Press</Link></div>
        </Table>
      </FooterWrapper>
    )}
  />
)