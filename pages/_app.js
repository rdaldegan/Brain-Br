import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import Header from '../src/components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0c0852',
    secondary: '#12c0b4',
    mainText: '#FFFFFF',
    contrastText: '#12c0b4',
    headerFooterBg: '#0c0852',
    bodyBg: '#FFFFFF',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brain-Br – Neurociência Psicologia Urbanismo</title>
        <link rel="icon" href="/round-icon.png" />
        <meta name="title" content="Brain-Br" />
        <meta name="description" content="Neurociência Psicologia Urbanismo" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="brain-br.vercel.app" />
        <meta property="og:title" content="Brain-Br" />
        <meta property="og:description" content="Neurociência Psicologia Urbanismo" />
        <meta property="og:image" content="/round-icon.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="brain-br.vercel.app" />
        <meta property="twitter:title" content="Brain-Br" />
        <meta property="twitter:description" content="Neurociência Psicologia Urbanismo" />
        <meta property="twitter:image" content="/round-icon.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
