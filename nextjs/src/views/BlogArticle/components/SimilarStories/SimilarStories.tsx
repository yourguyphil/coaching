/* eslint-disable linebreak-style */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import { getPublishedArticles } from '../../data/articles';

const SimilarStories = (): JSX.Element => {
  const theme = useTheme();
  const articles = getPublishedArticles();

  return (
    <Box>
      <Grid container spacing={4}>
        {articles.map((article, i) => (
          <Grid item xs={12} md={4} key={article.id ?? i}>
            <NextLink
              href={`/strategy-guides/${article.slug}`}
              passHref
            >
              <Card
                component="a"
                elevation={0}
                sx={{
                  height: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  backgroundImage: 'none',
                  boxShadow: 4,
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <CardMedia
                  image={article.main_image}
                  title={article.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: 'relative',
                  }}
                >
                  <Box
                    component={'svg'}
                    viewBox="0 0 2880 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      color: theme.palette.background.paper,
                      transform: 'scale(2)',
                      height: 'auto',
                      width: 1,
                      transformOrigin: 'top center',
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                      fill="currentColor"
                    />
                  </Box>
                </CardMedia>
                <Box component={CardContent} position={'relative'}>
                  <Typography variant={'h6'} gutterBottom color="text.primary">
                    {article.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {article.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    fontWeight={600}
                  >
                    Read guide →
                  </Typography>
                </Box>
              </Card>
            </NextLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimilarStories;
