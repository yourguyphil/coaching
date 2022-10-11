import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={{ xs: 400, md: 480 }}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://philipsweb.blob.core.windows.net/$web/myLogoPhilips.svg'
                  : 'https://philipsweb.blob.core.windows.net/$web/myLogoPhilips.svg'
              }
              height={1}
              width={1}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Philips Nguyen 2022
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
