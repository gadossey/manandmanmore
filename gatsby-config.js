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
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [],
      },
    },
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: `gatsby-remark-reading-time`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
  
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            'Poppins:100,200,300,400,500,600,700',
            'Roboto:100,300,400,500,600,700',
          ],
        },
      },
    },
    'gatsby-plugin-netlify',
  ],
};
