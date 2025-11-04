/* eslint-disable linebreak-style */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    portfolio: Array<PageItem>;
    freecoaching: Array<PageItem>;
    aboutme: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
  pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    portfolio: portfolioPages,
    freecoaching: freecoachingPages,
    aboutme: aboutmePages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
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
            mode === 'light' && !colorInvert
              ? 'https://philipsweb.blob.core.windows.net/$web/myLogoPhilips.svg'
              : 'https://philipsweb.blob.core.windows.net/$web/myLogoPhilips.svg'
          }
          height={1}
          width={1}
          paddingRight={2}
        />
      </Box>
      <Box 
        sx={{ 
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center'
        }}
      >
        <Box marginLeft={4} sx={{ whiteSpace: 'nowrap' }}>
          <NavItem
            title={'Free Gaming Resources'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4} sx={{ whiteSpace: 'nowrap' }}>
          <NavItem
            title={'Free Stratergy Guides'}
            id={'freecoaching-pages'}
            items={freecoachingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4} sx={{ whiteSpace: 'nowrap' }}>
          <NavItem
            title={'About Me'}
            id={'aboutme-pages'}
            items={aboutmePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4} display="flex" sx={{ flexShrink: 0 }}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="_blank"
            href="https://www.fiverr.com/philipsnguyen/build-or-tune-a-deck-of-your-choice-mtg-or-gods-unchained?context_referrer=gig_page&source=other_gigs_by&ref_ctx_id=fb59be5574254dd0abb5f52ef0da6edc&pckg_id=1&pos=3&seller_online=true&imp_id=e2f8c0af-42e9-4f8f-ba95-889e516c616b"
            size="large"
            sx={{ whiteSpace: 'nowrap' }}
          >
            Start Now
          </Button>
          <Button
            variant="contained"
            color="success"
            component="a"
            target="_blank"
            href="https://ko-fi.com/yourguyphil"
            size="large"
            sx={{ ml: 2, whiteSpace: 'nowrap', color: 'common.white' }}
          >
            Support Me
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
