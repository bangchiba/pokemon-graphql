require('dotenv').config()

module.exports = withCSS({
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL
  },
})