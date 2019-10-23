module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://7d6236da009e4951a98980581bc55e78@sentry.io/1783802',
        environment: process.env.NODE_ENV,
        // enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
  siteMetadata: {
    title: 'Priscila Oliveira',
  },
  pathPrefix: '/priscilaoliveira',
}
