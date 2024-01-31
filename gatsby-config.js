module.exports = {
  siteMetadata: {
    title: `Improved Biomass Cooking in Africa`,
    author: `MITWORK GHANA LIMITED`,
    about: `MAN AND MAN ENTERPRISE targets includes homes, restaurants, peri-urban and rural areas where charcoal and fire wood is predominantly the source of fuel.`,
    description: `MAN AND MAN ENTERPRISE targets includes homes, restaurants, peri-urban and rural areas where charcoal and fire wood is predominantly the source of fuel.`,
    siteUrl: `https://manandmanenterprise.com`,
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
