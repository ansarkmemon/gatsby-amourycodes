module.exports = {
  siteMetadata: {
    title: 'Amoury - Frontend Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Space Mono\:400,700`],
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
