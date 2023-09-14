import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
      return (
            <Html>
                <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
      );
    }
}