import React from 'react';
import BlogArticle from 'views/BlogArticle';
import Seo, { SITE_URL } from 'components/Seo';
import { getPublishedArticles } from 'views/BlogArticle/data/articles';

const StrategyGuidesPage = (): JSX.Element => {
  const articles = getPublishedArticles();

  return (
    <>
      <Seo
        title="Featured TCG Strategy Guides"
        description="Curated trading card game strategy guides spanning MTG, Lorcana, Gods Unchained, Riftbound, and more. Metagaming, deckbuilding, practice, and tournament tips."
        canonical="/strategy-guides"
        keywords="TCG strategy guides, trading card game guides, MTG strategy, Lorcana strategy, Gods Unchained strategy, Riftbound strategy, tournament tips"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Featured TCG Strategy Guides',
          description:
            'Curated trading card game strategy guides for competitive players.',
          url: `${SITE_URL}/strategy-guides`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: articles.map((article, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `${SITE_URL}/strategy-guides/${article.slug}`,
              name: article.title,
            })),
          },
        }}
      />
      <BlogArticle />
    </>
  );
};

export default StrategyGuidesPage;
