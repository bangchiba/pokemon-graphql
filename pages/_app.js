import NextApp from 'next/app'
import { Fragment } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../lib/withApollo'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps: { ...pageProps } }

  }

  render() {
    const { Component, pageProps, apolloClient } = this.props
    const Layout = Component.Layout || Fragment
    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </ApolloProvider>
    )
  }
}

export default withApollo(App)
