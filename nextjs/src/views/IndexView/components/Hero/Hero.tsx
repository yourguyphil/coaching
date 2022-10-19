import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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
            <Typography variant="h6" component="p" color="text.secondary">
              Master Class Coaching and Gameplay Review.
              <br />
              Gods Unchained Coaching and Magic the Gathering Coaching.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href="https://www.fiverr.com/philipsnguyen/provide-competitive-gods-unchained-coaching"
            >
              Start now
            </Button>
            <Box
              component={Button}
              variant="outlined"
              color="primary"
              size="large"
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              fullWidth={isMd ? false : true}
              href="https://www.fiverr.com/philipsnguyen/provide-competitive-gods-unchained-coaching"
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
          alt="..."
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
