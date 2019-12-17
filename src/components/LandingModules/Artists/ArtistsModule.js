
import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

const ArtistsModule = (props) => {

  const artistModule = props.edges

  const ArtistList = styled.div`
    .titleWrapper {
      padding-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .artist-name {
      position: relative;
      z-index: 2;
      &:hover {
        padding-left: 8%;
        img {
          display: block;
        }
      }
      h2 {
        z-index: 999;
        ${'' /* text-shadow: -1px 1px 0 #FFF,
				  1px 1px 0 #FFF,
				 1px -1px 0 #FFF,
				-1px -1px 0 #FFF; */}
      }
      img {
        pointer-events: none;
        display: none;
        position: absolute;
        max-height: 70vh;
        max-width: 60vw;
        object-fit: contain;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
    .artistList {
      padding: 3vw 0 5vw;
    }
  `

  return (
    <ArtistList>
      <div className="titleWrapper">
        <h1>Artists</h1>
        <Link to={`/artists`}><h2 className="underline">overview</h2></Link>
      </div>
      <div className="artistList">
        {artistModule.map((artist, index) => (
          <div className="artist" key={index}>
            <div className="artist-name">
              <Link to={`/artists/${artist.node.slug}`}><h2>{artist.node.acf.artist_name}</h2></Link>
              <img alt={index} src={artist.node.acf.preview_image === null ? artist.node.acf.fullwidth_image.source_url : artist.node.acf.preview_image.source_url} />
            </div>
          </div>
        ))}
      </div>
    </ArtistList>
  )
}

export default ArtistsModule
