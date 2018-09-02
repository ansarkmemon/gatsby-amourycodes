module.exports = {
  siteMetadata: {
    title: 'Amoury - Frontend Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Space Mono\:400,700`, `Roboto\:300,300i,400,500`, `Roboto Mono`],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
