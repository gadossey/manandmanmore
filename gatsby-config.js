module.exports = {
  siteMetadata: {
    title: `MAN AND MAN ENTERPRISE`,
    siteUrl: `https://manandmanenterprise.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Improved Biomass Cooking in Africa`,
        short_name: `MAN AND MAN ENTERPRISE `,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
