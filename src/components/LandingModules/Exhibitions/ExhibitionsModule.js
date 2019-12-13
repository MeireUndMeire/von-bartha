
import React, { useState } from "react"
import { Link } from "gatsby"
import moment from 'moment'

import styled from "styled-components"

const Header = styled.h1`
    text-align: left;
    margin-bottom: 40px;
`

const ExhibitionModule = styled.div`

`

const OnViewWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    &.hide {
      display: none;
    }
    &.show {
      display: flex;
    }
    .imageWrapper {
        width: 98vw;
        position: relative;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        height: 60vw;
        @media only screen and (max-width: 767px) {
          width: 96vw;
        }
    }
    .textWrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;
        width: 100%;
        height: 100%;
        
        h1 {
            text-align: center;
            padding: 0 20%;
            text-transform: none;
            color: #FFF;
        }
    }
    .itemInfoWrapper {
      margin-top: 10px;
    }
`

const Heading = styled.div`
    display: flex;
    justify-content: space-between;

    h1:hover {
      cursor:pointer;
    }
    text-align: center;
    .not-active {
      color: #D8D8D8;
    }
    .is-active {
      color: #1D1D1B;
    }
`

const ExhibitionItem = styled.div`
  margin-bottom: 10vw;
`

const ExhibitionsModule = (props) => {

  const allExhibitions = props
  let today = moment(new Date()).format('YYYYMMDD')
  const maxResults = 2 // this mean 3 (0,1,2)
  let resultAmountPast = 0
  let resultAmountOnView = 0
  let resultAmountSoon = 0

  const [value, setValue] = useState(1);
  
  return (
    <ExhibitionModule>

      <Heading>
      <h1 className={value === 0 ? 'is-active' : 'not-active'} onClick={() => setValue(0)}>past</h1>
      <h1 className={value === 1 ? 'is-active' : 'not-active'} onClick={() => setValue(1)}>on view</h1>
      <h1 className={value === 2 ? 'is-active' : 'not-active'} onClick={() => setValue(2)}>soon</h1>
      </Heading>

      {/* on view */}
      <OnViewWrapper className="OnViewWrapper" className={value === 1 ? 'show' : 'hide'}>
      {allExhibitions.edges.map(exhibition => {
          const currentStatus = today - exhibition.node.acf.startingDateNoFormat
          const duration = exhibition.node.acf.endingDateNoFormat - exhibition.node.acf.startingDateNoFormat
          if (currentStatus >= 0 && currentStatus <= duration && resultAmountOnView <= maxResults) {
              return (
                  resultAmountOnView++, 
                  <ExhibitionItem key={exhibition.node.id}>
                      <Link className="link" to={exhibition.node.path}>
                          <div className="imageWrapper" style={{backgroundImage: `url(${exhibition.node.acf.fullwidth_image.source_url})`}}>
                            <div className="textWrapper"><h1 >{exhibition.node.title}</h1></div>
                          </div>
                          <div className="itemInfoWrapper">
                            <h2>{exhibition.node.acf.exhibition_subtitle}</h2>
                            <h2>{exhibition.node.acf.starting_date} – {exhibition.node.acf.ending_date}</h2>
                            <h2>{exhibition.node.acf.exhibition_location}</h2>
                          </div>
                      </Link>
                  </ExhibitionItem>
              )   
          }
      })}
      </OnViewWrapper>

      {/* soon */}
      <OnViewWrapper className="OnViewWrapper" className={value === 2 ? 'show' : 'hide'}>
      {allExhibitions.edges.map(exhibition => {
          const currentStatus = today - exhibition.node.acf.startingDateNoFormat
          const duration = exhibition.node.acf.endingDateNoFormat - exhibition.node.acf.startingDateNoFormat
          if (currentStatus < 0 && resultAmountSoon <= maxResults) {
              return(
                  resultAmountSoon++,
                  <ExhibitionItem key={exhibition.node.id}>
                      <Link className="link" to={exhibition.node.path}>
                          <div className="imageWrapper" style={{backgroundImage: `url(${exhibition.node.acf.fullwidth_image})`}}>
                            <div className="textWrapper"><h1 >{exhibition.node.title}</h1></div>
                          </div>
                          <div className="itemInfoWrapper">
                            <h2>{exhibition.node.acf.exhibition_subtitle}</h2>
                            <h2>{exhibition.node.acf.starting_date} – {exhibition.node.acf.ending_date}</h2>
                            <h2>{exhibition.node.acf.exhibition_location}</h2>
                          </div>
                      </Link>
                  </ExhibitionItem>
              )
          }
      })}
      </OnViewWrapper>
    
      {/* past */}
      <OnViewWrapper className="OnViewWrapper" className={value === 0 ? 'show' : 'hide'}>
      {allExhibitions.edges.map(exhibition => {
          const currentStatus = today - exhibition.node.acf.startingDateNoFormat
          const duration = exhibition.node.acf.endingDateNoFormat - exhibition.node.acf.startingDateNoFormat
          if (currentStatus >= 0 && currentStatus > duration && resultAmountPast <= maxResults) {
              return (
                  resultAmountPast++,
                  <ExhibitionItem key={exhibition.node.id}>
                      <Link className="link" to={exhibition.node.path}>
                          <div className="imageWrapper" style={{backgroundImage: `url(${exhibition.node.acf.fullwidth_image.source_url})`}}>
                            <div className="textWrapper"><h1 >{exhibition.node.title}</h1></div>
                          </div>
                          <div className="itemInfoWrapper">
                            <h2>{exhibition.node.acf.exhibition_subtitle}</h2>
                            <h2>{exhibition.node.acf.starting_date} – {exhibition.node.acf.ending_date}</h2>
                            <h2>{exhibition.node.acf.exhibition_location}</h2>
                          </div>
                      </Link> 
                  </ExhibitionItem>
              )
          }
      })}
      </OnViewWrapper>
    </ExhibitionModule>
  )
}

export default ExhibitionsModule