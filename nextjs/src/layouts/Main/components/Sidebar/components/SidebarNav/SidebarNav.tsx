import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

interface Props {
  pages: {
    portfolio: Array<PageItem>;
    freecoaching: Array<PageItem>;
    aboutme: Array<PageItem>;
  };
}

const SidebarNav = ({ pages }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    portfolio: portfolioPages,
    freecoaching: freecoachingPages,
    aboutme: aboutmePages,
  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
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
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Free Gaming Resources'} items={portfolioPages} />
        </Box>
        <Box>
          <NavItem title={'Free Stratergy Guides'} items={freecoachingPages} />
        </Box>
        <Box>
          <NavItem title={'About Me'} items={aboutmePages} />
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://www.fiverr.com/philipsnguyen/provide-competitive-gods-unchained-coaching"
          >
            Start Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
