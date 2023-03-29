import { Box, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AppLogo from './AppLogo';
import { MenuIcon } from './icons';
import './Page.css';
import { useColorModeContext } from '..';

interface IProps {
  openSideNav?: () => void;
  title?: string;
}
export function PageHeader(props: IProps) {
  const { openSideNav, title = 'Open source Bibles resources' } = props;
  const colorMode = useColorModeContext();
  return (
    <Box display={'flex'} sx={{position: 'relative', width: '100%'}} alignItems={'center'} className='page-header'>
      <Container>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <AppLogo className={'app-logo'} />
            <Typography
              variant="body1"
              className="header-title"
              sx={{ color: colorMode.getColor('darker-gray') }}
            >
              {title}
            </Typography>
          </Stack>
        </Stack>
      </Container>
      {openSideNav ? (
        <Box sx={{display: 'inline-flex'}} className="nav-btn">
          <MenuIcon
            onClick={() => {
              openSideNav();
            }}
          />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
export default PageHeader;
