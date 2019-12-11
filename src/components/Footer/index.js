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
        <Contact>   
          <h2>{data.wordpressAcfOptions.options.contact.contact_text}</h2>
          <h2>{data.wordpressAcfOptions.options.contact.phone}</h2>
          <a href={`mailto: ${data.wordpressAcfOptions.options.contact.email}`}><h2>{data.wordpressAcfOptions.options.contact.email}</h2></a>
        </Contact>
    )}
  />
)