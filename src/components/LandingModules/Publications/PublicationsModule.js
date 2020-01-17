
import React from "react"
import { Link } from "gatsby"
import Flickity from 'react-flickity-component'
import styled from 'styled-components'

const PublicationsModule = (props) => {

  const publicationsModule = props.edges


  const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: false,
    pageDots: false,
    resize: true,
    cellAlign: 'left'
  }

  const PublicationsList = styled.div`
    .titleWrapper {
      padding-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .publication-name {
      
    }
    .publicationsList {
      padding: 5rem 0 5rem;
      @media only screen and (max-width: 767px) {
        padding: 2rem 0 5rem;
      }
    }
  `

  const Gallery = styled.div`

  .hover-item:hover ~ .caption {
    display: none;
  }

  img {
    max-width: 20vw;
    width: auto;
    @media only screen and (max-width: 767px) {
      max-width: 40vw;
    }
  }
  .flickity-slider {
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 100%;
  }
  .slide {
    margin-left: 1rem;
    &:first-child {
      margin-left: 0;
    }
    @media only screen and (max-width: 767px) {
      margin-left: .5rem;
    }
  }
  .caption {
    margin-top: 1rem;
    margin-left: 2rem;
    max-width: fit-content;
  }
  .caption > p {
    font-family: 'Trade-Gothic';
    font-size: 1rem;
    line-height: 20px;
    margin-bottom: 5px;
  }
`

  return (
    <PublicationsList>
      <div className="titleWrapper">
        <h1>Publications</h1>
        <Link to={`/publications`}><h2 className="underline">See all</h2></Link>
      </div>
      <div className="publicationsList">
        <Gallery>
          <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
            {publicationsModule.map((publication, index) => (
              <div key={index} className="slide" id={'slide' + index}>
                {publication.node.acf.type_of_publication === "Artist's Book" && 
                  publication.node.acf.artists_book_image !== null &&
                    <div className="publication-name">                  
                      <img className="hover-item" alt={index} src={publication.node.acf.artists_book_image.source_url} />
                    </div>
                }
                {publication.node.acf.type_of_publication === "Report" && 
                  publication.node.acf.img_report != null &&
                    <div className="publication-name">
                      <img className="hover-item" alt={index} src={publication.node.acf.report_image3.source_url} />
                    </div>
                }
              </div>

            ))}
          </Flickity>
        </Gallery>
      </div>
    </PublicationsList>
  )
}

export default PublicationsModule


{/* <Caption>
{publicationsModule.map((publication, index) => (
  <div className="captionWrapper">
  {publication.node.acf.type_of_publication === "Artist's Book" &&
    <div className="caption"><h1>{publication.node.acf.artists_book_name}</h1></div>
  }
  {publication.node.acf.type_of_publication === "Report" &&
    <div className="caption"><h1>{publication.node.acf.report_title}</h1></div>
  }
  </div>
))}
</Caption> */}