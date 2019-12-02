const path = require(`path`);

module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;

  return graphql(
    `
  {
    site {
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
    allWordpressWpExhibitions(sort: {fields: [date]}) {
      edges {
        node {
          path
          id
          slug
          title
          acf {
            exhibition_subtitle
          }
          fields {
            deploy
          }
        }
      }
    }
  }
  `
  ).then(result => {
    console.log(JSON.stringify(result, null, 4))
    if (result.errors) {
      throw result.errors
    }

    // access query results
    const {
      allWordpressPage,
      allWordpressWpExhibitions,
    } = result.data;

    // all templates
    const pageTemplate = path.resolve(`./src/templates/page.js`);
    const exhibitionTemplate = path.resolve(`./src/templates/exhibition.js`);


    // create pagePrefix
    const { pagePrefix } = result.data.site.siteMetadata.siteUrl;


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
    
    // create page for exhibitions
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



    return null;
  })
}
