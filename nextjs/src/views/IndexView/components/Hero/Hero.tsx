/* eslint-disable linebreak-style */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Head from 'next/head';

const Hero = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Let's get better, together!
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              ></Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Head>
              Master Class Coaching and Gameplay Review.
              <br />
              Magic the Gathering Coaching, Pokemon Pocket, and Lorcana Coaching
              <meta
                property="og:title"
                content="Improve your skills, Elevate your game, Broaden your tactics, Boost your strategic edge, Become a stronger player!"
              />
            </Head>
            <Typography variant="h6" component="p" color="text.secondary">
              Master Class Coaching and Gameplay Review.
              <br />
              Magic the Gathering Coaching, Pokemon Pocket, and Lorcana Coaching
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              fullWidth={isMd ? false : true}
              href="https://www.fiverr.com/philipsnguyen/build-or-tune-a-deck-of-your-choice-mtg-or-gods-unchained?context_referrer=gig_page&source=other_gigs_by&ref_ctx_id=fb59be5574254dd0abb5f52ef0da6edc&pckg_id=1&pos=3&seller_online=true&imp_id=e2f8c0af-42e9-4f8f-ba95-889e516c616b"
            >
              Learn more
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={'https://philipsweb.blob.core.windows.net/$web/Yourguyphil.jpg'}
          alt="Master Class Magic The Gathering Coaching | Master Class Lorcana Coaching | Master Class Pokemon Pocket Coaching"
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
