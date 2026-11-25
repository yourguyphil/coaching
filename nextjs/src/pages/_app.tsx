/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';
import Seo from '../components/Seo';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="icon"
          href="https://philipsweb.blob.core.windows.net/$web/placeholder.ico"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Seo />
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}
