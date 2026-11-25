import React from 'react';
import Head from 'next/head';

const SITE_URL = 'https://coaching.philipsnguyen.com';
const SITE_NAME = 'Philips Nguyen | Master Class TCG Coaching';
const DEFAULT_IMAGE =
  'https://philipsweb.blob.core.windows.net/$web/metatagimage.jpg';
const DEFAULT_DESCRIPTION =
  'Want to maximize your strategic advantage playing card games? Premier Riftbound, Lorcana, Gods Unchained, Magic the Gathering, and Pokémon TCG Pocket coaching.';

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
  noindex = false,
  publishedTime,
  modifiedTime,
  jsonLd,
}: SeoProps): JSX.Element => {
  const fullTitle = title
    ? `${title} | Philips Nguyen TCG Coaching`
    : `${SITE_NAME} | Riftbound | Lorcana | Gods Unchained | MTG`;
  const url = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical}`
    : SITE_URL;

  const structuredData = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta key="title" name="title" content={fullTitle} />
      <meta key="description" name="description" content={description} />
      {keywords ? (
        <meta key="keywords" name="keywords" content={keywords} />
      ) : null}
      <meta
        key="robots"
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow'}
      />
      <link key="canonical" rel="canonical" href={url} />

      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />

      <meta
        key="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:url" property="twitter:url" content={url} />
      <meta key="twitter:title" property="twitter:title" content={fullTitle} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta key="twitter:image" property="twitter:image" content={image} />

      {type === 'article' && publishedTime ? (
        <meta
          key="article:published_time"
          property="article:published_time"
          content={publishedTime}
        />
      ) : null}
      {type === 'article' && modifiedTime ? (
        <meta
          key="article:modified_time"
          property="article:modified_time"
          content={modifiedTime}
        />
      ) : null}

      {structuredData.map((data, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  );
};

export default Seo;
export { SITE_URL, SITE_NAME, DEFAULT_IMAGE, DEFAULT_DESCRIPTION };
