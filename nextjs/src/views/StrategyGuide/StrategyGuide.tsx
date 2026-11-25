import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import NextLink from 'next/link';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Seo, { SITE_URL } from 'components/Seo';
import {
  Article,
  getRelatedArticles,
} from 'views/BlogArticle/data/articles';

interface Props {
  article: Article;
}

const StrategyGuide = ({ article }: Props): JSX.Element => {
  const theme = useTheme();
  const related = getRelatedArticles(article.slug);
  const canonical = `/strategy-guides/${article.slug}`;
  const modifiedTime = article.date_updated || article.date_created;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.seoDescription,
      image: [article.main_image],
      datePublished: article.date_created,
      dateModified: modifiedTime,
      author: {
        '@type': 'Person',
        name: 'Philips Nguyen',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Person',
        name: 'Philips Nguyen',
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}${canonical}`,
      },
      keywords: article.keywords,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Strategy Guides',
          item: `${SITE_URL}/strategy-guides`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: `${SITE_URL}${canonical}`,
        },
      ],
    },
  ];

  return (
    <Main>
      <Seo
        title={article.seoTitle}
        description={article.seoDescription}
        canonical={canonical}
        image={article.main_image}
        type="article"
        keywords={article.keywords}
        publishedTime={article.date_created}
        modifiedTime={modifiedTime}
        jsonLd={jsonLd}
      />
      <Box bgcolor={'alternate.main'} paddingTop={4} paddingBottom={2}>
        <Container>
          <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 3 }}>
            <NextLink href="/" passHref>
              <Link underline="hover" color="inherit">
                Home
              </Link>
            </NextLink>
            <NextLink href="/strategy-guides" passHref>
              <Link underline="hover" color="inherit">
                Strategy Guides
              </Link>
            </NextLink>
            <Typography color="text.primary">{article.title}</Typography>
          </Breadcrumbs>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={700}
            gutterBottom
          >
            {article.title}
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            {article.description}
          </Typography>
        </Container>
      </Box>
      <Container>
        <Box
          component="img"
          src={article.main_image}
          alt={article.title}
          sx={{
            width: '100%',
            maxHeight: 420,
            objectFit: 'cover',
            borderRadius: 2,
            marginY: 4,
          }}
        />
        <Box
          component="article"
          sx={{
            maxWidth: 800,
            margin: '0 auto',
            '& p': {
              marginBottom: 2,
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'text.primary',
            },
            '& strong': {
              fontWeight: 700,
            },
          }}
          dangerouslySetInnerHTML={{ __html: article.article }}
        />
        <Divider sx={{ marginY: 6 }} />
        <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
          More Strategy Guides
        </Typography>
        <Grid container spacing={4} marginTop={1}>
          {related.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <NextLink href={`/strategy-guides/${item.slug}`} passHref>
                <Card
                  component="a"
                  elevation={0}
                  sx={{
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(0.5)})`,
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardMedia
                    image={item.main_image}
                    title={item.title}
                    sx={{ height: 180 }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="text.primary">
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </NextLink>
            </Grid>
          ))}
        </Grid>
        <Box marginTop={4} marginBottom={2}>
          <NextLink href="/strategy-guides" passHref>
            <Link underline="hover" fontWeight={600}>
              ← All Featured Strategy Guides
            </Link>
          </NextLink>
        </Box>
      </Container>
    </Main>
  );
};

export default StrategyGuide;
