module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MAN AND MAN ENTERPRISE`,
        short_name: `Man and Man`,
        description: `Improved Biomass Cooking in Africa`,
        start_url: `/`,
        background_color: `#00ff00`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
