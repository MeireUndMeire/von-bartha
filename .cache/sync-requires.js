const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/templates/post.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/templates/category.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jeromebraeken/Projects/MuM/Bartha/dev-von-bartha/src/pages/index.js")))
}

