### 👋 Looking for a way to support live previews with Gatsby + WordPress?
[Check this repo out](https://github.com/justinwhall/wordpress-gatsby-preview-starter)!

# Gatsby + Headless WordPress + Netlify Starter

A starter skeleton that leverages the WordPress API for [Gatsby](https://github.com/gatsbyjs/gatsby/). Support for Continuous integration with Netlify. Publishing posts call the Netlify build hook. Deploy to Netlify stage or production enviroment when updating a WordPress post or page.

## Getting Started
1. Clone or download the project
2. `npm install --global gatsby-cli` (if you don't have Gatsby CLI installed)
3. In the root of your project yarn install
4. Run `yarn develop` -- _not_ `gatsby develop`

### Netlify
Get the deploy trigger url:
Select site stage-bartha > Settings > Build & deploy > scroll down to Build Hooks and copy the URL.
When you want to trigger build hook when publishing in Wordpress you have to put in this URL in the Gatsby Toolkit plugin in Wordpress. You can find it under Settings > Gatsby Toolkit.

### Carousel functionality
For sliders we have used the Flickity plugin: https://flickity.metafizzy.co/
We chose this plugin because it is highly customizable.

