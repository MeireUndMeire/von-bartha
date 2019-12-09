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
    } = result.data;

    // all templates
    const pageTemplate = path.resolve(`./src/templates/page.js`);
    const exhibitionTemplate = path.resolve(`./src/templates/exhibition.js`);
    const artistTemplate = path.resolve(`./src/templates/artist.js`);


    // create page for pages
    allWordpressPage.edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: edge.node.path,
          component: pageTemplate,
          context: {
            id: edge.node.id
          }
        })
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



    return null;
  })
}
