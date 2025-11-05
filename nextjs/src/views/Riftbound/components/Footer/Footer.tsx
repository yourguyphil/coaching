/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Footer = (): JSX.Element => {
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
          sx={{
            fontWeight: 'medium',
          }}
        >
          Personalized Improvement with 1-on-1 Coaching!
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={'center'}
        alignItems={{ xs: 'stretched', sm: 'center' }}
      >
        <Box
          component={Button}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={!isMd}
          href='https://www.fiverr.com/philipsnguyen/build-or-tune-a-deck-of-your-choice-mtg-or-gods-unchained?context_referrer=gig_page&source=other_gigs_by&ref_ctx_id=fb59be5574254dd0abb5f52ef0da6edc&pckg_id=1&pos=3&seller_online=true&imp_id=e2f8c0af-42e9-4f8f-ba95-889e516c616b'
        >
          Start Now
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

