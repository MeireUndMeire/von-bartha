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
      custom_color
      color_scheme {
        acid_blue_on_clay_ash_green {
          acid_blue
          ash_green
        }
        acid_blue_on_haiti_violet_ {
          acid_blue
          haiti_violet
        }
        acid_blue_on_heather_blue {
          acid_blue
          heather_blue
        }
        acid_blue_on_tana_beige {
          acid_blue
          tana_beige
        }
        acid_green_on_fern_green {
          acid_green
          fern_green
        }
        value
        acid_green_on_haiti_violet {
          acid_green
          haiti_violet
        }
        acid_green_on_oyster_pink {
          acid_green
          oyster_pink
        }
        acid_green_on_topaz_violet {
          acid_green
          topaz_violet
        }
        acid_yellow_on_clay_ash_green {
          acid_yellow
          clay_ash_green
        }
        acid_yellow_on_haiti_violet {
          acid_yellow
          haiti_violet
        }
        acid_yellow_on_tana_beige {
          acid_yellow
          tana_beige
        }
        acid_yellow_on_vermilion_red {
          acid_yellow
          vermilion_red
        }
        celadon_green_on_haiti_violet {
          celadon_green
          haiti_violet
        }
        celadon_green_on_heather_blue {
          celadon_green
          heather_blue
        }
        celadon_green_on_koromiko_orange {
          celadon_green
          koromiko_orange
        }
        celadon_green_on_vermilion_red {
          celadon_green
          vermilion_red
        }
        vermilion_red_on_clay_ash_green {
          clay_ash_green
          vermilion_red
        }
        vermilion_red_on_haiti_violet {
          haiti_violet
          vermilion_red
        }
        vermilion_red_on_tana_beige {
          tana_beige
          vermilion_red
        }
        vermilion_red_on_topaz_violet {
          topaz_violet
          vermilion_red
        }
      }
      fullwidth_image2
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

export const publicationFragment = graphql`
  fragment AcfPublication on wordpress__wp_publicationsAcf {
    artists_book_name
    color_scheme
    custom_color
    email
    report_image3
    download {
      source_url
    }
    report_title
    type_of_publication
    artists_book_image {
      title
      source_url
    }
    background_color
  }
`


            