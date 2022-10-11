import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const mock = [
  {
    title: 'Stratergy Guides',
    subtitle:
      'Refine your skills and create a plan to reach higher! Gain a strategic advantage through metagaming & optimizing lines of play.',
    icon: 'https://philipsweb.blob.core.windows.net/$web/Stratergy.png',
  },
  {
    title: 'Gameplay Review',
    subtitle:
      'Study your own play patterns and revist key moments. Understand improvement opportunities and build positive fundamental habits.',
    icon: 'https://philipsweb.blob.core.windows.net/$web/Review.png',
  },
  {
    title: 'Deck Building',
    subtitle:
      'Review top decks, your own collection and ensure what we bring to each match will be potent. Gain a competative edge through refined configurations of your cards.',
    icon: 'https://philipsweb.blob.core.windows.net/$web/Deck.png',
  },
];

const Reviews = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                flexDirection={'column'}
                display={'flex'}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    component={Avatar}
                    width={{ xs: 100, md: 100 }}
                    height={{ xs: 100, md: 100 }}
                    marginBottom={2}
                    src={item.icon}
                  />
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
