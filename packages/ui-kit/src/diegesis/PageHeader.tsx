import { Box, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { MenuIcon } from './icons';
import { MuiMaterial } from '..';
import { AppLogo } from './app-logo';
const { styled } = MuiMaterial;

export type PageHeaderProps = {
  openSideNav?: () => void;
  title?: string;
};
export const MOCK_PAGE_HEADER_PROPS: Partial<PageHeaderProps> = {
  title: 'Open source Bibles resources',
};
export function PageHeader(props: PageHeaderProps) {
  const { openSideNav, title } = props;
  return (
    <HeaderWrapper>
      <Container>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <StyledAppLogo />
            <HeaderTitle variant="body1" color={'text.darker-gray'}>
              {title}
            </HeaderTitle>
          </Stack>
        </Stack>
      </Container>
      {openSideNav ? (
        <NavBox>
          <StyledMenuIcon
            onClick={() => {
              openSideNav();
            }}
          />
        </NavBox>
      ) : (
        <></>
      )}
    </HeaderWrapper>
  );
}

//#region styled components
const HeaderWrapper = styled(Box)(() => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  alignItems: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
}));
const StyledAppLogo = styled(AppLogo)(({ theme }) => ({
  marginTop: '5px',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    height: '2.1rem',
  },
}));
const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Noto Serif Display',
  marginLeft: '10px',
  lineHeight: '1.5rem',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  fontStyle: 'italic',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
const NavBox = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  position: 'absolute',
  right: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    right: '0px',
  },
}));
const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '1.5rem',
    height: '1.5rem',
  },
}));
//#endregion

export default PageHeader;
