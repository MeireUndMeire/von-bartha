import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"
import Arrow from '../../components/Icons/Arrow'

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
    text-align: left;
`

//48.5% for each element + 1% margin-left + document margin 1% left & right makes 100%
const ArtistItem = styled.div`
    .date-small {
        margin: 0;
    }
`

const Back = styled.div`

`


const ArtistsPage = (props) => {
    const allArtists = props.data.allWordpressWpArtists.edges

    return (

        <Layout>

            <Heading className="overviewHeading"><h1>Artists</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allArtists.map(artist => (
                <ArtistItem className="two-grid-item" key={artist.node.id}>
                        <Link className="link" to={artist.node.path}>
                            <img alt={artist.node.acf.fullwidth_image.title} src={artist.node.acf.fullwidth_image.source_url} />
                            <h1>{artist.node.title}</h1>
                            <h2>{artist.node.artist_subtitle}</h2>
                        </Link>           
                </ArtistItem>
            ))}
            </OnViewWrapper>
            
            <Back>
                <Link to="/" className="backLink"><h2><Arrow width={100} height={100} /> Back</h2></Link>
            </Back>
        </Layout>
    )
}

export default ArtistsPage

export const artistsQuery = graphql`
{
    allWordpressWpArtists {
        edges {
            node {
            id
            slug
            title
            path
            fields {
                deploy
            }
            acf {
                artist_name
                fullwidth_image {
                    source_url
                }
                preview_image {
                    source_url
                }
            }
            }
        }
    }
}
`