import NextApp from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../lib/withApollo'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = await Component.getInitialProps(ctx)

    return { pageProps: { ...pageProps } }

  }

  render() {
    const { Component, pageProps, apolloClient } = this.props
    const Layout = Component.Layout || Fragment
    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
        <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600&display=swap"
              rel="stylesheet" />
          </Head>
          <Component { ...pageProps } />
        </Layout>
      </ApolloProvider>
    )
  }
}

export default withApollo(App)
