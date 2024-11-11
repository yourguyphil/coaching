import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const mock = [
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/godslogo.png',
    name: 'Gods Unchained | GU',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/placeholder.png',
    name: 'Blank',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/mtglogo.png',
    name: 'Magic the Gathering | MTG',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/placeholder.png',
    name: 'Blank',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/pocket.png',
    name: 'Pokemon Pocket',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/placeholder.png',
    name: 'Blank',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/kaijudologo.png',
    name: 'Kaijudo',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/placeholder.png',
    name: 'Blank',
  },
  {
    logo: 'https://philipsweb.blob.core.windows.net/$web/mtgalogo.png',
    name: 'Magic the Gathering Arena | MTGA',
  },
];

const Partners = (): JSX.Element => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Learn more about me!
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary">
            <br />I am <b>OBSESSED</b> with just about any card game I can get
            my hands on!
            <br />
            <br />
            Here are just a few games I play on a competitive level that I can
            provide you with my experiences with.
            <br />
            <br />
            Resume:
            <ul>
              <li>
                Professional Magic the Gathering Player with $2000+ earnings
              </li>
              <li>Genetic Apex Top Emblem Holder in Pokemon Pocket</li>
              <li>
                2024 Dreamhack Modern Champion
              </li>
              <li>Mythic Gods Unchained Player</li> 
              <li>Mythic SpellSlingers Player</li>
              <li>Ex Mtg Arena Mythic Player</li>
              <li>Ex Professional Kaijudo Player</li>
              <li>Ex Legend Hearthstone Player</li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Typography>
          <Box marginTop={2}></Box>
        </Box>
      </Grid>
      <Grid item container spacing={2} xs={12} md={6}>
        {mock.map((item, i) => (
          <Grid
            item
            xs={4}
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 3,
                  }}
                >
                  <Box
                    component={LazyLoadImage}
                    height={200}
                    width={200}
                    src={item.logo}
                    alt={item.name}
                    effect="blur"
                  />
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Partners;
