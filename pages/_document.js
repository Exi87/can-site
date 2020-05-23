import Document, { Head, Main, NextScript } from "next/document";

class myDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <meta charset="UTF-8" />
     <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
     <meta name="description" content=""/>
     <meta name="keywords" content=""/>
     <meta name="author" content="Tooplate"/>
     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          {/* <link rel="stylesheet" href="/static/styles.css" /> */}
          {/*
        import boostrap and other css files
        */}
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/static/css/animate.css" />
          <link rel="stylesheet" href="/static/css/owl.carousel.css" />
          <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
          <script src="https://kit.fontawesome.com/1f862ba2ec.js" crossorigin="anonymous"></script>
      {/* MAIN CSS  */}
      <link rel="stylesheet" href="/static/css/tooplate-style.css"></link>

          {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        /> */}
        </Head>

        <body>
          <Main />

          <NextScript />
          {/* <!-- SCRIPTS --> */}
     <script src="/static/js/jquery.js"></script>
     <script src="/static/js/bootstrap.min.js"></script>
     <script src="/static/js/jquery.sticky.js"></script>
     <script src="/static/js/jquery.stellar.min.js"></script>
     <script src="/static/js/wow.min.js"></script>
     <script src="/static/js/smoothscroll.js"></script>
     <script src="/static/js/owl.carousel.min.js"></script>
     <script src="/static/js/custom.js"></script>
        </body>
      </html>
    );
  }
}

export default myDocument;
