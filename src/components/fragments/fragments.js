import { graphql } from 'gatsby'

export const exhibitionFragment = graphql`
    fragment AcfExhibition on wordpress__wp_exhibitionsAcf {
      fullwidth_image {
        id
        source_url
        title
      }
      artist_object {
        post_name
        post_title
      }
      optional_artist {
        artist
      }
      starting_date(formatString: "MMM DD")
      ending_date(formatString: "MMM DD YYYY")
      exhibition_location
      exhibition_subtitle
      gallery_module_exhibitions {
        slides {
          id
          image {
            title
            source_url
          }
          caption
        }
      }
      header
      press_release {
        source_url
      }
      seo {
        description
        image
        keywords
      }
      textblock
    }
`

export const eventFragment = graphql`
    fragment AcfEvent on wordpress__wp_eventsAcf {
      color_background
      color_text
      download_file {
        title
        source_url
      }
      download_text
      startingDateNoFormat: starting_date
      endingDateNoFormat: ending_date
      starting_date(formatString: "MMM DD")
      ending_date(formatString: "MMM DD YYYY")
      event_location
      event_name
      event_subtitle
      fullwidth_image
      gallery_module_events {
        slides {
          image {
            source_url
          }
          caption
        }
      }
      header
      link_text
      link_url
      textblock
  }
`

            