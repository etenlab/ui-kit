import React from 'react';
import { Box, Stack, Typography, styled } from '@mui/material';

import { Container } from '@mui/system';
import { FlexibleMenuIcon } from './MenuIcon';

import { BasicUIConfig, BasicFlexibleProps } from './UIConfigProvider';
import { withFlexible } from './withFlexible';

import { FlexibleAppLogo } from './AppLogo';

interface HeaderConfig extends BasicUIConfig {
  contents: {
    title: string;
  };
  styles: {
    backgroundColor: string;
    containerPadding: string;
    fontFamily: string;
    lineHeight: string;
    fontStyle: string;
  };
}

export const defaultHeaderConfig: HeaderConfig = {
  componentName: 'Header',
  contents: {
    title: 'Open source Bibles resources',
  },
  styles: {
    backgroundColor: '#fff',
    containerPadding: '3rem 0px',
    fontFamily: 'Noto Serif Display',
    lineHeight: '1.5rem',
    fontStyle: 'italic',
  },
};

export interface HeaderProps extends BasicFlexibleProps<HeaderConfig> {
  openSideNav?: () => void;
}

export function Header({
  uiConfig = defaultHeaderConfig,
  openSideNav,
}: HeaderProps) {
  return (
    <HeaderWrapper>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <FlexibleAppLogo
              parentPath={uiConfig.configPath!}
              id="header-app-logo"
            />

            <Typography
              variant="body1"
              sx={{
                fontFamily: uiConfig.styles.fontFamily,
                marginLeft: '10px',
                lineHeight: uiConfig.styles.lineHeight,
                fontSize: uiConfig.styles.lineHeight,
                fontWeight: 'normal',
                fontStyle: uiConfig.styles.fontStyle,
              }}
            >
              {uiConfig.contents.title}
            </Typography>
          </Stack>
        </Stack>
      </Container>
      {openSideNav ? (
        <NavBox>
          <FlexibleMenuIcon
            id="header-menu-icon"
            parentPath={uiConfig.configPath!}
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

const HeaderWrapper = styled(Box)({
  display: 'flex',
  position: 'relative',
  width: '100%',
  alignItems: 'center',
  paddingTop: '10px',
  paddingBottom: '10px',
});

const NavBox = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  position: 'absolute',
  right: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    right: '0px',
  },
}));

export const FlexibleHeader = withFlexible<HeaderConfig, HeaderProps>(
  Header,
  defaultHeaderConfig,
);