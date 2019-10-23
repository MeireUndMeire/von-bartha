// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-category-js": () => import("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/templates/category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/.cache/data.json")

