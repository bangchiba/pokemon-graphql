import Head from 'next/head'

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </Head>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
              <img src="/img/logo.png" alt="logo" />
              Pokemon
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">{children}</div>
    </>
  )
}

export default AppLayout
