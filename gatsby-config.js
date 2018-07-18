module.exports = {
  siteMetadata: {
    title: 'The Brewery',
    subtitle: 'A Brewery'
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`, {
    resolve: "gatsby-source-wordpress",
    options: {
      baseUrl: "brewerywp.local",
      protocol: "http",
      hostingWPCOM: false,
      useACF: true,
      verboseOutput: true
    }
  }]
}
