const path = require(`path`);

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return graphql(
    `
  {
    site {
      buildTime(formatString: "YYYYMMDD")
      siteMetadata {
        siteUrl
      }
    }
    allWordpressPage {
      edges {
        node {
          path
          title
          slug
          id
          fields {
            deploy
          }
          acf {
            modules_page {
              __typename
              ... on WordPressAcf_event_module {
                event {
                  post_name
                }
              }
            }
          }
        }
      }
    }
    allWordpressWpExhibitions {
      edges {
        node {
          path
          id
          slug
          title
          fields {
            deploy
          }
        }
      }
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
        }
      }
    }
    allWordpressWpEvents {
      edges {
        node {
          id
          slug
          title
          path
          fields {
            deploy
          }
        }
      }
    }
  }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // access query results
    const {
      allWordpressPage,
      allWordpressWpExhibitions,
      allWordpressWpArtists,
      allWordpressWpEvents,
    } = result.data;

    // all templates
    const pageTemplate = path.resolve(`./src/templates/page.js`);
    const exhibitionTemplate = path.resolve(`./src/templates/exhibition.js`);
    const artistTemplate = path.resolve(`./src/templates/artist.js`);
    const eventTemplate = path.resolve(`./src/templates/event.js`);


    // create page for pages
    allWordpressPage.edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        if (edge.node.slug === "landing-page") {
          console.log(JSON.stringify(edge.node.acf.modules_page, null, 4))
          const moduleList = edge.node.acf.modules_page
          moduleList.map(module => {
            const typeName = module.__typename
            if (typeName === "WordPressAcf_event_module") {
              console.log(JSON.stringify(module.event.post_name, null, 4))
              createPage({
                path: edge.node.path,
                component: pageTemplate,
                context: {
                  id: edge.node.id,
                  eventName: module.event.post_name
                }
              })
            }
          })
        } else {
          createPage({
            path: edge.node.path,
            component: pageTemplate,
            context: {
              id: edge.node.id,
            }
          })
        }
      }
    })
    
    // create page per exhibition
    allWordpressWpExhibitions.edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: edge.node.path,
          component: exhibitionTemplate,
          context: {
            id: edge.node.id,
            slug: edge.node.slug 
          }
        })        
      }
    })

    // create page per artist
    allWordpressWpArtists.edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: edge.node.path,
          component: artistTemplate,
          context: {
            id: edge.node.id,
            slug: edge.node.slug 
          }
        })        
      }
    })

    // create page per event
    allWordpressWpEvents.edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: edge.node.path,
          component: eventTemplate,
          context: {
            id: edge.node.id,
            slug: edge.node.slug 
          }
        })        
      }
    })



    return null;
  })
}
