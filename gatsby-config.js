module.exports = {
  siteMetadata: {
    title: 'Amoury - Frontend Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:300,300i,400,500`, `Roboto Mono`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-102082183-2',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Amoury - Full-Stack Developer',
        short_name: 'Amoury',
        start_url: '/',
        background_color: '#0b2027',
        theme_color: '#4cff00',
        display: 'minimal-ui',
        icon: 'src/assets/main-logo.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
