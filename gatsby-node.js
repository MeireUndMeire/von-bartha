const DEPLOY_ENV = process.env.DEPLOY_ENV || 'lbn_published_production' || 'lbn_published_stage';

/**
 * Generate node edges
 *
 * @param {any} { node, actions, getNode }
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  /**
   * If these don't exist, the LBN WordPress Plugin isn't installed – so build all posts.
   */
  if (
    !Object.prototype.hasOwnProperty.call(node, 'meta') ||
    !Object.prototype.hasOwnProperty.call(node.meta, 'lbn_published_production') ||
    !Object.prototype.hasOwnProperty.call(node.meta, 'lbn_published_stage')
    ) {
    createNodeField({ node, name: 'deploy', value: true });
    return;
  }

  let deploy;

  if (node.meta[DEPLOY_ENV]) {
    deploy = true;
  } else {
    deploy = false;
  }

  createNodeField({ node, name: 'deploy', value: deploy });
};

const createPages = require('./gatsby/createPages');

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
}