module.exports = {
  siteMetadata: {
    title: 'Amoury - Frontend Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather`, `Space Mono`],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
