import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import StrategyGuide from 'views/StrategyGuide';
import {
  Article,
  getAllArticleSlugs,
  getArticleBySlug,
} from 'views/BlogArticle/data/articles';

interface Props {
  article: Article;
}

const StrategyGuidePage = ({ article }: Props): JSX.Element => {
  return <StrategyGuide article={article} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;
  const article = typeof slug === 'string' ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default StrategyGuidePage;
