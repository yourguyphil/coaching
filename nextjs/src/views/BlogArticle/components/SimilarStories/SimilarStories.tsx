/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Modal from '@mui/material/Modal';

export type PromotionInputs = {
  locationOfPromotion: string;
  dateOfPromotion: string;
};

export interface Articles {
  data: Article[];
}

export interface Article {
  id: number;
  status: string;
  sort: any;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  title: string;
  main_image: string;
  article: string;
  description: string;
}

const SimilarStories = (): JSX.Element => {
  const theme = useTheme();
  const cmsArticleURL = 'https://cms.philipsnguyen.com/items/articles';

  const [articles, setArticles] = useState<Articles>(null);

  useEffect(() => {
    axios
      .get(cmsArticleURL)
      .then((articles: AxiosResponse<Articles>) => {
        setArticles(articles.data);
        console.log(articles.data);
      })
      .catch((e) => {
        const err = e as AxiosError;
        console.log(err.response.data);
      });
  }, []);

  return (
    <Box>
      <Grid container spacing={4}>
        {articles?.data.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'div'}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                  cursor: 'pointer',
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  image={item.main_image}
                  title={item.title}
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
                  <Typography variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display={'flex'} flexDirection={'column'}>
                  <Box marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SimilarStories;
