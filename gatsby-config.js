/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-source-hashnode",
      options: {
        username: "Kenn",
      },
    },
    // `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    // `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}

