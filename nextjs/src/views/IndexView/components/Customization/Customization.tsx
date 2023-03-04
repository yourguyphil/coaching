/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Customization = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          <h1>
            <u>Never Stop Improving Your Game!</u>
            <br />
            <br />
            Gods Unchained Coaching
            <br />
            &
            <br />
            Magic the Gathering Coaching.
          </h1>
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          <br />
          My name is Philips and I am a competitive card game player based in
          the US. (GU | MTG)
          <br />
          <br />
          Throughout my gaming career I have went through <b>NUMEROUS</b>{' '}
          difficult lessons but also got to enjoy a lot of success.
          <br />
          <br />
          Let me share what I have learned so that you more rapidly grow!
          <br />
          <br />
          Improve your skills, Elevate your game, Broaden your tactics, Boost
          your strategic edge, Become a stronger player!
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        ></Box>
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid container alignItems="center">
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={
                'https://philipsweb.blob.core.windows.net/$web/TopRanked.PNG'
              }
              alt="Gods Unchained Ranked Top Player"
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid
            container
            alignItems="center"
            sx={{
              marginTop: { xs: 0, md: '40%' },
            }}
          >
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={'https://philipsweb.blob.core.windows.net/$web/Tourney.PNG'}
              alt="Gods Unchained Top Weekend Ranked (GU)"
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Grid container alignItems="center">
            <Box
              component={LazyLoadImage}
              height={1}
              width={1}
              src={
                'https://philipsweb.blob.core.windows.net/$web/gpphoenix.PNG'
              }
              alt="Magic The Gathering Top Finish"
              effect="blur"
              boxShadow={3}
              borderRadius={2}
              maxWidth={600}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customization;
