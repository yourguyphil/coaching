/* eslint-disable react/no-unescaped-entities */
import Image from 'mui-image';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Welcome = (): JSX.Element => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box
      sx={{
        paddingTop: 5,
      }}
    >
      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        My Current Decks Of Choice!
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        <br />
        Choosing the right deck is like choosing a weapon for battle.
        <br />
        <br />
        It must fit your <u>style</u>, complement your <u>strengths</u>, and
        give you the best chance to emerge{' '}
        <u>
          <b>victorious</b>
        </u>
        !
      </Typography>
    </Box>
  );

  return (
    <Box>
      <Grid container>
        <Image
          src="https://philipsweb.blob.core.windows.net/$web/jace2.jpg"
          style={{
            width: '30%',
            height: '30%',
            objectFit: 'cover',
            border: '5px solid white',
          }}
        />
        <Grid item xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent={'center'}
          >
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
