import Head from 'next/head'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Pokemon</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
      </Head>
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="/img/logo.png" />
            Pokédex
          </a>
        </div>
      </div>
    </div>
      <div>{children}</div>
    </div> 
  )
}

export default AppLayout