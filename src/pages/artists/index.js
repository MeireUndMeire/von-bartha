import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"

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
    margin: 40px 0 20px;
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

    const currentDate = props.data.site.buildTime //works


    return (

        <Layout>

            <Heading><h1>Artists</h1></Heading>
            <OnViewWrapper className="OnViewWrapper">
            {allArtists.map(artist => (
                     <ArtistItem className="two-grid-item" key={artist.node.id}>
                       
                                <img alt={artist.node.acf.fullwidth_image.title} src={artist.node.acf.fullwidth_image.source_url} />
                                <Link className="link" to={artist.node.path}>
                                    <h1>{artist.node.title}</h1>
                                    <h2>{artist.node.artist_subtitle}</h2>
                                </Link>
                            
                    </ArtistItem>
            ))}
            </OnViewWrapper>
            
            <Back>
                <Link to="/" className="backLink"><h2>&#8592; Back</h2></Link>
            </Back>
        </Layout>
    )
}

export default ArtistsPage

export const artistsQuery = graphql`
{
    site {
        buildTime
    }

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