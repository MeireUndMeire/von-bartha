
export const query = graphql`
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

