/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Script from 'next/script';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// TypeScript declarations for Plausible
declare global {
  interface Window {
    plausible?: {
      (args: any): void;
      q?: any[];
      init?: (i?: any) => void;
      o?: any;
    };
  }
}

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    // Initialize Plausible
    if (typeof window !== 'undefined') {
      window.plausible = window.plausible || function() {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
      window.plausible.init = window.plausible.init || function(i: any) {
        window.plausible.o = i || {};
      };
      window.plausible.init();
    }
  }, []);

  return (
    <Box>
      {/* Privacy-friendly analytics by Plausible */}
      <Script
        async
        src="https://plausible.io/js/pa-7rHGiNNXJF-96qkNMo-HU.js"
        strategy="afterInteractive"
      />
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

