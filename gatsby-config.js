/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://davetheprogrammer.eu`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dave-the-programmer`,
        start_url: `/`,
        icon: `src/assets/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-zopfli`,
      options: {
        extensions: [`css`, `html`, `js`, `svg`, `jpeg`, `jpg`]
      }
    },
    'gatsby-plugin-sitemap',
  ],
}
