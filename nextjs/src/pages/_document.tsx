/* eslint-disable react/display-name */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="https://philipsweb.blob.core.windows.net/$web/placeholder.ico"
          />
          <meta name="theme-color" content="#ffffff" />
          <title>Philips Nguyen | Master Class TCG Coaching</title>
          <meta
            name="title"
            content="Philips Nguyen | Master Class TCG Coaching"
          ></meta>
          <meta
            name="description"
            content="Want to maximize your strategic advantage playing card games? For example: Gods Unchained or Magic the Gathering? Let's get better, together!

My name is Philips and I am a competitive card game player.

Throughout my gaming career I have went through NUMEROUS difficult lessons but also got to enjoy a lot of success.

Let me share what I have learned so that you more rapidly grow!"
          ></meta>

          <meta property="og:type" content="website"></meta>
          <meta
            property="og:url"
            content="https://coaching.philipsnguyen.com/"
          ></meta>
          <meta
            property="og:title"
            content="Philips Nguyen | Master Class TCG Coaching"
          ></meta>
          <meta
            property="og:description"
            content="Want to maximize your strategic advantage playing card games? For example: Gods Unchained or Magic the Gathering? Let's get better, together!

My name is Philips and I am a competitive card game player.

Throughout my gaming career I have went through NUMEROUS difficult lessons but also got to enjoy a lot of success.

Let me share what I have learned so that you more rapidly grow!

I offer to you my master class TCG coaching!"
          ></meta>
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          ></meta>

          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta
            property="twitter:url"
            content="https://coaching.philipsnguyen.com/"
          ></meta>
          <meta
            property="twitter:title"
            content="Philips Nguyen | Master Class TCG Coaching"
          ></meta>
          <meta
            property="twitter:description"
            content="Want to maximize your strategic advantage playing card games? For example: Gods Unchained or Magic the Gathering? Let's get better, together!

My name is Philips and I am a competitive card game player.

Throughout my gaming career I have went through NUMEROUS difficult lessons but also got to enjoy a lot of success.

Let me share what I have learned so that you more rapidly grow! 

I offer to you my master class TCG coaching!"
          ></meta>
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createCache({ key: 'css', prepend: true });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          // @ts-ignore
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
