/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Nike = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
          color: theme.palette.common.white,
          textTransform: 'uppercase',
        }}
      >
        Izzet Phoenix
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        align={'center'}
        sx={{
          color: theme.palette.common.white,
        }}
      >
        Magic The Gathering: Pioneer
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.mtggoldfish.com/deck/6755837#paper"
        >
          View Decklist
        </Button>
      </Box>
    </Box>
  );
};

export default Nike;
