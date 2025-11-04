import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = (): JSX.Element => {
  return (
    <Box>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        Riftbound Strategy Guide
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
          Welcome to my Riftbound strategy guide - where we'll discuss strategies and tactics to push our game to the <b><i>next level</i></b>.
          <br></br>
          <br></br>
          From analyzing key play patterns to managing resources - here we will discuss how to read every match, stay one step ahead of your opponents, and make game-changing plays with confidence.
          <br></br>
          <br></br>
          Ready to play smarter and win more? Let's dive in and take your game to the next level!
      </Typography>
    </Box>
  );
};

export default Headline;

