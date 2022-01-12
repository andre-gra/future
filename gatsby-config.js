require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
        version: 'draft',
        /* languages: ['de', 'at'] // Optional parameter.
        Omission will retrieve all languages by default. */
      },
    },
  ],
};
